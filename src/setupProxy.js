const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/',
    createProxyMiddleware({
      target: 'https://car-blog-api.herokuapp.com',
      changeOrigin: true,
    })
  );
};