import React from "react";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  Row,
  Container,
  Col,
} from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import LogoSvg from "../../assets/logo.svg";

function NavigationBar() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="white"
      variant="light"
      className="px-4 py-3"
    >
      <Navbar.Brand href="/">
        <img
          src={LogoSvg}
          alt="Logo"
          height="30"
          className="d-inline-block align-top"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Form inline className="mx-auto my-lg-0">
          <Container
            style={{ backgroundColor: "whitesmoke", borderRadius: "25px" }}
          >
            <Row>
              <Col className="d-flex align-items-center">
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  style={{ color: "grey" }}
                />
              </Col>
              <Col>
                <FormControl
                  type="text"
                  placeholder="Search for your favourite group in ATG"
                  className="mr-sm-2"
                  style={{
                    width: "20rem",
                    border: "none",
                    backgroundColor: "transparent",
                    "::placeholder": {
                      color: "black",
                    },
                  }}
                />
              </Col>
            </Row>
          </Container>
        </Form>
        <Nav className="ml-auto">
          <Nav.Link href="/">Create an account! It's Free</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigationBar;
