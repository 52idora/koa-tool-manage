const MSG = {
    SUCCESS:{state:1,msg:"成功"},
    FAIL:{state:0,msg:"服务器处理异常"},
    PARAM_ERROR:{state:2,msg:"参数不正确"},
    SQL_ERROR:{state:3,msg:"sql处理错误"},
    USER_INFO_ERROR:{state:4,msg:"用户名或密码错误"},
    TING_SHORT_ERROR:{state:5,msg:"资源不足"},
    NO_USE_RECORD:{state:6,msg:"未发现出借记录"},
}

module.exports = MSG