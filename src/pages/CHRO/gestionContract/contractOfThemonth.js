import React, { useEffect, useState } from 'react';
import { ContractService } from '@/_services/contract.service';

function ContractOfThemonth() {
  const [contracts, setContracts] = useState([]);

  useEffect(() => {
    const url = window.location.pathname;
    const path = url.substring(url.lastIndexOf("/") + 1);
    const fetchContracts = async () => {
      try {
        if (url.includes("contractOfThemonth")) {
          console.log("h")
          const response = await ContractService.getContractByStartContract(path);
          setContracts(response.data);
        }
        
        if (url.includes("contractbytype")){
          const response = await ContractService.getContractByTypeContract(path);
          setContracts(response.data);
        }
        if (url.includes("salaryContract")){
          const response = await ContractService.getContractByPersonnel(path);
          setContracts(response.data);
        }
      } catch (error) {
        console.error('Error fetching contracts:', error);
      }
    };

    fetchContracts();
  }, []);

  return (
    <div  className="col-md-9" style={{marginLeft:"25em"}}>
    <h1>Liste des contrats</h1>
    <div >
    {contracts.map((contract) => {
                          return (

        <div class="col-md-6">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Contrat : {" "} {" "}{contract.personnel.last_name} {" "} {contract.personnel.first_name}</h5>
                   <br/>
                    <p class="card-text">Type de contrat: {contract.contractType}</p>
                    <p class="card-text">Début du contrat: {contract.startcontract}</p>
                    <p class="card-text">Fin du contrat: {contract.endcontract}</p>
                    <p class="card-text">Rémunération: {contract.remuneration}</p>
                    <p class="card-text">Personnel Cin: {contract.personnel.cin}</p>
                    <p class="card-text">Email: {contract.personnel.email}</p>
                    <p class="card-text">Téléphone: {contract.personnel.telephone}</p>
                    <p class="card-text">Poste: {contract.personnel.role}</p>
                </div>
            </div>
        </div>);
                        })}
       
    </div>
</div>
  );
}

export default ContractOfThemonth;
