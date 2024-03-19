import React from "react";
import { Outlet } from "react-router-dom";

function PersonnelLayout() {
  return (
    <div className="Alayout">  
      <div id="admin">
        <div id="admin_body">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default PersonnelLayout;
