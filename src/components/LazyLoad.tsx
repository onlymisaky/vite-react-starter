import type { ComponentProps, ComponentType, LazyExoticComponent } from 'react';
import { Suspense } from 'react';
import Loading from './Loading';

interface LazyLoadProps {
  component: LazyExoticComponent<ComponentType<any>>
  fallback?: ComponentProps<typeof Suspense>['fallback']
}

export default function LazyLoad({ component: Component, fallback }: LazyLoadProps) {
  return (
    <Suspense fallback={fallback || <Loading />}>
      <Component />
    </Suspense>
  );
};
