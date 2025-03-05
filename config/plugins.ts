export default ({ env }) => ({
  'strapi-import-export': {
    enabled: true,
  },
  upload: {
    config: {
      provider: env('NODE_ENV') === 'production' ? 'aws-s3' : 'local',
      providerOptions: env('NODE_ENV') === 'production' 
        ? {
            baseUrl: env('MINIO_PUBLIC_ENDPOINT'),
            s3Options: {
              credentials: {
                accessKeyId: env('MINIO_ROOT_USER'),
                secretAccessKey: env('MINIO_ROOT_PASSWORD'),
              },
              endpoint: env('MINIO_PRIVATE_ENDPOINT'),
              region: env('MINIO_REGION'),
              forcePathStyle: true,
              params: {
                Bucket: env('MINIO_BUCKET'),
              },
            },
          }
        : {},
    },
  },
});
