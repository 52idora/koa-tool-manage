const MSG = {
    SUCCESS:{state:1,msg:"成功"},
    FAIL:{state:0,msg:"服务器处理异常"},
    PARAM_ERROR:{state:2,msg:"参数不正确"},
    SQL_ERROR:{state:3,msg:"sql处理错误"},
    USER_INFO_ERROR:{state:4,msg:"用户名或密码错误"},
}

module.exports = MSG