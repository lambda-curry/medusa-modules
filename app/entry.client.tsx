// https://github.com/remix-run/remix/issues/2947

import { hydrateRoot } from 'react-dom/client';
import { RemixBrowser } from '@remix-run/react';
import { startTransition, StrictMode } from 'react';
import { useLocation, useMatches } from '@remix-run/react';
import { useEffect } from 'react';
import * as Sentry from '@sentry/remix';

declare global {
  interface Window {
    ENV: any;
  }
}

Sentry.init({
  dsn: window?.ENV?.SENTRY_DSN,
  environment: window?.ENV?.SENTRY_ENVIRONMENT,
  tracesSampleRate: 1,
  integrations: [
    new Sentry.BrowserTracing({
      routingInstrumentation: Sentry.remixRouterInstrumentation(useEffect, useLocation, useMatches)
    })
  ]
});

const hydrate = () =>
  startTransition(() => {
    hydrateRoot(
      document,
      <StrictMode>
        <RemixBrowser />
      </StrictMode>
    );
  });

if (window.requestIdleCallback) {
  window.requestIdleCallback(hydrate);
} else {
  // Safari doesn't support requestIdleCallback
  // https://caniuse.com/requestidlecallback
  window.setTimeout(hydrate, 1);
}
