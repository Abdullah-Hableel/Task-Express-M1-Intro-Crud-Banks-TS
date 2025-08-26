import { Router } from "express";
import {
  createNewAccount,
  deleteAccount,
  getAllAccounts,
  updateAccount,
} from "./accounts.controllers";
const router = Router();

router.get("/accounts", getAllAccounts);

router.post("/accounts", createNewAccount);

router.delete("/accounts/:accountsId", deleteAccount);

router.put("/accounts/:accountsId", updateAccount);

export default router;
