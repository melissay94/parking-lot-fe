import React, { useState } from 'react';
import  {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Form,
  FormGroup,
  Row,
  Col,
  Input,
  Button
} from 'reactstrap';
import "../styles/Navigation.css";

export default function NavBar({ user }) {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar className="navigation" expand="md">
      <NavbarBrand href="/">Parking Lot</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav navbar className="nav-bar">
          <NavItem className="nav-search">
            <Form>
              <FormGroup row>
                <Col sm={9}>
                  <Input type='search'>Look Up Lot</Input>
                </Col>
                <Col sm={3}>
                  <Button>Search</Button>
                </Col>
              </FormGroup>
            </Form>
          </NavItem>
          <NavItem className="user-dropdown">
            <Row>
              <Col sm={3}>
                <img src={ user ? user.img : 'http://www.placekitten.com/g/50/50'} alt='user picture' />
              </Col>
              <Col sm={9} className="user-name">
                <h4>{user ? user.name : "Current User"}</h4>
              </Col>
            </Row>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  My Profile
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Sign Out
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
}
