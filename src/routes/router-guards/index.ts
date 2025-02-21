import { asyncGuard } from './async';
import { callbackGuard } from './callback';
import { syncGuard } from './sync';

export const routerGuards = [
  callbackGuard,
  syncGuard,
  asyncGuard,
];
