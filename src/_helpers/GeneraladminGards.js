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

function GeneralAdminGuard({children }) {
  const tokenInfo = accountService.getTokenInfo(); 
  const isCEO = accountService.isLogged() && tokenInfo.scope.includes("ROLE_CEO");
  if(!isCEO){
    return <Navigate to="/home"/>
}

return children
}

export default GeneralAdminGuard;
