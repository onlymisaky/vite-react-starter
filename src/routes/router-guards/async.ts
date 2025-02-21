/* eslint-disable no-console */
import type { Guard } from '../components/RouteGuard/context';

function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const asyncGuard: Guard = async (_to, _from, next) => {
  console.log(
    `%c [call ${_to.pathname} asyncGuard]`,
    'color: #FFF; font-weight: bold; background-color: #E6A23C;',
  );
  await wait(1000);
  next(`${_to.pathname} asyncGuard`);
  console.log(
    `%c [called ${_to.pathname} asyncGuard next]`,
    'color: #FFF; font-weight: bold; background-color: #67C23A;',
  );
};
