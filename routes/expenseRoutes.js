const express = require("express");
const router = express.Router();

const {
  getExpenses,
  addExpense

} = require("../controllers/expenseController");

router.get("/", getExpenses);
router.post("/add", addExpense);
router.post("/add", (req, res) => {
  res.json({ message: "POST route working" });
});



module.exports = router;
