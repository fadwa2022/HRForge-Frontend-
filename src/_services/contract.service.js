import Axios from './caller.service'

/**
 * Récupératoin de la liste des utilisateurs
 * @returns {Promise}
 */
let getAllContracts= () => {
    return Axios.get('/contracts');
  }

  let getContractById= (id) => {
    return Axios.get(`/contracts/${id}`);
  }
  let getContractByStartContract= (startContrat) => {
    return Axios.get(`api/contracts/startContrat/${startContrat}`);
  }
  let getContractByTypeContract= (typeContrat) => {
    return Axios.get(`/api/contracts/contractType/${typeContrat}`);
  }
  let getContractByPersonnel= (cin) => {
    return Axios.get(`/api/contracts/personnel/${cin}`);
  }

  let  createContract= (contractData) => {
    return Axios.post('/contracts', contractData);
  }

  let updateContract= (id, contractData) => {
    return Axios.put(`/contracts/${id}`, contractData);
  }

  let deleteContract= (id) => {
    return Axios.delete(`/contracts/${id}`);
  }
// Décaraltion des esrvices pour import
export const ContractService = {
  getContractByPersonnel, getContractByTypeContract,getContractByStartContract, getAllContracts,getContractById, createContract, updateContract, deleteContract
}