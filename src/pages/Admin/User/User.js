import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { personnelService } from "../../../_services/personnel.Service";
import { accountService } from "../../../_services/accountService";

const User = () => {
  let navigate = useNavigate();
  const [personnels, setPersonnels] = useState([]);

  useEffect(() => {
    personnelService
      .getAllPersonnels()
      .then((res) => {
        if (res.data.content.length > 0) {
          setPersonnels(res.data.content);
        }
      })
      .catch((err) => console.log(err));
  }, [personnels]);
  

  //   const maecel = (userId) => {
  //     console.log("click");
  //     navigate("../edit/" + userId);
  //   };

  return (
    <div className="User">
      User List
      {
      personnels.map((people) => {
        return (
        <div>
       {people.cin}
        </div>)
      })}
    </div>
  );
};

export default User;
