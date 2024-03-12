import React from "react";
import { Outlet } from "react-router-dom";
import Header from "@/components/admin/Header";
import SideMenu from "@/components/admin/SideMenu";
import './admin.css'
function ALayout() {
  return (
    <div className="Alayout">
      <Header />
    <div id="admin">
 <SideMenu/>
 <div id="admin_body">      <Outlet />
</div>
    </div>
    </div>
  );
}

export default ALayout;
