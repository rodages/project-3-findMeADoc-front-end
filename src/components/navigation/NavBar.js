import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { faIdCard } from "@fortawesome/free-regular-svg-icons";
import {
  faHospitalUser,
  faUserPlus,
  faUserPen,
  faArrowRightFromBracket,
  faUserSlash,
  faKey,
} from "@fortawesome/free-solid-svg-icons";
// import {} from "@fortawesome/fontawesome-free-brands";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";

import Register from "./Register.js";
import Login from "./Login.js";

import DoctorsIndex from "../doctors/DoctorsIndexCard";
import { useNavigate } from "react-router-dom";

//https://react-bootstrap.netlify.app/components/navbar/
function NavBar({ storageToken, updateStorageToken }) {
  // const [storageToken,updateStorageToken] = useState(localStorage.token)
  useEffect(() => console.log("rerendered"), [storageToken]);
  let info;
  if (storageToken) {
    info = JSON.parse(atob(storageToken.split(".")[1]));
  }
  const navigate = useNavigate();
  console.log();
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>
              findMeADoc <FontAwesomeIcon icon={faHospitalUser} />
            </Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <LinkContainer to="/doctors">
                <Nav.Link>See Doctors</Nav.Link>
              </LinkContainer>
            </Nav>

            <Nav>
              {storageToken ? (
                <>
                  <Nav.Link disabled>
                    Logged in as: {info.email}({info.role}){" "}
                  </Nav.Link>
                  <NavDropdown title="Profile">
                    <NavDropdown.Item
                      onClick={() => {
                        console.log("clicked");
                        navigate("/users/edit");
                      }}
                    >
                      {" "}
                      Edit Profile <FontAwesomeIcon icon={faUserPen} />
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item
                      onClick={() => {
                        navigate("/users/myprofile/changePassword");
                      }}
                    >
                      {" "}
                      Change Password <FontAwesomeIcon icon={faKey} />
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item
                      onClick={() => {
                        console.log("logout clicked");
                        localStorage.removeItem("token");
                        updateStorageToken(localStorage.token);
                        navigate("/");
                      }}
                    >
                      {" "}
                      Logout <FontAwesomeIcon icon={faArrowRightFromBracket} />
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item
                      onClick={() => {
                        console.log("delete account clicked");
                        navigate("/users/myprofile/deleteAccount");
                      }}
                    >
                      {" "}
                      Delete Account <FontAwesomeIcon icon={faUserSlash} />
                    </NavDropdown.Item>
                  </NavDropdown>
                </>
              ) : (
                <>
                  <LinkContainer to="/users/login">
                    <Nav.Link>
                      {" "}
                      Log in <FontAwesomeIcon icon={faIdCard} />
                    </Nav.Link>
                  </LinkContainer>

                  <LinkContainer to="/users/register">
                    <Nav.Link>
                      {" "}
                      Register <FontAwesomeIcon icon={faUserPlus} />
                    </Nav.Link>
                  </LinkContainer>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
export default NavBar;
