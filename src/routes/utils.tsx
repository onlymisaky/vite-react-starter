import type { ReactNode } from 'react';
import LazyLoad from '@/components/LazyLoad';
import { lazy } from 'react';

export function lazyLoadComponent(
  componentLoader: Parameters<typeof lazy>[0],
  fallback?: ReactNode,
) {
  // 通过闭包创建一个组件，触发新的 Suspense fallback
  const WrappedComponent = () => {
    return (
      <LazyLoad
        component={lazy(componentLoader)}
        fallback={fallback}
      />
    );
  };

  return <WrappedComponent />;
}
