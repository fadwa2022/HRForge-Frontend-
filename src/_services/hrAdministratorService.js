import { accountService } from './accountService'
import Axios from './caller.service'

/**
 * Récupératoin de la liste des utilisateurs
 * @returns {Promise}
 */
let getAllHrAdministrator = () => {
    return  Axios.get('/api/hr-administrators')
}

/**
 * Récupération d'un utilisateur
 * @param {string} cin 
 * @returns {Promise}
 */
let getHrAdministrator = (id) => {
    return Axios.get('/api/hr-administrators/'+id)
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

/**
 * Récupération d'un utilisateur by username
 * @param {string} username
 * @returns {Promise}
 */
let getHrByUserName = (username) => {
    return Axios.get('/api/hr-administrators/personnelusername/'+username)
}

// Décaraltion des esrvices pour import
export const HrAdministratorService = {
    getHrByUserName,getAllHrAdministrator, getHrAdministrator, addHrAdministrator, updateHrAdministrator, deleteHrAdministrator
}