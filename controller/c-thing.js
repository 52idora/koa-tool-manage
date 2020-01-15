const thingS = require("../service/s-thing")
const config = require("../config/config")

async function add(ctx,next){
    let {thingNo,thingName,thingImg,totalNum,remark} = ctx.request.body
    let data = await thingS.add(thingNo,thingName,thingImg,totalNum,remark,config.default.USERID);
    return ctx.response.body = data
}

async function edit(ctx,next){
    let {thingName,thingId} = ctx.request.body
    let data = await thingS.edit(thingName,thingId,config.default.USERID);
    return ctx.response.body = data
}

async function del(ctx,next){
    let {thingId} = ctx.request.body
    let data = await thingS.del(thingId);
    return ctx.response.body = data
}

async function page(ctx,next){
    let {current,size} = ctx.request.body
    let data = await thingS.page(current,size)
    return ctx.response.body = data
}

module.exports={
    add,
    edit,
    del,
    page
}