import type { Location } from 'react-router-dom';
import { createContext, useContext } from 'react';

export type Guard = (
  to: Location,
  from: Location | null,
  next: (location?: Location | false | void | string) => void
) => void | Promise<void>;

export interface RouteGuardContextValue {
  guards: Guard[]
  // addGuard: (guard: Guard) => void
  // removeGuard: (guard: Guard) => void
  // clearGuards: () => void
}

export const RouteGuardContext = createContext<RouteGuardContextValue>({
  guards: [],
  // addGuard: () => { },
  // removeGuard: () => { },
  // clearGuards: () => { },
});

export const useRouteGuard = () => useContext(RouteGuardContext);
