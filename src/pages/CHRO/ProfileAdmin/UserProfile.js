import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { personnelService } from "../../../_services/personnel.Service";
import 'react-toastify/dist/ReactToastify.css';

function UserProfile() {
  let navigate = useNavigate();
  const [Personnel, setPersonnel] = useState(null); 

  useEffect(() => {
    const url = window.location.pathname;

    const cin = url.substring(url.lastIndexOf("/") + 1);
    personnelService.getPersonnelByCin(cin)
      .then((res) => {
        console.log(res)
        setPersonnel(res.data);
      })
      .catch((err) => console.log(err));
  }, []);


  const onChange = (e) => {
    const { name, value } = e.target;

    setPersonnel(prevState => ({
        ...prevState,
        personnel: {
            ...prevState.personnel,
            [name]: value
        }
    }));
};
  const onSubmit = (e) => {

    e.preventDefault()  

    personnelService.updatePersonnel(Personnel)
        .then(res => {
    navigate("../listofpersonnel")      
    })
        .catch(err => 
          {
            navigate("../listofpersonnel")      
            console.log(err);
        }  )
}
  if (Personnel === null) {
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
                    {" "} {Personnel.last_name}
                    {" "}   {Personnel.first_name}
                  </h4>
                </div>
                <div class="content">
                <form onSubmit={onSubmit}>
                    <div class="row">
               
                   
                      <div class="col-md-4">
                        <div class="form-group">
                          <label for="exampleInputEmail1">Email address</label>
                          <input
                            type="email"
                            name="email"
                            class="form-control"
                          value={Personnel.email}
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
                            value={Personnel.first_name}
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
                            value={Personnel.last_name}
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
                            value={Personnel.address}
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
    
    <option selected value="{HrAdministrator.personnel.role}">{Personnel.role}</option>
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
                            value={Personnel.telephone}
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
