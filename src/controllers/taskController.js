const taskModel = require("../models/taskModel");

exports.createTask = async (req, res) => {

    try {

        const { title, description, project_id } = req.body;

        const task = await taskModel.createTask(
            title,
            description,
            project_id
        );

        res.status(201).json(task);

    } catch (error) {

        res.status(500).json({ error: error.message });

    }

};

exports.getTasks = async (req, res) => {

    try {

        const { project_id } = req.params;

        const tasks = await taskModel.getTasksByProject(project_id);

        res.json(tasks);

    } catch (error) {

        res.status(500).json({ error: error.message });

    }

};

exports.updateTask = async (req, res) => {

    try {

        const { id } = req.params;

        const { title, description, status_id } = req.body;

        const task = await taskModel.updateTask(
            id,
            title,
            description,
            status_id
        );

        res.json(task);

    } catch (error) {

        res.status(500).json({ error: error.message });

    }

};

exports.deleteTask = async (req, res) => {

    try {

        const { id } = req.params;

        await taskModel.deleteTask(id);

        res.json({ message: "Tarea eliminada" });

    } catch (error) {

        res.status(500).json({ error: error.message });

    }

};