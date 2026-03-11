const express = require("express");
const router = express.Router();

const { body } = require("express-validator");
const validate = require("../middleware/validationMiddleware");

const taskController = require("../controllers/taskController");
const authMiddleware = require("../middleware/authMiddleware");

/**
 * @swagger
 * tags:
 *   name: Tasks
 *   description: Gestión de tareas
 */

/**
 * @swagger
 * /api/tasks:
 *   post:
 *     summary: Crear una nueva tarea
 *     tags: [Tasks]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - project_id
 *             properties:
 *               title:
 *                 type: string
 *                 example: Diseñar interfaz
 *               description:
 *                 type: string
 *                 example: Crear wireframes en Figma
 *               project_id:
 *                 type: integer
 *                 example: 1
 *     responses:
 *       201:
 *         description: Tarea creada correctamente
 *       400:
 *         description: Error de validación
 *       401:
 *         description: No autorizado
 */
router.post(
"/",
authMiddleware,

[
    body("title")
        .notEmpty()
        .withMessage("El título de la tarea es obligatorio")
],

validate,

taskController.createTask
);

/**
 * @swagger
 * /api/tasks/{project_id}:
 *   get:
 *     summary: Obtener todas las tareas de un proyecto
 *     tags: [Tasks]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: project_id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del proyecto
 *     responses:
 *       200:
 *         description: Lista de tareas del proyecto
 *       401:
 *         description: No autorizado
 */
router.get("/:project_id", authMiddleware, taskController.getTasks);

/**
 * @swagger
 * /api/tasks/{id}:
 *   put:
 *     summary: Actualizar una tarea
 *     tags: [Tasks]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la tarea
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: Diseñar UI
 *               description:
 *                 type: string
 *                 example: Crear wireframes en Figma
 *               status_id:
 *                 type: integer
 *                 example: 2
 *     responses:
 *       200:
 *         description: Tarea actualizada
 *       401:
 *         description: No autorizado
 *       404:
 *         description: Tarea no encontrada
 */
router.put("/:id", authMiddleware, taskController.updateTask);

/**
 * @swagger
 * /api/tasks/{id}:
 *   delete:
 *     summary: Eliminar una tarea
 *     tags: [Tasks]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la tarea
 *     responses:
 *       200:
 *         description: Tarea eliminada
 *       401:
 *         description: No autorizado
 *       404:
 *         description: Tarea no encontrada
 */
router.delete("/:id", authMiddleware, taskController.deleteTask);

module.exports = router;