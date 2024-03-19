import React, { useEffect, useState } from "react";
import "@/helpers/jscreateforme";
import "@/helpers/csscreateforme.css";
import { personnelService } from "@/_services/personnel.Service";
import { ContractService } from "../../../_services/contract.service";

function CreatePersonnel() {
  const [person, setPerson] = useState({});
  const [contract, setContract] = useState({});

  
  
   
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const personData = {
      cin: formData.get("cin"),
      first_name: formData.get("first_name"),
      last_name: formData.get("last_name"),
      email: formData.get("email"),
      telephone: formData.get("telephone"),
      address: formData.get("address"),
      dateofbirth: formData.get("dateofbirth"),
      role: formData.get("role"),
    };

    const contractData = {
        remuneration: formData.get("Remuneration"),
        contractType: formData.get("Contracttype"),
      endContract: formData.get("endcontract"),
      personnelCin:formData.get("cin"),
    };

    setPerson(personData);
    setContract(contractData);

    personnelService
      .addPersonnel(personData)
      .then((res) => {
        console.log(res);
        ContractService.createContract(contractData)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
      })
      .catch((err) => {
        console.log(err);
      });
   
  };

  return (
    <div class="form-body">
      <div class="row">
        <div class="form-holder">
          <div class="form-content">
            <div class="form-items">
              <h3>Contract</h3>

              <form
                class="requires-validation"
                noValidate
                onSubmit={handleFormSubmit}
              >
                <div class="col-md-12">
                  <input
                    class="form-control"
                    type="text"
                    name="cin"
                    placeholder="cin"
                    required
                  />
                  <div class="valid-feedback">Cin</div>
                  <div class="invalid-feedback">cin field cannot be blank!</div>
                </div>

                <div class="col-md-12">
                  <input
                    class="form-control"
                    type="text"
                    name="first_name"
                    placeholder="first name"
                    required
                  />
                  <div class="valid-feedback">first name</div>
                  <div class="invalid-feedback">
                    first name field cannot be blank!
                  </div>
                </div>

                <div class="col-md-12">
                  <input
                    class="form-control"
                    type="text"
                    name="last_name"
                    placeholder="last name"
                    required
                  />
                  <div class="valid-feedback">last name</div>
                  <div class="invalid-feedback">
                    last name field cannot be blank!
                  </div>
                </div>

                <div class="col-md-12">
                  <input
                    class="form-control"
                    type="email"
                    name="email"
                    placeholder="E-mail Address"
                    required
                  />
                  <div class="valid-feedback">email</div>
                  <div class="invalid-feedback">
                    email field cannot be blank!
                  </div>
                </div>

                <div class="col-md-12">
                  <input
                    class="form-control"
                    type="text"
                    name="telephone"
                    placeholder="Phone number"
                    required
                  />
                  <div class="valid-feedback">Email field is valid!</div>
                  <div class="invalid-feedback">
                    Email field cannot be blank!
                  </div>
                </div>

                <div class="col-md-12">
                  <input
                    class="form-control"
                    type="text"
                    name="address"
                    placeholder="address"
                    required
                  />
                  <div class="valid-feedback">address field is valid!</div>
                  <div class="invalid-feedback">
                    address field cannot be blank!
                  </div>
                </div>

                <div class="col-md-12 mt-3">
                  <label class="mb-3 mr-1" for="gender">
                    date of birth
                  </label>{" "}
                  <input
                    class="form-control"
                    input
                    type="date"
                    id="start"
                    name="dateofbirth"
                    value="2018-07-22"
                    required
                  />
                </div>

                <div class="col-md-12 mt-3">
                  <label class="mb-3 mr-1" for="gender">
                    End contract
                  </label>
                  <input
                    class="form-control"
                    input
                    type="date"
                    id="start"
                    name="endcontract"
                    value="2024-03-25"
                    required
                  />
                </div>

                <div class="col-md-12">
                  <select name="role" class="form-select mt-3" required>
                    <option selected disabled value="">
                      {" "}
                      job position
                    </option>
                    <option value="CEO">Chief Executive Officer</option>
                    <option value="CHRO">Chief Human Resources Officer</option>
                    <option value="PROJECT_MANAGER">Project Manager</option>
                    <option value="STANDARD_EMPLOYER">
                      Senior Web Developer
                    </option>
                    <option value="STANDARD_EMPLOYER">commercial</option>
                  </select>
                  <div class="valid-feedback">You selected a position!</div>
                  <div class="invalid-feedback">Please select a position!</div>
                </div>

                <div class="col-md-12 mt-3">
                  <input
                    class="form-control"
                    type="number"
                    name="Remuneration"
                    placeholder="Salary"
                    required
                  />
                  <div class="valid-feedback">Salary field is valid!</div>
                  <div class="invalid-feedback">
                    Salary field cannot be blank!
                  </div>
                </div>

                <div class="col-md-12 mt-3">
                  <label class="mb-3 mr-1" for="Contracttype">
                    Contract type:{" "}
                  </label>

                  <input
                    type="radio"
                    class="btn-check"
                    name="Contracttype"
                    id="male"
                    value="CDI"
                    autocomplete="off"
                    required
                  />
                  <label class="btn btn-sm btn-outline-secondary" for="CDI">
                    CDI
                  </label>

                  <input
                    type="radio"
                    class="btn-check"
                    name="Contracttype"
                    id="female"
                    value="CDD"
                    autocomplete="off"
                    required
                  />
                  <label class="btn btn-sm btn-outline-secondary" for="CDD">
                    CDD
                  </label>

                  <input
                    type="radio"
                    class="btn-check"
                    name="Contracttype"
                    id="secret"
                    autocomplete="off"
                    value="FREELANCE"
                    required
                  />
                  <label
                    class="btn btn-sm btn-outline-secondary"
                    for="FREELANCE"
                  >
                    FREELANCE
                  </label>
                  <div class="valid-feedback mv-up">
                    You selected a Contracttype!
                  </div>
                  <div class="invalid-feedback mv-up">
                    Please select a Contracttype!
                  </div>
                </div>

                <div class="form-button mt-3">
                  <button type="submit" class="btn btn-primary">
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreatePersonnel;
