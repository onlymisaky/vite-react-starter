/* eslint-disable no-console */
import type { Guard } from '../components/RouteGuard/context';

export const syncGuard: Guard = (to, next) => {
  console.log(
    `%c [${to.pathname} syncGuard] 立即执行next`,
    'color: #FFF; font-weight: bold; background-color: #67C23A;',
  );
  next(`|%c [${to.pathname} syncGuard] 正在执行next | color: #FFF; font-weight: bold; background-color: #67C23A;`);
  console.log(
    `%c [${to.pathname} syncGuard] next执行完毕`,
    'color: #FFF; font-weight: bold; background-color: #67C23A;',
  );
};
