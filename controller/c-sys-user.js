const sysUserS = require("../service/s-sys-user")

async function login(ctx,next){
    let {email,pass} = ctx.request.body
    let data = await sysUserS.login(email,pass);
    return ctx.response.body = data
}

module.exports={
    login
}