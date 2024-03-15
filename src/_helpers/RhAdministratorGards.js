import React from 'react';
import { Navigate, Route } from 'react-router-dom';
import { accountService } from "@/_services/accountService";


/**
 * Fonction de vérification de token
 * Et fermetur partie admin
 * 
 * @param {Object} props{children} 
 * @returns {ReactNode}
 */

function RhAdministratorGards({children }) {
  const tokenInfo = accountService.getTokenInfo(); 
  const isCEO = accountService.isLogged() && tokenInfo.scope === "chro::create chro::read chro::delete chro::update ROLE_CHRO";
  if(!isCEO){
    return <Navigate to="/home"/>
}

return children
}

export default RhAdministratorGards;
