import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import { Link, withRouter } from "react-router-dom";

import "./Navbar.scss";
import logo from "../../assets/logo.svg";

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="black" expand="md">
          <NavbarBrand>
            <img className="logo" src={logo} alt="logo" />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                {/* <NavLink> */}
                <Link
                  to="/"
                  style={{ textDecoration: "none", color: "white" }}
                  className="link"
                >
                  Home
                </Link>
                {/* </NavLink> */}
              </NavItem>
              <NavItem>
                {/* <NavLink> */}
                <Link
                  to="/dashboard"
                  style={{ textDecoration: "none", color: "white" }}
                  className="link"
                >
                  Dashboard
                </Link>
                {/* </NavLink> */}
              </NavItem>
              <NavItem>
                {/* <NavLink> */}
                <Link
                  to="/garrett"
                  style={{ textDecoration: "none", color: "white" }}
                  className="link"
                >
                  Garrett
                </Link>
                {/* </NavLink> */}
              </NavItem>
              <NavItem>
                {/* <NavLink> */}
                <Link
                  to="/jean"
                  style={{ textDecoration: "none", color: "white" }}
                  className="link"
                >
                  Jean
                </Link>
                {/* </NavLink> */}
              </NavItem>
              {/* <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>Option 1</DropdownItem>
                  <DropdownItem>Option 2</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Reset</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown> */}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
