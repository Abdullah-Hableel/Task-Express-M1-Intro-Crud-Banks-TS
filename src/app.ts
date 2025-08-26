import express from "express";
import accountRouter from "./api/accounts/accounts.routes";
const app = express();
const port = 8000;

app.use(express.json());

app.use(accountRouter);
app.listen(port, () => {
  console.log("The application is running on localhost:8000");
});
