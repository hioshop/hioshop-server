const mysql = require('think-model-mysql');

module.exports = {
    handle: mysql,
    database: 'hiolabsDB',
    prefix: 'hiolabs_',
    encoding: 'utf8mb4',
    host: 'db',
    port: '3306',
    user: 'root',
    password: process.env.MARIADB_ROOT_PASSWORD,
    dateStrings: true
};
