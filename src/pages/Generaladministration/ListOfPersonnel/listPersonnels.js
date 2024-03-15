import React, { useEffect, useState } from "react";
import "@/helpers/assets/css/bootstrap.min.css";
import "@/helpers/assets/tales/css/animate.min.css";
import "@/helpers/assets/tales/css/light-bootstrap-dashboard.css?v=1.4.0";
import "@/helpers/assets/tales/css/demo.css";
import "@/helpers/assets/tales/css/pe-icon-7-stroke.css";
import { useNavigate } from "react-router-dom";
import { personnelService } from "../../../_services/personnel.Service";

function ListPersonnels() {
  let navigate = useNavigate();
  const [personnels, setPersonnels] = useState([]);

  useEffect(() => {
    personnelService
      .getAllPersonnels()
      .then((res) => {
        if (res.data.content.length > 0) {
          setPersonnels(res.data.content);
          console.log(res.data.content)
        }
      })
      .catch((err) => console.log(err));
  }, []);

  function onsubmit(selectedRole,personnel) {
    personnel.role = selectedRole
    personnelService
    .updatePersonnel(personnel)
    .then((res) => {
        navigate("../listOfPersonnel");
    })
    .catch((err) => console.log(err));
}
  


  return (
    <div class="wrapper">
      <div class="main-panel">
        <nav class="navbar navbar-default navbar-fixed">
          <div class="container-fluid">
            <div class="navbar-header">
              <button
                type="button"
                class="navbar-toggle"
                data-toggle="collapse"
                data-target="#navigation-example-2"
              >
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
              <a class="navbar-brand" href="#">
                Personnels List
              </a>
            </div>
            <div class="collapse navbar-collapse">
              <ul class="nav navbar-nav navbar-left">
                <li>
                  <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                    <i class="fa fa-dashboard"></i>
                    <p class="hidden-lg hidden-md">Dashboard</p>
                  </a>
                </li>
                <li class="dropdown">
                  <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                    <i class="fa fa-globe"></i>
                    <b class="caret hidden-sm hidden-xs"></b>
                    <span class="notification hidden-sm hidden-xs">5</span>
                    <p class="hidden-lg hidden-md">
                      5 Notifications
                      <b class="caret"></b>
                    </p>
                  </a>
                  <ul class="dropdown-menu">
                    <li>
                      <a href="#">Notification 1</a>
                    </li>
                    <li>
                      <a href="#">Notification 2</a>
                    </li>
                    <li>
                      <a href="#">Notification 3</a>
                    </li>
                    <li>
                      <a href="#">Notification 4</a>
                    </li>
                    <li>
                      <a href="#">Another notification</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="">
                    <i class="fa fa-search"></i>
                    <p class="hidden-lg hidden-md">Search</p>
                  </a>
                </li>
              </ul>

              <ul class="nav navbar-nav navbar-right">
                <li>
                  <a href="">
                    <p>Account</p>
                  </a>
                </li>
                <li class="dropdown">
                  <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                    <p>
                      Dropdown
                      <b class="caret"></b>
                    </p>
                  </a>
                  <ul class="dropdown-menu">
                    <li>
                      <a href="#">Action</a>
                    </li>
                    <li>
                      <a href="#">Another action</a>
                    </li>
                    <li>
                      <a href="#">Something</a>
                    </li>
                    <li>
                      <a href="#">Another action</a>
                    </li>
                    <li>
                      <a href="#">Something</a>
                    </li>
                    <li class="divider"></li>
                    <li>
                      <a href="#">Separated link</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">
                    <p>Log out</p>
                  </a>
                </li>
                <li class="separator hidden-lg hidden-md"></li>
              </ul>
            </div>
          </div>
        </nav>

        <div class="content">
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-12">
                <div class="card">
                  <div class="header">
                    <h4 class="title">Personnels</h4>
                  </div>
                  <div class="content table-responsive table-full-width">
                    <table class="table table-hover table-striped">
                      <thead>
                        <th> Cin</th>
                        <th> Gmail</th>
                        <th>Date Of Birth</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Telephone</th>
                        <th>Role</th>
                      </thead>
                      <tbody>
                        {personnels.map((people) => {
                          return (
                            <tr
                            >
                              <td>{people.cin}</td>
                              <td>{people.email}</td>
                              <td>{people.dateofbirth}</td>
                              <td>{people.first_name}</td>
                              <td>{people.last_name}</td>
                              <td>{people.telephone}</td>

                              <td>
                                
                              <select
    className="form-control"
    name="role"
    id="role"
    onChange={(e) => onsubmit(e.target.value,people)}  >
    
    
    <option selected value={people.role}>{people.role}</option>
    <option value="CEO">CEO</option>
    <option value="CHRO">CHRO</option>
    <option value="PROJECT_MANAGER">PROJECT_MANAGER</option>
    <option value="STANDARD_EMPLOYER">STANDARD_EMPLOYER</option>
  </select></td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListPersonnels;
