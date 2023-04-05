import express from "express"
import { addItem, getItems, searchItems, getItem, deleteItem, updateItem, addItemToCart } from "../Resolvers/itemResolvers.js"
import { register, getUsers, login, getCurrentUser, logout, getCart, forgotPassword, changePassword } from "../Resolvers/userResolver.js";
const router = express.Router()


// item routes
router.post("/v1/addItem", addItem);
router.get("/v1/getItems", getItems);
router.get("/v1/searchItems/:keyword", searchItems);
router.get("/v1/getItem/:id", getItem);
router.delete("/v1/deleteItem/:id", deleteItem);
router.put("/v1/updateItem/:id", updateItem);
router.post("/v1/addToCart/:id", addItemToCart);
router.get("/v1/getCart", getCart);

// user routes
router.post("/v1/register", register);
router.get("/v1/me", getCurrentUser);
router.get("/admin/getUsers", getUsers);
router.post("/v1/login", login);
router.post("/v1/logout", logout);
router.post("/v1/forgotPassword", forgotPassword);
router.post("/v1/changePassword/:token", changePassword);

export default router