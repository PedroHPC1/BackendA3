const connection = require ('./connection')

const getAll = async () => {
    const [tasks] = await connection.execute('SELECT * FROM tasks')

    return tasks;
}

const createTask = async (task) => {
    const { nome, data, categoria } = task

    const query = 'INSERT INTO tasks(nome, data, categoria, concluído) VALUES (?, ?, ?, ?)'

    const [createdTask] = await connection.execute(query, [nome, data, categoria, 'false'])

    return {insertId: createdTask.insertId}
}

const deleteTask = async (id) => {
    const [removedTask] = await connection.execute('DELETE FROM tasks WHERE id = ?', [id])

    return removedTask
}

const updateTask = async (id, task) => {
    const { nome, categoria, concluído } = task

    const query = 'UPDATE tasks SET nome = ?, categoria = ?, concluído = ? WHERE id = ?'
    
    const [updatedTask] = await connection.execute(query, [nome, categoria, concluído, id])

    return updatedTask
}

module.exports = {
    getAll,
    createTask,
    deleteTask,
    updateTask
}