/**
 * @type {import('@remix-run/dev').AppConfig}
 */
module.exports = {
  // SEE: https://github.com/remix-run/remix/issues/4759#issuecomment-1336118490
  future: {
    v2_meta: true,
    v2_errorBoundary: true,
    v2_normalizeFormMethod: true,
    v2_routeConvention: true,
    unstable_tailwind: true,
  },
  ignoredRouteFiles: ['**/.*'],
  watchPaths: [
    './remix.config.js',
    './tailwind.config.js',
    './app/**/*',
    './libs/**/*',
    './types/**/*'
  ]
};
