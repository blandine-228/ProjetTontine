const { createPool } = require("mysql");

const pool = createPool({
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    //user: process.env.MYSQL_USER,
    user: "root",
    password: process.env.MYSQL_PASSWORD,
    database: "tontine",
    connectionLimit: 10
});

module.exports = pool;