const router = require('koa-router')()
const controller = require("../controller/c-thing")

router.prefix('/thing')

router.post("/add",controller.add)
router.post("/edit",controller.edit)
router.post("/del",controller.del)
router.post("/page",controller.page)
router.post("/find",controller.find)
router.post("/borrow",controller.borrow)
router.post("/sendback",controller.sendback)
router.post("/stastic",controller.stastic)

module.exports = router