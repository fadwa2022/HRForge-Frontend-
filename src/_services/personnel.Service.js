import Axios from './caller.service'

/**
 * Récupératoin de la liste des utilisateurs
 * @returns {Promise}
 */
let getAllPersonnels = () => {
    return Axios.get('/api/personnel')
}

/**
 * Récupération d'un utilisateur
 * @param {number} uid 
 * @returns {Promise}
 */
let getPersonnelByCin = (cin) => {
    return Axios.get('/api/personnel/'+cin)
}
/**
 * Récupération d'un utilisateur by username
 * @param {string} username
 * @returns {Promise}
 */
let getPersonnelByUseName = (username) => {
    return Axios.get('/api/personnel/username/'+username)
}

/**
 * Ajout d'un utilisateur
 * @param {number} user 
 * @returns {Promise}
 */
let addPersonnel = (user) => {
    console.log(user)
    return Axios.post('/api/personnel', user)
}

/**
 * Mise à jour d'un utilisateur
 * @param {number} user 
 * @returns {Promise}
 */
let updatePersonnel = (user) => {
    return Axios.put('/api/personnel/'+user.cin, user)
}

/**
 * Suppression d'un utilsateur
 * @param {number} uid 
 * @returns {Promise}
 */
let deletePersonnel = (uid) => {
    return Axios.delete('/api/personnel/'+uid)
}


// Décaraltion des esrvices pour import
export const personnelService = {
    getPersonnelByUseName,getAllPersonnels, getPersonnelByCin, addPersonnel, updatePersonnel, deletePersonnel
}