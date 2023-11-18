const connection = require ('./connection')

const getAll = async () => {
    const [obs] = await connection.execute('SELECT * FROM obs')
    return obs;
}

const createObs = async (obs) => {
    const { id_evento, texto } = obs

    const query = 'INSERT INTO obs(id_evento, texto) VALUES (?, ?)'

    const [createdObs] = await connection.execute(query, [id_evento, texto])

    return {insertId: createdObs.insertId}
}

const deleteObs = async (id) => {
    const removedObs = await connection.execute('DELETE FROM obs WHERE id = ?', [id])
    return removedObs;
}

const updateObs = async (id, obs) => {
    const { texto } = obs

    const query = 'UPDATE obs SET texto = ? WHERE id = ?'
    
    const [updatedObs] = await connection.execute(query, [texto, id])

    return updatedObs
}

module.exports = {
    getAll,
    createObs,
    deleteObs,
    updateObs
}