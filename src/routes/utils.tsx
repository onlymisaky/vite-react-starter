import type { ComponentProps } from 'react';
import LazyLoad from '@/components/LazyLoad';
import { lazy } from 'react';

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
