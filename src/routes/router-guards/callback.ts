/* eslint-disable no-console */
import type { Guard } from '../components/RouteGuard/context';

export const callbackGuard: Guard = (_to, _from, next) => {
  console.log(
    `%c [call ${_to.pathname} callbackGuard]`,
    'color: #FFF; font-weight: bold; background-color: #E6A23C;',
  );
  setTimeout(() => {
    next(`${_to.pathname} callbackGuard`);
    console.log(
      `%c [called ${_to.pathname} callbackGuard next]`,
      'color: #FFF; font-weight: bold; background-color: #67C23A;',
    );
    setTimeout(() => {
      // next 只会执行一次，所以这里不会再打印了
      next(`${_to.pathname} 2callbackGuard`);
    }, 0);
  }, 3000);
};
