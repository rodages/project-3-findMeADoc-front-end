import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { faIdCard } from "@fortawesome/free-regular-svg-icons";
import {
  faHospitalUser,
  faUserPlus,
  faUserPen,
  faArrowRightFromBracket
} from "@fortawesome/free-solid-svg-icons";
// import {} from "@fortawesome/fontawesome-free-brands";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";

import Register from "./Register.js";
import Login from "./Login.js";

import DoctorsIndex from "../doctors/DoctorsIndexCard";

//https://react-bootstrap.netlify.app/components/navbar/
function NavBar({ storageToken, updateStorageToken }) {
  // const [storageToken,updateStorageToken] = useState(localStorage.token)
  useEffect(() => console.log("rerendered"), [storageToken]);
  let info
  if(storageToken){
    info = JSON.parse(atob(storageToken.split('.')[1]))
  }
  
  console.log()
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
                //check with Niklas why does this run
                <>  
                <Nav.Link disabled>Logged in as: {info.email
                  }({info.role}) </Nav.Link>
                  <LinkContainer to="/users/edit">
                    <Nav.Link>
                      {" "}
                      Edit Profile <FontAwesomeIcon icon={faUserPen} />
                    </Nav.Link>
                  </LinkContainer>
                  <Nav.Link
                    onClick={() => {
                      console.log("clicked");
                      localStorage.removeItem("token");
                      updateStorageToken(localStorage.token);
                    }}
                  >
                    {" "}
                    Logout{" "}<FontAwesomeIcon icon={faArrowRightFromBracket}/>
                  </Nav.Link>
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
