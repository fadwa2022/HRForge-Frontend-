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
let getPersonnel = (uid) => {
    return Axios.get('/users/'+uid)
}

/**
 * Ajout d'un utilisateur
 * @param {number} user 
 * @returns {Promise}
 */
let addPersonnel = (user) => {
    return Axios.put('/users', user)
}

/**
 * Mise à jour d'un utilisateur
 * @param {number} user 
 * @returns {Promise}
 */
let updatePersonnel = (user) => {
    console.log(user)
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
    getAllPersonnels, getPersonnel, addPersonnel, updatePersonnel, deletePersonnel
}