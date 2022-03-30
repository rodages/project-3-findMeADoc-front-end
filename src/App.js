import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import React from "react";
import NavBar from "./components/navigation/NavBar";
import Register from "./components/navigation/Register";
import Login from "./components/navigation/Login";
import DoctorsIndex from "./components/doctors/DoctorsIndex";
import Home from "./components/Home";
import WelcomeRegistration from "./components/Welcome";
import EditPage from "./components/editProfile/EditPage";
import DoctorShow from "./components/doctors/DoctorShow";

function App() {
  const [storageToken, updateStorageToken] = useState(localStorage.token);
  // lesson code
  return (
    <div className="App">
      <NavBar
        storageToken={storageToken}
        updateStorageToken={updateStorageToken}
      />
      {/* <FontAwesomeIcon icon={} /> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctors" element={<DoctorsIndex />} />
        <Route path="/doctors/:doctorID" element={<DoctorShow />} />
        //patient routes
        <Route path="/users/edit" element={<EditPage />} />
        //doctor routes //user routes
        <Route path="/users/register" element={<Register />} />
        <Route
          path="/users/confirm/:code/account"
          element={<WelcomeRegistration />}
        ></Route>
        <Route
          path="/users/login"
          element={<Login updateStorageToken={updateStorageToken} />}
        />
        {/* <Route path="/users/forgotPassword" element={<PasswordResest />} /> */}
        /*{" "}
      </Routes>
    </div>
  );
}

export default App;
