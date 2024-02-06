const mysql = require("mysql2");
require("dotenv").config();

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    // host: "localhost",
    // user: "root",
    // password: "root@123#",
    // database: "LanguageApp",
});

// let sql = "SELECT * FROM posts";

// pool.execute(sql, function (err, result) {
//     if (err) throw err;
//     console.log(result);
//     // result.forEach(ele => {
//     //     console.log(ele.title, ele.body);
//     // });
// });
module.exports = pool.promise();