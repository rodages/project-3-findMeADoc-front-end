import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import React from "react";
import NavBar from "./components/navigation/NavBar";
import Register from "./components/navigation/Register";
import Login from "./components/navigation/Login";
import DoctorsIndex from "./components/doctors/DoctorsIndex";
import Home from "./components/Home";
import WelcomeRegistration from "./components/Welcome";
import DoctorShow from "./components/doctors/DoctorShow";
import EditPage from "./components/editProfile/EditPage";
import ResetpasswordRequest from "./components/ResetpasswordRequest";
import ResetPassword from "./components/PasswordReset";
import Testing from "./components/mapbox/Testing";
import ChangePassword from "./components/navigation/ChangePassword";
import DeleteAccount from "./components/navigation/DeleteAccount";
import SpecialtyIndex from "./components/doctors/SpecialtyIndex.js";

function App() {
  const [storageToken, updateStorageToken] = useState(localStorage.token);
  console.log("token from App", storageToken);
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
        <Route
          path="/search/speciality=:speciality"
          element={<SpecialtyIndex />}
        />
        <Route path="/users/edit" element={<EditPage />} />
        <Route path="/users/register" element={<Register />} />
        <Route
          path="/users/confirm/:code/account"
          element={<WelcomeRegistration />}
        ></Route>
        <Route
          path="/resetpasswordRequest"
          element={<ResetpasswordRequest />}
        ></Route>
        <Route
          path="/users/login"
          element={<Login updateStorageToken={updateStorageToken} />}
        />
        <Route path="/test" element={<Testing />} />
        <Route path="/users/resetPassword/:code" element={<ResetPassword />} />
        <Route
          path="/users/myprofile/changePassword"
          element={<ChangePassword updateStorageToken={updateStorageToken} />}
        />
        <Route
          path="/users/myprofile/deleteAccount"
          element={<DeleteAccount updateStorageToken={updateStorageToken} />}
        />
      </Routes>
    </div>
  );
}

export default App;
