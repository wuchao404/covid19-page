const { override, fixBabelImports, addLessLoader,setWebpackPublicPath } = require('customize-cra');
const config = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
  }),
  setWebpackPublicPath('/platformv1')
);
console.log('config:',config)
module.exports = config;