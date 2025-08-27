import { accounts } from "../../data/accounts";
import { Request, Response } from "express";
import Account from "../../models/Account";

const getAllAccounts = async (req: Request, res: Response) => {
  try {
    const accounts = await Account.find();
    res.json(accounts);
  } catch (error) {
    res.status(500);
  }
};

const createNewAccount = async (req: Request, res: Response) => {
  //   console.log("🚀 ~ req.body:", req.body);
  try {
    const newAccount = await Account.create({
      username: req.body.username,
      funds: 0,
    });

    res.status(201).json(newAccount);
  } catch (error) {
    return res.status(500).json({ error: "Username is required" });

    //      if (!username) { return res.status(500).json({ error: "Username is required" });

    //   }
  }
};

const deleteAccount = async (req: Request, res: Response) => {
  const { accountsId } = await req.params;
  try {
    const findaccount = await Account.findById(accountsId);
    if (findaccount) {
      await findaccount.deleteOne();
      res.status(204).end();
    } else {
      res.status(404).json({ massage: "Account not found" });
    }
  } catch (error) {
    res.status(500);
  }
};

const updateAccount = async (req: Request, res: Response) => {
  const { accountsId } = req.params;
  try {
    const updateaccount = await Account.findById(accountsId);

    if (updateaccount) {
      await updateaccount.updateOne(req.body);
      return res.status(204).end();
    } else {
      return res.status(404).json({ massage: "Account not found " });
    }
  } catch (error) {
    res.status(500);
  }
};

export { getAllAccounts, createNewAccount, deleteAccount, updateAccount };
