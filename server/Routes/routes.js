import express from "express";
import {
  addItem,
  getItems,
  searchItems,
  getItem,
  deleteItem,
  updateItem,
  addItemToCart,
} from "../Resolvers/itemResolvers.js";
import {
  register,
  getUsers,
  login,
  getCurrentUser,
  logout,
  getCart,
  forgotPassword,
  changePassword,
  updateUser,
} from "../Resolvers/userResolver.js";
import { protect, admin } from "../Middlewares/private.js";

const router = express.Router();

// item routes
router.post("/v1/addItem", protect, addItem);
router.get("/v1/getItems", getItems);
router.get("/v1/searchItems/:keyword", searchItems);
router.get("/v1/getItem/:id", getItem);
router.delete("/v1/deleteItem/:id", protect, deleteItem);
router.put("/v1/updateItem/:id", protect, updateItem);
router.post("/v1/addToCart/:id", protect, addItemToCart);
router.get("/v1/getCart", protect, getCart);

// user routes
router.post("/v1/register", register);
router.get("/v1/me", protect, getCurrentUser);
router.get("/admin/getUsers", admin, getUsers);
router.post("/v1/login", login);
router.post("/v1/logout", protect, logout);
router.post("/v1/updateUser/:id", protect, updateUser);
router.post("/v1/forgotPassword", forgotPassword);
router.post("/v1/changePassword/:token", changePassword);

export default router;
