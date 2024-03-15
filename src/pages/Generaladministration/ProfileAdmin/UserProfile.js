import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { HrAdministratorService } from "../../../_services/hrAdministratorService";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function UserProfile() {
  let navigate = useNavigate();
  const [HrAdministrator, setHrAdministrator] = useState(null); 

  useEffect(() => {
    const url = window.location.pathname;
    const rhcin = url.substring(url.lastIndexOf("/") + 1);
    HrAdministratorService.getHrAdministrator(rhcin)
      .then((res) => {
        setHrAdministrator(res.data);
      })
      .catch((err) => console.log(err));
  }, []);


  const onChange = (e) => {
    const { name, value } = e.target;

    setHrAdministrator(prevState => ({
        ...prevState,
        personnel: {
            ...prevState.personnel,
            [name]: value
        }
    }));
};
  const onSubmit = (e) => {

    e.preventDefault()  

    HrAdministratorService.updateHrAdministrator(HrAdministrator.personnel)
        .then(res => {
    navigate("../listOfHr")      
    })
        .catch(err => 
          {
            navigate("../listOfHr")      
            console.log(err);
        }  )
}
  if (HrAdministrator === null) {
    return null;
  }


  return (
    <div class="wrapper">
      <div class="main-panel ">
        <div class="container-fluid">
          <div class="row">
            <div class="p-5">
              <div class="card">
                <div class="header">
                  <h4 class="title">
                   Profile 
                    {" "} {HrAdministrator.personnel.last_name}
                    {" "}   {HrAdministrator.personnel.first_name}
                  </h4>
                </div>
                <div class="content">
                <form onSubmit={onSubmit}>
                    <div class="row">
                      <div class="col-md-5">
                        <div class="form-group">
                          <label>Company (disabled)</label>
                          <input
                            type="text"
                            class="form-control"
                            disabled
                            placeholder="Company"
                            value={HrAdministrator.companyId.name}

                          />
                        </div> 
                      </div>
                   
                      <div class="col-md-4">
                        <div class="form-group">
                          <label for="exampleInputEmail1">Email address</label>
                          <input
                            type="email"
                            name="email"
                            class="form-control"
                          value={HrAdministrator.personnel.email}
                          onChange={onChange}
                          />
                        </div>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>First Name</label>
                          <input
                            type="text"
                            name="first_name"
                            class="form-control"
                            placeholder="Company"
                            value={HrAdministrator.personnel.first_name}
                            onChange={onChange}
                          />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>Last Name</label>
                          <input
                            type="text"
                            name="last_name"
                            class="form-control"
                            placeholder="Last Name"
                            value={HrAdministrator.personnel.last_name}
                            onChange={onChange}
                          />
                        </div>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-md-12">
                        <div class="form-group">
                          <label>Address</label>
                          <input
                            type="text"
                            name="address"
                            class="form-control"
                            placeholder="Home Address"
                            value={HrAdministrator.personnel.address}
                            onChange={onChange}
                          />
                        </div>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-md-4">
                      <div className="form-group">
  <label htmlFor="role">Post</label>
  <select
    className="form-control"
    name="role"
    id="role"
    onChange={onChange}
  >
    
    <option selected value="{HrAdministrator.personnel.role}">{HrAdministrator.personnel.role}</option>
    <option value="PROJECT_MANAGER">PROJECT_MANAGER</option>
    <option value="STANDARD_EMPLOYER">STANDARD_EMPLOYER</option>
  </select>
</div>
                      </div>
                      <div class="col-md-4">
                        <div class="form-group">
                          <label>Telephone</label>
                          <input
                            type="text"
                            name="telephone"
                            class="form-control"
                            value={HrAdministrator.personnel.telephone}
                            onChange={onChange}
                          />
                        </div>
                      </div>
                   
                    </div>


                    <button
                      type="submit"
                      class="btn btn-info btn-fill pull-right"
                    >
                      Update Profile
                    </button>
                    <div class="clearfix"></div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
