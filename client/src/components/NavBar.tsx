import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { FontAwesomeIcon as FaIcon } from "@fortawesome/react-fontawesome";
import {
  faMountain,
  faSkiingNordic,
  faBan,
  faKey,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { useAuth0 } from "@auth0/auth0-react";

const NavBar = () => {
  const { isLoading, isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <Navbar bg="dark" variant="dark" expand="md" collapseOnSelect>
      <Navbar.Brand href="/">
        <FaIcon icon={faMountain} className="mr-2"></FaIcon>
        MERN Typescript template
      </Navbar.Brand>
      <Navbar.Toggle
        className="mb-2"
        aria-controls="basic-navbar-nav"
        style={{ outline: "none" }}
      />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav>
          {!isLoading && (
            <>
              {isAuthenticated && (
                <Nav.Link
                  className="btn btn-sm btn-outline-primary text-light mr-2"
                  onClick={() => console.log("do something")}
                >
                  <FaIcon icon={faPlus} className="mr-2"></FaIcon>Add something
                </Nav.Link>
              )}
              {isAuthenticated && (
                <>
                  <Nav.Link href="/profile" className="btn btn-sm text-light">
                    <FaIcon icon={faSkiingNordic} className="mr-2"></FaIcon>
                    Profile
                  </Nav.Link>
                  <Nav.Link
                    className="btn btn-sm text-muted mr-2"
                    onClick={() => logout()}
                  >
                    <FaIcon
                      icon={faBan}
                      style={{ marginRight: "0.4rem" }}
                    ></FaIcon>
                    Log out
                  </Nav.Link>
                </>
              )}
              {!isAuthenticated && (
                <>
                  <Nav.Link
                    className="btn btn-sm text-light mr-2"
                    onClick={() => loginWithRedirect()}
                  >
                    <FaIcon
                      icon={faSkiingNordic}
                      style={{ marginRight: "0.4rem" }}
                    ></FaIcon>
                    Log in
                  </Nav.Link>
                  <Nav.Link
                    className="btn btn-sm btn-outline-primary text-light mr-2"
                    onClick={() => loginWithRedirect({ screen_hint: "signup" })}
                  >
                    <FaIcon icon={faKey} className="mr-2"></FaIcon>
                    Sign up
                  </Nav.Link>
                </>
              )}
            </>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
