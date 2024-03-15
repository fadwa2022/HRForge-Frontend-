import React from 'react'
import { Route, Routes } from 'react-router-dom'
import GALayout from './GA.Layout'
import GADashboard from './GA.Dashboard'
import ListOfHr from './HrAdministrator/ListOfHr';
import Error from "@/_utils/Error";
import UserProfile from './ProfileAdmin/UserProfile'
import ListPersonnels from './ListOfPersonnel/listPersonnels';

function GARouter() {
  return (
<Routes>
      <Route element={<GALayout />}>
      <Route index element={<GADashboard/>}></Route>
        <Route path="dashboard" element={<GADashboard />}></Route>
        <Route path="listOfHr"  element={<ListOfHr />}>  </Route>
        <Route path="userProfile/:hrcin" element={<UserProfile />}>  </Route>
        <Route path="listOfPersonnel"  element={<ListPersonnels />}>  </Route>

        <Route path="*" element={<Error />} />
        
      </Route>
    </Routes>  )
}

export default GARouter