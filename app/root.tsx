import { useRef } from 'react';
import type {
  LinksFunction,
  LoaderFunction,
  V2_MetaFunction,
} from '@remix-run/node';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from '@remix-run/react';
import { Page } from './components/layout/Page';

import globalCSS from '~/styles/global.css';
import { RootLoader, getRootLoader } from './utils/root';

export const loader: LoaderFunction = getRootLoader;

export const links: LinksFunction = () => [
  { rel: 'preload stylesheet', href: globalCSS, as: 'style', type: 'text/css' },
  { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
];

function App() {
  const headRef = useRef<HTMLHeadElement>(null);

  return (
    <html lang="en" className="min-h-screen">
      <head ref={headRef}>
        <Meta />
        <Links />
      </head>
      <body className="min-h-screen">
        <Page>
          <Outlet />
        </Page>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export default App;

export function ErrorBoundary(error: any) {
  console.error('error boundary error', error);

  return (
    <html>
      <head>
        <title>Oh no!</title>
        <Meta />
        <Links />
      </head>
      <body>
        {/* add the UI you want your users to see */}
        <Scripts />
      </body>
    </html>
  );
}
