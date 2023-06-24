const express = require("express")
const routerUser = require("./user.router")
const router = express.Router()

//aca pondo mis rutas

router.use("/users", routerUser)
module.exports = router