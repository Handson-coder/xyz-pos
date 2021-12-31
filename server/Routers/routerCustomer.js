const router = require("express").Router();
const ControllerCustomer = require("../Controllers/ControllerCustomer");

router.get("/", ControllerCustomer.findAllCustomers);

module.exports = router;
