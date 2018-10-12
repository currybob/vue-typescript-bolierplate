module.exports = {
  baseUrl: process.env.NODE_ENV === 'production' ? '/dist/' : './',
  devServer: {
    host: '127.0.0.1',
    port: 3000,
    https: false,
    hotOnly: false,
  },
};
