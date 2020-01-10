const allSqlAction = require("../lib/mysql")
const MSG = require("../config/msgs")
const config = require("../config/config")
const jwt = require('jsonwebtoken')

/**
 * @Description: 用户登陆
 * @param: [departName,userId(管理员ID)]
 * @return:
 * @auther: yuanrui
 * @date: 2020/1/9 16:19
 */
async function login(email,pass) {
    let sql = `SELECT * FROM sys_user WHERE email="${email}" AND pass=MD5("${pass}")`
    return allSqlAction.allSqlAction(sql).then(res => {
        if(res.length>0){
            let user = res[0]
            let userToken = {
                email: user.email
            }
            const token = jwt.sign(userToken, config.sys.JWT_SECRET, {expiresIn: '1h'})
            return {
                code:MSG.SUCCESS.code,
                msg:MSG.SUCCESS.msg,
                data:{
                    token:token
                }
            }
        } else{
            return MSG.USER_INFO_ERROR
        }
    }).catch(() => {
        return MSG.SQL_ERROR
    })
}

module.exports={
    login
}