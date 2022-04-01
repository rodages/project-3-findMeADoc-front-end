import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DoctorsIndexCard from "./DoctorsIndexCard.js";
import Map from "../mapbox/Map.js";
import SearchBar from "../search/SearchBar.js";

// import "dotenv/config";

// const backEndLink = process.env.BACKEND_CONNECTION
//   ? process.env.BACKEND_CONNECTION
//   : "http://localhost:4000";
// console.log(backEndLink);

const DoctorsIndex = () => {
  const [doctorData, setDoctorData] = useState([]);
  const [specialtyData, setSpecialty] = useState([]);

  useEffect(() => {
    // fetch(`${backEndLink}/doctors`)
    fetch(`https://findmeadoc.herokuapp.com/doctors/`)
      .then((resp) => resp.json())
      .then((data) => setDoctorData(data));
  }, []);

  useEffect(() => {
    fetch("https://findmeadoc.herokuapp.com/specialties")
      .then((resp) => resp.json())
      .then((data) => setSpecialty(data));
  }, []);

  console.log(doctorData);

  return (
    <>
      <div>
        <div>
          <SearchBar
            placeholder="Speciality or doctor name"
            doctorData={doctorData}
            specialtyData={specialtyData}
          />
        </div>
        <div>
          {doctorData ? (
            doctorData.map((doctor) => (
              <DoctorsIndexCard key={doctor._id} {...doctor} />
            ))
          ) : (
            <p>...loading</p>
          )}
        </div>
      </div>
      <div>{<Map doctorData={doctorData} />}</div>
    </>
  );
};

export default DoctorsIndex;
