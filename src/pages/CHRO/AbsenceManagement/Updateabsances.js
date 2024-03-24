import React, { useEffect, useState } from "react";
import AbsencesService from "../../../_services/absences.Service";

function Updateabsances() {
  const [absence, setAbsence] = useState([]);
  const [formData, setFormData] = useState({
    id: "",
    returnDate: "",
    missingDuration: "",
    missingMotif: "",
  });

  useEffect(() => {
    const url = window.location.pathname;
    const path = url.substring(url.lastIndexOf("/") + 1);
    AbsencesService.getById(path)
      .then((response) => {
        console.log(response);
        setAbsence(response);
        setFormData({
          id: response.id,
          returnDate: response.returnDate,
          missingDuration: response.missingDuration,
          missingMotif: response.missingMotif,
        });
      })
      .catch((error) => {
        console.error("Error get absence:", error);
      });
  }, []);
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = (id) => (event) => {
    event.preventDefault();

    AbsencesService.update(id, formData)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error("Error creating absence:", error);
      });
  };
  return (
    <div class="container" style={{ marginLeft: "10em" }}>
      <div class=" text-center mt-5 ">
        <h1>Absence Informations</h1>
      </div>
      {absence.map((people) => {
        return (
          <div class="row ">
            <div class="col-lg-7 mx-auto">
              <div class="card mt-2 mx-auto p-4 bg-light">
                <div class="card-body bg-light">
                  <div class="container">
                    <form
                      id="contact-form"
                      onSubmit={handleFormSubmit(people.id)}
                    >
                      <div class="controls">
                        <div class="row">
                          <div class="col-md-6">
                            <div class="form-group">
                              <label for="form_name">missing Date *</label>
                              <input
                                onChange={handleInputChange}
                                id="form_name"
                                value={people.missingDate}
                                type="Date"
                                name="missingDate"
                                class="form-control"
                                placeholder="Please enter your  *"
                                data-error=" is required."
                              />
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="form-group">
                              <label for="form_lastname">return Date *</label>
                              <input
                                onChange={handleInputChange}
                                id="form_lastname"
                                value={people.returnDate}
                                type="Date"
                                name="returnDate"
                                class="form-control"
                                placeholder="Please enter your lastname *"
                                data-error="Lastname is required."
                              />
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-md-6">
                            <div class="form-group">
                              <label for="form_email">missing Duration *</label>
                              <input
                                onChange={handleInputChange}
                                id="form_email"
                                value={people.missingDuration}
                                type="number"
                                name="missingDuration"
                                class="form-control"
                                placeholder="Please enter  *"
                                data-error="Valid email is required."
                              />
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="form-group">
                              <label for="form_email">missing Motif *</label>
                              <input
                                onChange={handleInputChange}
                                id="form_email"
                                value={people.missingMotif}
                                type="text"
                                name="missingMotif"
                                class="form-control"
                                placeholder="Please enter  *"
                                data-error="Valid email is required."
                              />
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-md-12">
                            <input
                              type="submit"
                              class="btn btn-warning btn-send  pt-2 btn-block
                            "
                              value="Update"
                            />
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Updateabsances;
