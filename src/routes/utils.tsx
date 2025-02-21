import type { ComponentProps, ComponentType } from 'react';
import LazyLoad from '@/components/LazyLoad';
import Loading from '@/components/Loading';
import { lazy } from 'react';
import RouteGuard from './components/RouteGuard';

export function renderLazyLoader(
  componentLoader: Parameters<typeof lazy>[0],
  fallback?: ComponentProps<typeof LazyLoad>['fallback'],
) {
  return (
    <LazyLoad
      component={lazy(componentLoader)}
      fallback={fallback}
    />
  );

  // 之前没有发现是因为 v7_startTransition: true 会导致 Suspense 失效
  // 现在 v7_startTransition: false 可以正常使用，所以不需要通过闭包创建一个组件了

  // // 通过闭包创建一个组件，触发新的 Suspense fallback
  // const WrappedComponent = () => {
  //   return (
  //     <LazyLoad
  //       component={lazy(componentLoader)}
  //       fallback={fallback}
  //     />
  //   );
  // };

  // return <WrappedComponent />;
}

const DEFAULT_GUARD_PROPS: ComponentProps<typeof RouteGuard> = {
  guards: [],
  useGlobalGuard: true,
  fallback: <Loading />,
};

function withRouteGuard<P extends object>(WrappedComponent: ComponentType<P>) {
  return function RouteGuardedComponent({
    guards = DEFAULT_GUARD_PROPS.guards,
    useGlobalGuard = DEFAULT_GUARD_PROPS.useGlobalGuard,
    fallback = DEFAULT_GUARD_PROPS.fallback,
    ...componentProps
  }: P & ComponentProps<typeof RouteGuard>) {
    const guardProps = {
      guards,
      useGlobalGuard,
      fallback,
    };

    return (
      <RouteGuard {...guardProps}>
        <WrappedComponent {...(componentProps as P)} />
      </RouteGuard>
    );
  };
}

export function renderLazyLoaderWithGuard(
  componentLoader: Parameters<typeof lazy>[0],
  guardProps: ComponentProps<typeof RouteGuard> = DEFAULT_GUARD_PROPS,
) {
  const LazyComponent = () => renderLazyLoader(componentLoader);

  const Component = withRouteGuard(LazyComponent);

  return <Component {...guardProps} />;
}
