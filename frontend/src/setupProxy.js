const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: process.env.REACT_APP_BACKEND_HOST || "http://127.0.0.1:80",
      pathRewrite: { "^/api": "" }
    })
  );
};
