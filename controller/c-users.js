const usersS = require("../service/s-users")
const config = require("../config/config")

async function add(ctx,next){
    let {nickName,departId} = ctx.request.body
    let data = await usersS.add(nickName,departId,config.default.USERID);
    return ctx.response.body = data
}

async function edit(ctx,next){
    let {nickName,departId,userId} = ctx.request.body
    let data = await usersS.edit(nickName,departId,userId,config.default.USERID);
    return ctx.response.body = data
}

async function del(ctx,next){
    let {userId} = ctx.request.body
    let data = await usersS.del(userId);
    return ctx.response.body = data
}

async function page(ctx,next){
    let {current,size,keyword} = ctx.request.body
    let data = await usersS.page(current,size,keyword)
    return ctx.response.body = data
}

module.exports={
    add,
    edit,
    del,
    page
}