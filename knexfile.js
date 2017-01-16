module.exports = {
  development: {
    client: 'mysql',
    connection: {
      server: '127.0.0.1',
      user: 'root',
      database: 'graphql',
    },
    debug: false,
    pool: { min: 0, max: 10 },
  },
  production: {
    client: 'mysql',
    connection: {
      server: '127.0.0.1',
      user: 'root',
      database: 'graphql',
    },
  },
};
