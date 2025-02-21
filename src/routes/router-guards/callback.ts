/* eslint-disable no-console */
import type { Guard } from '../components/RouteGuard/context';

export const callbackGuard: Guard = (to, next) => {
  console.log(
    `%c [${to.pathname} callbackGuard] 等待3秒后执行next`,
    'color: #FFF; font-weight: bold; background-color: #F56C6C;',
  );
  setTimeout(() => {
    next(`|
      %c [${to.pathname} callbackGuard] 正在执行next | 
      color: #FFF; font-weight: bold; background-color: #F56C6C;`,
    );
    console.log(
      `%c [${to.pathname} callbackGuard] next执行完毕`,
      'color: #FFF; font-weight: bold; background-color: #F56C6C;',
    );
    setTimeout(() => {
      // next 只会执行一次，所以这里不会再打印了
      next(`|
        %c [${to.pathname} 2callbackGuard] 正在执行next | 
        color: #FFF; font-weight: bold; background-color: #F56C6C;`,
      );
    }, 0);
  }, 3000);
};
