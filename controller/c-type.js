const typeService = require("../service/s-type")

async function typeAdd(ctx,next){
    let {parentId,typeName} = ctx.request.body
    let data = await typeService.typeAdd(parentId,typeName);
    return ctx.response.body = data
}

module.exports={
    typeAdd
}