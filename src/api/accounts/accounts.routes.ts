import { Router } from "express";
import {
  createNewAccount,
  deleteAccount,
  getAllAccounts,
  updateAccount,
} from "./accounts.controllers";
const router = Router();

router.get("/", getAllAccounts);

router.post("/", createNewAccount);

router.delete("/:accountsId", deleteAccount);

router.put("/:accountsId", updateAccount);

export default router;
