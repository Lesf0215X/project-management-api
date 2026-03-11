const express = require("express");
const router = express.Router();

const { body } = require("express-validator");
const validate = require("../middleware/validationMiddleware");

const authController = require("../controllers/authController");

router.post(
"/register",

[
    body("email")
        .isEmail()
        .withMessage("Email inválido"),

    body("password")
        .isLength({ min: 6 })
        .withMessage("La contraseña debe tener mínimo 6 caracteres")
],

validate,

authController.register
);

router.post("/login", authController.login);

module.exports = router;