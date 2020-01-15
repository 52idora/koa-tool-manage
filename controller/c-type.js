const typeS = require("../service/s-type")
const config = require("../config/config")

async function add(ctx,next){
    let {parentId,typeName} = ctx.request.body
    let data = await typeS.add(parentId,typeName,config.default.USERID);
    return ctx.response.body = data
}

async function edit(ctx,next){
    let {parentId,typeName,typeId} = ctx.request.body
    let data = await typeS.edit(parentId,typeName,typeId,config.default.USERID);
    return ctx.response.body = data
}

async function del(ctx,next){
    let {typeId} = ctx.request.body
    let data = await typeS.del(typeId);
    return ctx.response.body = data
}

async function page(ctx,next){
    let {current,size} = ctx.request.body
    let data = await typeS.page(current,size)
    return ctx.response.body = data
}

module.exports={
    add,
    edit,
    del,
    page
}