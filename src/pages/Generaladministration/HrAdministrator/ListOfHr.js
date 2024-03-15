import React, { useEffect,useState } from 'react'
import "@/helpers/assets/css/bootstrap.min.css"
import "@/helpers/assets/tales/css/animate.min.css"
import "@/helpers/assets/tales/css/light-bootstrap-dashboard.css?v=1.4.0"
import "@/helpers/assets/tales/css/demo.css"
import "@/helpers/assets/tales/css/pe-icon-7-stroke.css"
import { useNavigate } from 'react-router-dom'
import { HrAdministratorService } from '../../../_services/hrAdministratorService'



function ListOfHr() {

    let navigate = useNavigate();
    const [HrAdministrators, setHrAdministrators] = useState([]);
  
    useEffect(() => {
      HrAdministratorService
        .getAllHrAdministrator()
        .then((res) => {

          if (res.data.content.length > 0) {

            setHrAdministrators(res.data.content);
              console.log(res.data.content)

          }
        })
        .catch((err) => console.log(err));
    }, []);
    
        const detailHr = (hrcin) => {
      navigate("../userProfile/" + hrcin);
    };
  
  return (

<div class="wrapper">
 

    <div class="main-panel">
		<nav class="navbar navbar-default navbar-fixed">
            <div class="container-fluid">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navigation-example-2">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href="#">HR Administrator List</a>
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
                                <li><a href="#">Notification 1</a></li>
                                <li><a href="#">Notification 2</a></li>
                                <li><a href="#">Notification 3</a></li>
                                <li><a href="#">Notification 4</a></li>
                                <li><a href="#">Another notification</a></li>
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
                                <li><a href="#">Action</a></li>
                                <li><a href="#">Another action</a></li>
                                <li><a href="#">Something</a></li>
                                <li><a href="#">Another action</a></li>
                                <li><a href="#">Something</a></li>
                                <li class="divider"></li>
                                <li><a href="#">Separated link</a></li>
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
                                <h4 class="title">Hr Administrators</h4>
                            </div>
                            <div class="content table-responsive table-full-width">
                                <table class="table table-hover table-striped">
                                    <thead>
                                        <th>Hr Cin</th>
                                    	<th>Hr Gmail</th>
                                    	<th>Date Of Birth
</th>
                                    	<th>
First Name</th>
                                    	<th>
Last Name</th>
<th>
Telephone</th>
                                    </thead>
                                    <tbody>
                                  
                                        {
      HrAdministrators.map((people) => {
        return (
       
              <tr key={people.personnel.cin} onClick={() => detailHr(people.personnel.cin)}>
              <td>{people.personnel.cin}
</td>
              <td>{people.personnel.email}</td>
              <td>{people.personnel.dateofbirth}</td>
              <td>{people.personnel.first_name}</td>
              <td>{people.personnel.last_name}</td>
              <td>{people.personnel.telephone}</td>

          </tr>
          )
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
  )
}

export default ListOfHr