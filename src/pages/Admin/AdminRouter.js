import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "@/pages/Admin/Dashboard";
import ALayout from "@/pages/Admin/ALayout";
import { User, UserEdit, UserAdd } from "./User";
import { HrAdministrator, HrAdministratorEdit } from "./HrAdministrator";
import Error from "@/_utils/Error";

function AdminRouter() {
  return (
    <Routes>
      <Route element={<ALayout />}>
        <Route path="dashboard" element={<Dashboard />}></Route>
        <Route path="" >
          <Route
            path="hrAdministratorEdit"
            element={<HrAdministratorEdit />}
          ></Route>
            <Route
            path="hrAdministrator"
            element={<HrAdministrator />}
          ></Route>
        </Route>
        <Route path="user">
          <Route path="index" element={<User />}></Route>
          <Route path="edit/:uid" element={<UserEdit />}></Route>
          <Route path="add" element={<UserAdd />}></Route>
        </Route>
        <Route path="*" element={<Error />} />

      </Route>
    </Routes>
  );
}

export default AdminRouter;
