require("./config");

module.exports = {
  client: "pg",
  debug: false,
  connection: {
    host:"localhost",
    port: "5432",
    user: "postgres",
    password: "password",
    database: "postgres",
    application_name: process.env.APP_NAME || "nobe-runner",
  },
  migrations: {
    directory: "./database/migrations",
    tableName: "migrations",
  },
};
