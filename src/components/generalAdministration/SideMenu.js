import React from "react";
import { Link } from "react-router-dom";
import "../../helpers/assets/css/demo.css";
import "@/helpers/assets/css/light-bootstrap-dashboard.css";
import "../../helpers/assets/css/bootstrap.min.css";

const SideMenu = () => {
  return (
    <div
      class="sidebar"
      data-color="orange"
      data-image="assets/img/sidebar-5.jpg"
    >
      <div className="sidebar-wrapper">
        <div className="logo">
          <a href="http://www.creative-tim.com" className="simple-text">
             Administration Management
          </a>
        </div>
        <ul class="nav">
          <li class="nav-item active">
            <Link class="nav-link" to={""}>
              <i class="nc-icon nc-chart-pie-35"></i>
              <p style={{ color: "white" }}>Dashboard</p>
            </Link>
          </li>

          <li>
            <Link class="nav-link" to={"listOfHr"}>
              <i class="nc-icon nc-notes"></i>
              <p style={{ color: "white" }}>Hr List</p>
            </Link>
          </li>

          <li class="nav-item active active-pro">
            <a class="nav-link active" href="upgrade.html">
              <i class="nc-icon nc-alien-33"></i>
              <p>Upgrade to PRO</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideMenu;
