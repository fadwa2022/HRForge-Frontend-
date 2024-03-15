import React from 'react';
import { Link } from 'react-router-dom';
import "@/helpers/assets/css/demo.css"
import "@/helpers/assets/css/light-bootstrap-dashboard.css"
import "@/helpers/assets/css/bootstrap.min.css"
const SideMenu = () => {
    return (
        <div class="sidebar" data-color="blue" data-image="assets/img/sidebar-5.jpg">

        
        <div className="sidebar-wrapper">
          <div className="logo">
            <a href="http://www.creative-tim.com" className="simple-text">
              Creative Tim
            </a>
          </div>
          <ul class="nav">
                      <li class="nav-item active">
                          <Link class="nav-link" to={''}>
                              <i class="nc-icon nc-chart-pie-35"></i>
                              <p>Dashboard</p>
                          </Link>
                      </li>
                      <li>
                          <a class="nav-link" href="./user.html">
                              <i class="nc-icon nc-circle-09"></i>
                              <p>User Profile</p>
                          </a>
                      </li>
                      <li>
                          <Link class="nav-link"to={'listOfHr'}>
                              <i class="nc-icon nc-notes"></i>
                              <p>Hr List</p>
                          </Link>
                      </li>
                      <li>
                          <a class="nav-link" href="./typography.html">
                              <i class="nc-icon nc-paper-2"></i>
                              <p>Typography</p>
                          </a>
                      </li>
                      <li>
                          <a class="nav-link" href="./icons.html">
                              <i class="nc-icon nc-atom"></i>
                              <p>Icons</p>
                          </a>
                      </li>
                      <li>
                          <a class="nav-link" href="./maps.html">
                              <i class="nc-icon nc-pin-3"></i>
                              <p>Maps</p>
                          </a>
                      </li>
                      <li>
                          <a class="nav-link" href="./notifications.html">
                              <i class="nc-icon nc-bell-55"></i>
                              <p>Notifications</p>
                          </a>
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