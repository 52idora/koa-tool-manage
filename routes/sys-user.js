const router = require('koa-router')()
const controller = require("../controller/c-sys-user")

router.prefix('/sysUser')

router.post("/login",controller.login)

module.exports = router