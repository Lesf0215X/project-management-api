const pool = require("../config/database");

exports.createTask = async (title, description, project_id) => {

    const result = await pool.query(
        `INSERT INTO tasks (title, description, project_id)
         VALUES ($1,$2,$3)
         RETURNING *`,
        [title, description, project_id]
    );

    return result.rows[0];
};

exports.getTasksByProject = async (project_id) => {

    const result = await pool.query(
        `SELECT * FROM tasks
         WHERE project_id=$1
         ORDER BY created_at DESC`,
        [project_id]
    );

    return result.rows;
};

exports.updateTask = async (id, title, description, status_id) => {

    const result = await pool.query(
        `UPDATE tasks
         SET title=$1, description=$2, status_id=$3
         WHERE id=$4
         RETURNING *`,
        [title, description, status_id, id]
    );

    return result.rows[0];
};

exports.deleteTask = async (id) => {

    await pool.query(
        `DELETE FROM tasks WHERE id=$1`,
        [id]
    );

};