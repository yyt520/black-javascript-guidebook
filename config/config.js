const config = {
  mode: 'site',
  title: 'JavaScript Guidebook',
  description: 'JavaScript 完全知识体系',
  base: '/black-javascript-guidebook/',
  publicPath: '/black-javascript-guidebook/',
  favicon: './favicon.ico',
  logo: 'http://img.mrsingsing.com/javascript-guidebook-favicon.png',
  hash: true,
  exportStatic: {},
  navs: [
    null,
    {
      title: 'Github',
      path: 'https://github.com/yyt520/black-javascript-guidebook',
    },
  ],
  extraBabelPlugins: [
    [
      'import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css',
      },
    ],
  ],
};

if (process.env.NODE_ENV !== 'development') {
  config.ssr = {};
}

export default config;
