import React, { useState } from "react";
import AbsencesService from "../../../_services/absences.Service";

function PageHomeAbs() {
  const [cin, setCin] = useState("");
  const [missingDate, setMissingDate] = useState("");

  const handleInputChangeCin = (event) => {
    setCin(event.target.value);
  };

  const handleInputChangeMissingDate = (event) => {
    setMissingDate(event.target.value);
  };

  const handleAddAbsence = () => {
    const absenceData = {
      personnel: cin,
      missingDate: missingDate,
    };
    AbsencesService.create(absenceData)
      .then((response) => {
        console.log(response);
        console.log("Absence created successfully");
      })
      .catch((error) => {
        console.error("Error creating absence:", error);
      });
  };

  return (
    <div class="row d-flex justify-content-center mt-100 ">
      <div class="col-lg-8 mt-5" style={{ marginLeft: "15em" }}>
        <div class="card">
          <div class="card-body text-center">
            <h4 class="card-title m-b-0">Absences</h4>
          </div>
          <ul class="list-style-none">
            <li
              class="d-flex no-block card-body h-10"
              
            >
              <i class="fa fa-check-circle w-30px m-t-5"></i>
              <div>
                <a href=" " class="m-b-0 font-medium p-0" data-abc="true">
                  Add Absence{" "}
                </a>
                <span class="text-muted">
                  {"        "}Create the CIN number of the employee you want to
                  declare their absence
                </span>

                <div class="row mt-3">
                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="form_name">personnel Cin *</label>
                      <input
                        id="form_name"
                        type="text"
                        name="personnel"
                        class="form-control"
                        placeholder="Please enter your firstname *"
                        required="required"
                        data-error="Firstname is required."
                        onChange={handleInputChangeCin}
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="form_lastname">missing Date *</label>
                      <input
                        id="form_lastname"
                        type="Date"
                        name="missingDate"
                        class="form-control"
                        placeholder="Please enter your lastname *"
                        required="required"
                        data-error="Lastname is required."
                        onChange={handleInputChangeMissingDate}
                      />
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <button
                    type="button"
                    class="btn btn-primary bg-white"
                    onClick={handleAddAbsence}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </li>
            <li
              class="d-flex no-block card-body h-10"      
            >
              <i class="fa fa-check-circle w-30px m-t-5"></i>
              <div>
                <a href={`/chro/updateAbsence/${cin}`}class="m-b-0 font-medium p-0" data-abc="true">
                  Update Absence{" "}
                </a>
                <span class="text-muted">
                  {" "} Create the CIN number of the employee you want to
                  update their absence
                </span>

                <div class="row mt-3">
                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="form_name">personnel Cin *</label>
                      <input
                        id="form_name"
                        type="text"
                        name="personnel"
                        class="form-control"
                        placeholder="Please enter your firstname *"
                        required="required"
                        data-error="Firstname is required."
                        onChange={handleInputChangeCin}
                      />
                    </div>
                  </div>
                 
                </div>
            
              </div>
            </li>            
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PageHomeAbs;
