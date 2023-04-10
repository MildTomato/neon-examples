// db.js
import postgres from "postgres";

// const sql = postgres("postgres://username:password@host:port/database", {
//   host: process.env.PGHOST, // Postgres ip address[s] or domain name[s]
//   port: 5432, // Postgres server port[s]
//   database: process.env.PGPASSWORD, // Name of database to connect to
//   username: process.env.PGUSER, // Username of database user
//   password: process.env.PGPASSWORD, // Password of database user
// });

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, ENDPOINT_ID } = process.env;
const URL = `postgres://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}`;

const sql = postgres(URL, {
  ssl: "require",
});

export default sql;
