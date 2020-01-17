const router = require('koa-router')()
const controller = require("../controller/c-depart")

router.prefix('/depart')

router.post("/add",controller.add)
router.post("/edit",controller.edit)
router.post("/del",controller.del)
router.post("/page",controller.page)
router.post("/all",controller.all)

module.exports = router