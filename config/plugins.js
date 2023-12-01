module.exports = ({ env }) => ({
  // ...
  'custom-admin': {
    enabled: true,
    resolve: './src/plugins/custom-admin',
    config: {
      mySecret: env('MY_SECRET')
    }
  },
  // ...
})
