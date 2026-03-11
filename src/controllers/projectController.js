const projectModel = require("../models/projectModel");

exports.createProject = async (req, res) => {

    try {

        const { name, description } = req.body;

        const owner_id = req.user.id;

        const project = await projectModel.createProject(
            name,
            description,
            owner_id
        );

        res.status(201).json(project);

    } catch (error) {

        res.status(500).json({ error: error.message });

    }

};

exports.getProjects = async (req, res) => {

    try {

        const projects = await projectModel.getProjectsByUser(
            req.user.id
        );

        res.json(projects);

    } catch (error) {

        res.status(500).json({ error: error.message });

    }

};

exports.getProjectsPaginated = async (req, res) => {

    try {

        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 5;

        const offset = (page - 1) * limit;

        const projects = await projectModel.getProjectsPaginated(
            req.user.id,
            limit,
            offset
        );

        res.json({
            page,
            limit,
            data: projects
        });

    } catch (error) {

        res.status(500).json({ error: error.message });

    }

};

exports.updateProject = async (req, res) => {

    try {

        const { id } = req.params;

        const { name, description } = req.body;

        const project = await projectModel.updateProject(
            id,
            name,
            description
        );

        res.json(project);

    } catch (error) {

        res.status(500).json({ error: error.message });

    }

};

exports.deleteProject = async (req, res) => {

    try {

        const { id } = req.params;

        await projectModel.deleteProject(id);

        res.json({ message: "Proyecto eliminado" });

    } catch (error) {

        res.status(500).json({ error: error.message });

    }

};