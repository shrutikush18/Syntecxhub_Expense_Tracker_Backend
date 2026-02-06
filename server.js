require("dotenv").config();
console.log("MONGO URI:", process.env.MONGO_URI);
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());


mongoose.connect(
  "mongodb+srv://shrutikushwaha740_db_user:shruti18@cluster0.ho0cgxm.mongodb.net/expenseDB?appName=Cluster0"
)
.then(() => console.log("MongoDB Atlas Connected"))
.catch(err => console.error("MongoDB Connection Error:", err));


app.use("/expenses", require("./routes/expenseRoutes"));

app.get("/", (req, res) => {
  res.send("Expense Tracker Backend Running");
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
