const mysql = require('mysql')

const db = mysql.createPool({
    host:'192.168.1.8',
    user:'root',
    password:'mysql',
    database:'qiefm'
})
module.exports = db