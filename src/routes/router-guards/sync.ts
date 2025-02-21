/* eslint-disable no-console */
import type { Guard } from '../components/RouteGuard/context';

export const syncGuard: Guard = (to, _from, next) => {
  console.log(
    `%c [call ${to.pathname} syncGuard]`,
    'color: #FFF; font-weight: bold; background-color: #E6A23C;',
  );
  next(`${to.pathname} syncGuard`);
  console.log(
    `%c [called ${to.pathname} syncGuard next]`,
    'color: #FFF; font-weight: bold; background-color: #67C23A;',
  );
};
