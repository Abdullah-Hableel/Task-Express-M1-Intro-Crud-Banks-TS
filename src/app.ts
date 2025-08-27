import express from "express";
import accountRouter from "./api/accounts/accounts.routes";
import connectDB from "./database";
const app = express();
const port = 8000;

app.use(express.json());

app.use("/accounts", accountRouter);

connectDB();
app.listen(port, () => {
  console.log("The application is running on localhost:8000");
});
