import React, { useState } from "react";
function HomePage() {
  const [startDate, setStartDate] = useState('');
  const [selectedType, setSelectedType] = useState('CDI');
  const [cin, setCin] = useState('');

  const handleInputChange = (event) => {
    setStartDate(event.target.value);
  };
  const handleInputChangeCin = (event) => {
    setCin(event.target.value);
  };


  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
    sendSelectedTypeToFunction(event.target.value);
  };

  const sendSelectedTypeToFunction = (selectedType) => {
    console.log("Type de contrat sélectionné :", selectedType);
  };

  return (
    <div class="row d-flex justify-content-center mt-100 ">
      <div class="col-lg-8 mt-5" style={{ marginLeft: "15em" }}>
        <div class="card">
          <div class="card-body text-center">
            <h4 class="card-title m-b-0">Contacts</h4>
          </div>
          <ul class="list-style-none">
            <li
              class="d-flex no-block card-body h-10"
              style={{ height: "100px" }}
            >
              <i class="fa fa-check-circle w-30px m-t-5"></i>
              <div>
                <a
  href={`/chro/contractOfThemonth/${startDate}`}
  class="m-b-0 font-medium p-0"
                  data-abc="true"
                >
                  Contract by date{" "}
                </a>
                <span class="text-muted">
                  {"        "} Display all new contracts by date.
                </span>
                <input
                  type="date"
                  class="form-control"
                  aria-label="Small"
                  aria-describedby="inputGroup-sizing-sm"
                  name="startDate"
                  value={startDate}
                  onChange={handleInputChange}                />
              </div>
            </li>
            <li
              class="d-flex no-block card-body border-top"
              style={{ height: "100px" }}
            >
              <i class="fa fa-gift w-30px m-t-5"></i>
              <div>
                <a
                  href={`/chro/contractbytype/${selectedType}`}
                  class="m-b-0 font-medium p-0"
                  data-abc="true"
                >
                  Contract by type
                </a>
                <span class="text-muted">
                  {" "}
                  Display all contracts by contract type
                </span>
                <div class="d-flex justify-content-between">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="typeofcontract"
                      id="exampleRadios1"
                      value="CDI"
                      onChange={handleTypeChange}
                    />
                    <label class="form-check-label" for="exampleRadios1">
                      CDI{" "}
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="typeofcontract"
                      id="exampleRadios2"
                      value="CDD"
                      onChange={handleTypeChange}

                    />
                    <label class="form-check-label" for="exampleRadios2">
                      CDD{" "}
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="typeofcontract"
                      id="exampleRadios2"
                      value="FREELANCE"
                      onChange={handleTypeChange}

                    />
                    <label class="form-check-label" for="exampleRadios2">
                      FREELANCE{" "}
                    </label>
                  </div>
                </div>
              </div>
            </li>
            <li
              class="d-flex no-block card-body border-top"
              style={{ height: "100px" }}
            >
              <i class="fa fa-gift w-30px m-t-5"></i>
              <div>
                <a
                  href={`/chro/salaryContract/${cin}`}
                  class="m-b-0 font-medium p-0"
                  data-abc="true"
                >
                  Salary contract
                </a>
                <span class="text-muted">
                  {" "}
                  Display all the contracts of the employee.
                </span>
                
                <input
                  type="text"
                  class="form-control"
                  aria-label="Small"
                  aria-describedby="inputGroup-sizing-sm"
                  name="cin"
                  onChange={handleInputChangeCin}                />
            <hr />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
