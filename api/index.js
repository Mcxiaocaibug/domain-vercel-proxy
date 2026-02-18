const { createProxyMiddleware } = require('http-proxy-middleware');

const apiProxy = createProxyMiddleware({
  target: 'https://many-tammy-neptunium-95b946c4.koyeb.app',
  changeOrigin: true,
  ws: true, // Enable WebSocket proxying
  pathRewrite: {
    '^/': '/', // Rewrite path
  },
  onProxyRes: function (proxyRes, req, res) {
    // Explicitly disable caching for dynamic content
    proxyRes.headers['Cache-Control'] = 'no-store, no-cache, must-revalidate, proxy-revalidate';
    proxyRes.headers['Pragma'] = 'no-cache';
    proxyRes.headers['Expires'] = '0';
  },
  onError: function (err, req, res) {
    console.error('Proxy Error:', err);
    res.writeHead(500, {
      'Content-Type': 'text/plain',
    });
    res.end('Proxy Error: ' + err.message);
  }
});

module.exports = (req, res) => {
  // Proxy the request
  return apiProxy(req, res, (result) => {
    if (result instanceof Error) {
      throw result;
    }
  });
};
