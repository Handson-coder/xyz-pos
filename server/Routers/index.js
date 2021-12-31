const router = require("express").Router();
const routerUser = require("./routerUser");
const routerCustomer = require("./routerCustomer");
const ErrorHandler = require('../middlewares/ErrorHandler')

router.use("/users", routerUser);
router.use("/customers", routerCustomer);

router.use(ErrorHandler);

module.exports = router;
