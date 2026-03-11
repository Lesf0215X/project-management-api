const express = require("express");
const router = express.Router();

const { body } = require("express-validator");
const validate = require("../middleware/validationMiddleware");

const projectController = require("../controllers/projectController");
const authMiddleware = require("../middleware/authMiddleware");

router.post(
"/",
authMiddleware,

[
    body("name")
        .notEmpty()
        .withMessage("El nombre del proyecto es obligatorio")
],

validate,

projectController.createProject
);

router.get(
"/",
authMiddleware,
projectController.getProjectsPaginated
);

router.put("/:id", authMiddleware, projectController.updateProject);

router.delete("/:id", authMiddleware, projectController.deleteProject);

module.exports = router;