const mysql = require("mysql")
const config = require("../config/config")
/*建立连接池*/
let pool = mysql.createPool({
    host     : config.database.HOST,
    user     : config.database.USERNAME,
    password : config.database.PASSWORD,
    database : config.database.DATABASE,
    port     : config.database.PORT
})
/*连接数据库*/
let allSqlAction = (sql, value) => {
    return new Promise((resolve, reject) => {
        pool.getConnection(function (err, connection) {
            if (err) {
                console.log(err)
                reject(err)
            }
            else {
                console.log("数据库连接成功")
                connection.query(sql, value, (err, row) => {
                    if (err) reject(err)
                    else{
                        resolve(row)
                    }
                    connection.release()
                })
            }
        })
    })
}
module.exports = {
    allSqlAction
}