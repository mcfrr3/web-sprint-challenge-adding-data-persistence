// Update with your config settings.

const sharedConfig = {
  client: 'sqlite3',
  useNullAsDefault: true,
  migrations: {
    directory: './data/migrations'
  },
  seeds: {
    directory: './data/seeds'
  }
}

module.exports = {

  development: {
    ...sharedConfig,
    connection: {
      filename: "./data/dev.sqlite3"
    }
  },
  testing: {
    ...sharedConfig,
    connection: {
      filename: "./data/test.db3"
    }
  },
  pool: {
    afterCreate: (conn, done) => {
      conn.run('PRAGMA foreign_keys = ON', done)
    }
  }

};
