const router = require("express").Router();
const routerUser = require("./routerUser");
const ErrorHandler = require('../middlewares/ErrorHandler')

router.use("/users", routerUser);

router.use(ErrorHandler);

module.exports = router;
