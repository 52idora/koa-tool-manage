const thingS = require("../service/s-thing")
const config = require("../config/config")

async function add(ctx,next){
    let {thingNo,thingName,thingImg,totalNum,typeId,remark} = ctx.request.body
    let data = await thingS.add(thingNo,thingName,thingImg,totalNum,typeId,remark,config.default.USERID);
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
    let {current,size,keyword} = ctx.request.body
    let data = await thingS.page(current,size,keyword)
    return ctx.response.body = data
}

async function find(ctx,next){
    let {thingId} = ctx.request.body
    let data = await thingS.find(thingId)
    return ctx.response.body = data
}

async function borrow(ctx,next){
    let {thingNo,userId} = ctx.request.body
    let data = await thingS.borrow(thingNo,userId)
    return ctx.response.body = data
}

async function sendback(ctx,next){
    let {thingNo,userId} = ctx.request.body
    let data = await thingS.sendback(thingNo,userId)
    return ctx.response.body = data
}

async function stastic(ctx,next){
    let data = await thingS.stastic()
    return ctx.response.body = data
}

module.exports={
    add,
    edit,
    del,
    page,
    find,
    borrow,
    sendback,
    stastic
}