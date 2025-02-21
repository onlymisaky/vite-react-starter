/* eslint-disable no-console */
import type { Guard } from '../components/RouteGuard/context';

function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const asyncGuard: Guard = async (to, next) => {
  console.log(
    `%c [${to.pathname} asyncGuard] 等待1秒后执行next`,
    'color: #FFF; font-weight: bold; background-color: #E6A23C;',
  );
  await wait(1000);
  next(`|%c [${to.pathname} asyncGuard] 正在执行next | color: #FFF; font-weight: bold; background-color: #E6A23C;`);
  console.log(
    `%c [${to.pathname} asyncGuard] next执行完毕`,
    'color: #FFF; font-weight: bold; background-color: #E6A23C;',
  );
};
