const getUrl = (host: string) => {
  return host?.replace(/^https?:\/\//, '');
};

export default ({ env }) => {
  const isProd = env('NODE_ENV') === 'production';
  const imgSrc = [
    "'self'",
    'data:',
    'blob:',
    'market-assets.strapi.io',
  ];
  const mediaSrc = [
    "'self'",
    'data:',
    'blob:',
    'market-assets.strapi.io',
  ];

  if (isProd) {
    imgSrc.push(getUrl(env('MINIO_PRIVATE_ENDPOINT')));
    mediaSrc.push(getUrl(env('MINIO_PRIVATE_ENDPOINT')));
  }

  return [
    'strapi::logger',
    'strapi::errors',
    {
      name: 'strapi::security',
      config: {
        contentSecurityPolicy: {
          useDefaults: true,
          directives: {
            'connect-src': ["'self'", 'https:'],
            'img-src': imgSrc,
            'media-src': mediaSrc,
            upgradeInsecureRequests: null,
          },
        },
      },
    },
    'strapi::cors',
    'strapi::poweredBy',
    'strapi::query',
    'strapi::body',
    'strapi::session',
    'strapi::favicon',
    'strapi::public',
  ];
};
