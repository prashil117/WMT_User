module.exports = {
    staticFileGlobs: [
      'dist/**.html',
      'dist/**.js',
      'dist/**.css',
      'dist/**.jpeg',
      'dist/**.png',
      'dist/assets/images/*',
      'dist/assets/icons/*'
    ],
   root: 'dist',
    stripPrefix: 'dist/',
    navigateFallback: '/index.html',
    // runtimeCaching: [{
    //   urlPattern: /rkdemotask\.herokuapp\.com/,   
    //   handler: 'networkFirst'
    // }]
  };