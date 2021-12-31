const { Customer } = require('../models')

class ControllerCustomer {
  static async findAllCustomers(req, res, next) {
    try {
      const result = await Customer.findAll();
      res.status(200).json(result);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = ControllerCustomer