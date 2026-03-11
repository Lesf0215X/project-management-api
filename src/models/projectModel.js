const pool = require("../config/database");

exports.createProject = async (name, description, owner_id) => {

    const result = await pool.query(
        "INSERT INTO projects (name, description, owner_id) VALUES ($1,$2,$3) RETURNING *",
        [name, description, owner_id]
    );

    return result.rows[0];

};

exports.getProjectsByUser = async (user_id) => {

    const result = await pool.query(
        "SELECT * FROM projects WHERE owner_id = $1 ORDER BY created_at DESC",
        [user_id]
    );

    return result.rows;

};

exports.getProjectsPaginated = async (user_id, limit, offset) => {

    const result = await pool.query(
        `SELECT * FROM projects
         WHERE owner_id = $1
         ORDER BY created_at DESC
         LIMIT $2 OFFSET $3`,
        [user_id, limit, offset]
    );

    return result.rows;

};

exports.updateProject = async (id, name, description) => {

    const result = await pool.query(
        "UPDATE projects SET name=$1, description=$2 WHERE id=$3 RETURNING *",
        [name, description, id]
    );

    return result.rows[0];

};

exports.deleteProject = async (id) => {

    await pool.query(
        "DELETE FROM projects WHERE id=$1",
        [id]
    );

};