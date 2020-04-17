const { createProxyMiddleware } = require('http-proxy-middleware');
// 代理设置（该文件仅支持JavaScript语法，其他语法不支持）
module.exports = (app) => {
  app.use('/app', createProxyMiddleware({
      target: 'http://120.92.92.218:8080',
      changeOrigin: true,
    })
  );
  app.use('/api', dev());
  app.use('/jwt', dev());
};

// 自测环境
const dev = () => {
  return createProxyMiddleware({
    target: 'http://rds.zhongbaolianmeng.com',
    changeOrigin: true,
  })
}
// 测试环境
const test = () => {
  return createProxyMiddleware({
    target: 'http://platform.zhongbaolianmeng.com',
    changeOrigin: true,
  })
}
// uat环境
const uat = () => {
  return createProxyMiddleware({
    target: 'http://platform-uat.zhongbaolianmeng.com',
    changeOrigin: true,
  })
}
// 生产环境(只支持https)
const production = () => {
  return createProxyMiddleware({
    target: 'https://www.zhongbaounion.com',
    changeOrigin: true,
  })
}