import Axios from './caller.service'

/**
 * Récupératoin de la liste des utilisateurs
 * @returns {Promise}
 */
let getAllHrAdministrator = () => {
    return Axios.get('/api/hr-administrators')
}

/**
 * Récupération d'un utilisateur
 * @param {string} cin 
 * @returns {Promise}
 */
let getHrAdministrator = (cin) => {
    return Axios.get('/api/hr-administrators/'+cin)
}

/**
 * Ajout d'un utilisateur
 * @param {object} HrAdministrator 
 * @returns {Promise}
 */
let addHrAdministrator= (HrAdministrator) => {
    return Axios.put('/api/hr-administrators', HrAdministrator)
}

/**
 * Mise à jour d'un utilisateur
 * @param {object} HrAdministrator 
 * @returns {Promise}
 */
let updateHrAdministrator = (HrAdministrator) => {
   return Axios.put('/api/hr-administrators/'+ HrAdministrator.cin, HrAdministrator)
}

/**
 * Suppression d'un utilsateur
 * @param {string} cin 
 * @returns {Promise}
 */
let deleteHrAdministrator = (cin) => {
    return Axios.delete('/api/hr-administrators/'+cin)
}

// Décaraltion des esrvices pour import
export const HrAdministratorService = {
    getAllHrAdministrator, getHrAdministrator, addHrAdministrator, updateHrAdministrator, deleteHrAdministrator
}