const router = require('koa-router')()
const controller = require("../controller/c-type")

router.prefix('/type')

router.post("/add",controller.typeAdd)

router.get('/json', async (ctx, next) => {
    ctx.body = {
        title: 'koa2 json1'
    }
})

module.exports = router