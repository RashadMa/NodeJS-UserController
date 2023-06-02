const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const { validate } = require("../middleware/validation");
const { body } = require("express-validator");

router.get("/", userController.getAllUsers);
router.get("/:id", userController.getById);
router.post(
  "/",
  [body("email").notEmpty().withMessage("Email is required!")],
  [body("password").notEmpty().withMessage("Password is required!")],
  validate,
  userController.createUser
);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);
router.post(
  "/login",
  [body("email").notEmpty().withMessage("Email is required!")],
  [body("password").notEmpty().withMessage("Password is required!")],
  validate,
  userController.login
);

module.exports = router;
