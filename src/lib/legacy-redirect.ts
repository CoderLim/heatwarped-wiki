import { redirect } from '@tanstack/react-router';

/** Permanent redirect for retired Mini Wars / ShipAny template URLs. */
export function redirectToHome() {
  throw redirect({ to: '/', statusCode: 301, replace: true });
}
