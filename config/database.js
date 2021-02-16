module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('DATABASE_HOST', 'gedik.dev'),
        port: env.int('DATABASE_PORT', 2253),
        database: env('DATABASE_NAME', 'contact'),
        username: env('DATABASE_USERNAME', 'postgres'),
        password: env('DATABASE_PASSWORD', '45443678a8248cb984e86eade8f9b10c'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});
