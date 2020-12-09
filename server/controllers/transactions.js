// @desc   Get All Transactions
// @route  GET /api/v1/transactions
// @access Public
exports.getTransactions = (req, res, next) => {
  res.send('GET Transactions');
}

// @desc   Add Transaction
// @route  POST /api/v1/transactions
// @access Public
exports.addTransaction = (req, res, next) => {
  res.send('POST Transactions');
}

// @desc   Delete Transaction
// @route  DELETE /api/v1/transactions/:id
// @access Public
exports.deleteTransaction = (req, res, next) => {
  res.send('DELETE Transactions');
}