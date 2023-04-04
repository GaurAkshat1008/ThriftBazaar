import express from "express"
import { addItem, getItems, searchItems } from "../Resolvers/itemResolvers.js"
import { register, getUsers, login } from "../Resolvers/userResolver.js";
const router = express.Router()

router.post("/v1/addItem", addItem);
router.get("/v1/getItems", getItems);
router.get("/v1/searchItems/:keyword", searchItems);
router.post("/v1/register", register);
router.get("/admin/getUsers", getUsers);
router.post("/v1/login", login);

export default router