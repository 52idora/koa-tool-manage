const departS = require("../service/s-depart")
const config = require("../config/config")
const jwt = require('jsonwebtoken')
const util = require('util')
const verify = util.promisify(jwt.verify)

async function add(ctx,next){
    let {departName} = ctx.request.body
    let data = await departS.add(departName,config.default.USERID);
    return ctx.response.body = data
}

async function edit(ctx,next){
    let {departName,userId,departId} = ctx.request.body
    let data = await departS.edit(departName,userId,departId);
    return ctx.response.body = data
}

async function del(ctx,next){
    let {departId} = ctx.request.body
    let data = await departS.del(departId);
    return ctx.response.body = data
}

async function page(ctx,next){
    // const token = ctx.header.authorization  // 获取jwt
    // console.log(token)
    // let payload = await verify(token.split(' ')[1], config.sys.JWT_SECRET)
    // console.log(payload)
    let {current,size} = ctx.request.body
    let data = await departS.page(current,size)
    return ctx.response.body = data
}

async function all(ctx,next){
    let data = await departS.all()
    return ctx.response.body = data
}

module.exports={
    add,
    edit,
    del,
    page,
    all
}