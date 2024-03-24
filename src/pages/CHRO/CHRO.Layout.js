import React from "react";
import { Outlet } from "react-router-dom";
import SideMenu from '../../components/chro/SideMenu'

function CHROLayout() {
  return (
    <div className="Alayout">  
      <div id="admin">
        <SideMenu/>
        <div id="admin_body">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default CHROLayout;
