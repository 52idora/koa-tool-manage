const router = require('koa-router')()
const controller = require("../controller/c-users")

router.prefix('/users')

router.post("/add",controller.add)
router.post("/edit",controller.edit)
router.post("/del",controller.del)
router.post("/page",controller.page)
router.post("/listByDepart",controller.listByDepart)

module.exports = router