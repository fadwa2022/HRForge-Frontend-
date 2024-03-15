import React from 'react'
import { Outlet } from 'react-router-dom'
import SideMenu from '../../components/generalAdministration/SideMenu'

function GALayout() {
  return (
    <div className="Alayout">
  <div id="admin">
  <SideMenu/>
<div id="admin_body">   
  <Outlet />
</div>
  </div>
  </div>
    )
}

export default GALayout