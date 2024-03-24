import React from "react";
import { Route, Routes } from "react-router-dom";
import Error from "@/_utils/Error";
import HomePersonnel from "./HomePersonnel";
import PersonnelLayout from "./PersonneLayout";


function PersonnelRouter() {
  return (
    <Routes>
      <Route element={< PersonnelLayout />}>
        <Route index element={<HomePersonnel />}></Route>
        <Route path="homePersonnel" element={<HomePersonnel/>}></Route>
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
}

export default PersonnelRouter;
