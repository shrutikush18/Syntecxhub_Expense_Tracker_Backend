const express = require("express");
const Expense = require("../models/expense");

const router = express.Router();

// UPDATE expense
router.put("/update/:id", async (req, res) => {
  try {
    const updatedExpense = await Expense.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedExpense);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// ➕ ADD EXPENSE
router.post("/add", async (req, res) => {
  try {
    const expense = new Expense(req.body);
    await expense.save();
    res.status(201).json({ message: "Expense added successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


// 📥 GET ALL EXPENSES
router.get("/", async (req, res) => {
  try {
    const expenses = await Expense.find().sort({ date: -1 });
    res.json(expenses);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


// ❌ DELETE EXPENSE
router.delete("/:id", async (req, res) => {
  try {
    await Expense.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Expense deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
