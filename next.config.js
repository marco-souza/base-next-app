const isProd = process.env.NODE_ENV === 'production';
const basePath = `/${process.env.BASE_PATH}`;

module.exports = {
  // Use the CDN in production and localhost for development.
  assetPrefix: isProd ? basePath : '',
};
