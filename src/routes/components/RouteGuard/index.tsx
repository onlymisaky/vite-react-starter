import type { PropsWithChildren, ReactNode } from 'react';
import type { Location } from 'react-router-dom';
import type { Guard } from './context';
import { memo, useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useRouteGuard } from './context';

interface RouteGuardProps extends PropsWithChildren {
  guards?: Guard[]
  useGlobalGuard?: boolean
  fallback?: ReactNode
}

function once(fn: (...args: any[]) => void) {
  let called = false;
  function onceFn(...args: any[]) {
    if (called) {
      return;
    }
    called = true;
    fn(...args);
  }
  return onceFn;
}

function RouteGuard({
  children,
  guards: componentGuards,
  useGlobalGuard,
  fallback,
}: RouteGuardProps) {
  const location = useLocation();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const guardIndexRef = useRef(0);
  const isUnmountedRef = useRef(false);

  const { guards: globalGuards } = useRouteGuard();

  useEffect(() => {
    let allGuards = useGlobalGuard ? [...globalGuards, ...(componentGuards || [])] : componentGuards || [];
    allGuards = allGuards.filter(guard => typeof guard === 'function');
    if (!allGuards.length) {
      return;
    }

    const next: Parameters<Guard>[1] = async (to?: Location | false | void | string) => {
      // 如果组件已卸载，终止执行
      if (isUnmountedRef.current)
        return;

      const args = typeof to === 'string' ? to.split('|').map(item => item.trim()).filter(item => item) : [];
      if (args.length > 1) {
        // eslint-disable-next-line no-console
        console.log(...args);
      }

      if (to === false) {
        navigate(-1);
        return;
      }

      if ((to && typeof to === 'object') || (typeof to === 'string' && args.length === 0)) {
        navigate(to);
        return;
      }

      const currentGuardIndex = guardIndexRef.current;
      guardIndexRef.current += 1;

      if (currentGuardIndex >= allGuards.length) {
        setLoading(false);
        guardIndexRef.current = 0;
        return;
      }

      const nextGuard = allGuards[currentGuardIndex];
      const onceNext = once(next);

      // 等待微任务队列清空后再执行下一个 guard
      await Promise.resolve();
      await nextGuard(location, onceNext);
    };

    setLoading(true);
    guardIndexRef.current = 0;

    next();

    return () => {
      isUnmountedRef.current = true;
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return loading ? fallback : children;
};

export default memo(RouteGuard);
