const router = require('koa-router')()
const controller = require("../controller/c-type")

router.prefix('/type')

router.post("/add",controller.add)
router.post("/edit",controller.edit)
router.post("/del",controller.del)
router.post("/page",controller.page)

module.exports = router