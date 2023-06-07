import { LoaderArgs, V2_MetaFunction, json } from '@remix-run/node';

export const getRootLoader = async ({ request }: LoaderArgs) => {
  // Add custom font links here.
  const fontLinks: string[] = [];

  return json({
    fontLinks,
    env: {
      NODE_ENV: process.env.NODE_ENV,
      ENVIRONMENT: process.env.ENVIRONMENT,
    },
  });
};

export type RootLoader = typeof getRootLoader;

export const getRootMeta: V2_MetaFunction = ({ data }) => {
  const title = 'Medusa Store';
  const description = 'Test Medusa Store with Product Modules';
  return [
    { title },
    { name: 'description', content: description },
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
  ];
};
