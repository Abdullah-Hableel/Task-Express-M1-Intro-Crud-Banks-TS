import express from "express";
import { accounts } from "./accounts";

const app = express();
const port = 8000;

app.use(express.json());

app.get("/accounts", (req, res) => {
  res.json(accounts);
});
app.post("/accounts", (req, res) => {
  console.log("🚀 ~ req.body:", req.body);
  const { username } = req.body;

  if (!username) {
    return res.status(400).json({ error: "Username is required" });
  }

  const newAccount = {
    id: Date.now(),
    username,
    funds: 0,
  };

  accounts.push(newAccount);
  res.status(201).json(newAccount);
});
app.delete("/accounts/:accounstId", (req, res) => {
  const { accounstId } = req.params;
  const account = accounts.findIndex((account) => account.id === +accounstId);

  if (!account) {
    return res.status(404).json();
  }

  accounts.splice(account, 1);

  return res.status(204).json();
});

app.put("/accounts/:accounstId", (req, res) => {
  const { accounstId } = req.params;
  const { username, funds } = req.body;
  const account = accounts.find((account) => account.id === +accounstId);

  if (!account) {
    return res.status(404).json({ error: "Account not found" });
  }
  if (username !== undefined) account.username = username;
  if (funds !== undefined) account.funds = funds;

  return res.status(200).json(account);
});
app.listen(port, () => {
  console.log("The application is running on localhost:8000");
});
