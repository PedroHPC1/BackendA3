const obsModel = require('../models/obsModel')

const getAll = async (request, response) => {
    const obs = await obsModel.getAll()
    return response.status(200).json(obs)
}

const createObs = async (request, response) => {
    const createdObs = await obsModel.createObs(request.body)
    return response.status(201).json(createdObs)
}

const deleteObs = async (request, response) => {
    const { id } = request.params

    await obsModel.deleteObs(id)
    return response.status(204).json()
}

const updateObs = async (request, response) => {
    const { id } = request.params

    await obsModel.updateObs(id, request.body)
    return response.status(204).json()
}

module.exports = {
    getAll,
    createObs,
    deleteObs,
    updateObs
}