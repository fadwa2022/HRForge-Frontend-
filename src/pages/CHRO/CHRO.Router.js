import React from "react";
import { Route, Routes } from "react-router-dom";
import CHROLayout from "./CHRO.Layout";
import CHRODashboard from "./CHRO.Dashboard";
import Error from "@/_utils/Error";
import ListPersonnels from "./ListOfPersonnel/listPersonnels";
import UserProfile from "./ProfileAdmin/UserProfile";
import CreatePersonnel from "./CreatePersonnel/createPersonnel";
import HomePage from "./gestionContract/HomePage";
import ContractOfThemonth from "./gestionContract/contractOfThemonth";
import PageHomeAbs from "./AbsenceManagement/PageHomeAbs";
import Updateabsances from "./AbsenceManagement/Updateabsances";

function CHRORouter() {
  return (
    <Routes>
      <Route element={<CHROLayout />}>
        <Route index element={<CHRODashboard />}></Route>
        <Route path="dashboard" element={<CHRODashboard />}></Route>
        <Route path="listofpersonnel" element={<ListPersonnels />}></Route>
        <Route path="addPersonnel" element={<CreatePersonnel />}></Route>
        <Route path="contractManagement" element={<HomePage />}></Route>
        <Route path="personnelProfile/:cin" element={<UserProfile />}></Route>
        <Route path="contractOfThemonth/:startdate" element={<ContractOfThemonth />}></Route>
        <Route path="contractbytype/:typeofcontrect" element={<ContractOfThemonth />}></Route>
        <Route path="salaryContract/:cdi" element={<ContractOfThemonth />}></Route>
        <Route path="absancesManagement" element={<PageHomeAbs />}>        </Route>
        <Route path="updateAbsence/:cin" element={<Updateabsances />}></Route>

        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
}

export default CHRORouter;
