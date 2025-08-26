import { accounts } from "../../data/accounts";
import { Request, Response } from "express";

const getAllAccounts = (req: Request, res: Response) => {
  return res.json(accounts);
};

const createNewAccount = (req: Request, res: Response) => {
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
};

const deleteAccount = (req: Request, res: Response) => {
  const { accountsId } = req.params;
  const account = accounts.findIndex(
    (account) => account.id === Number(accountsId)
  );

  if (!account) {
    return res.status(404).json();
  }

  accounts.splice(account, 1);

  return res.status(204).json();
};

const updateAccount = (req: Request, res: Response) => {
  const { accountsId } = req.params;
  const { username, funds } = req.body;
  const account = accounts.find((account) => account.id === Number(accountsId));

  if (!account) {
    return res.status(404).json({ error: "Account not found" });
  }
  if (username !== undefined) account.username = username;
  if (funds !== undefined) account.funds = funds;

  return res.status(200).json(account);
};

export { getAllAccounts, createNewAccount, deleteAccount, updateAccount };
