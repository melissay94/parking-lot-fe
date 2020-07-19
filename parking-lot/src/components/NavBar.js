import React, { useState } from 'react';
import { Link, useHistory } from  'react-router-dom';
import { useApolloClient } from '@apollo/react-hooks';
import  {
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
  DropdownItem,
  Form,
  FormGroup,
  Row,
  Col,
  Input,
  Button
} from 'reactstrap';
import gql from 'graphql-tag';

import useSearch from '../hooks/Search';
import "../styles/Navigation.css";

export default function NavBar({ user }) {

  const [isOpen, setIsOpen] = useState(false);
  const [, setQuery] = useState(null);
  const client = useApolloClient();
  const history = useHistory();

  const toggle = () => setIsOpen(!isOpen);
  const sendQuery = () => { setQuery(input) };

  const { input, handleInputChange } = useSearch(sendQuery);

  function logout () {
    client.resetStore();
    client.writeQuery({ 
      query: gql`
        query getLoggedIn {
          isLoggedIn
        }
      `,
      data: { isLoggedIn: false }
    });
    history.push("/");
  }

  return (
    <Navbar className="navigation" expand="md">
      <NavbarBrand tag={Link} to="/">Parking Lot</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav navbar className="nav-bar">
          <NavItem className="nav-search">
            <Form>
              <FormGroup row>
                <Col sm={9}>
                  <Input 
                    type='search' 
                    placeholder="Look up Lot" 
                    value={input}
                    onChange={handleInputChange} />
                </Col>
                <Col sm={3}>
                  <Button
                    tag={Link}
                    to={`/search?query=${input}`}>Search</Button>
                </Col>
              </FormGroup>
            </Form>
          </NavItem>
          <NavItem className="user">
            <Row>
              <Col sm={3}>
                <img src={ user ? user.img : 'http://www.placekitten.com/g/50/50'} alt='user profile' />
              </Col>
              <Col sm={9} className="user-name">
                <h4>{user ? user.name : "Current User"}</h4>
              </Col>
            </Row>
          </NavItem>
          <NavItem className="responsive-nav-item">
            <NavLink tag={Link} to="/profile">My Profile</NavLink>
          </NavItem>
          <NavItem className="responsive-nav-item">
            <NavLink onClick={logout}>Sign out</NavLink>
          </NavItem>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>
                <Link to="/profile">
                  My Profile
                </Link>
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem onClick={logout}>
                Sign Out
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
      </Collapse>
    </Navbar>
  );
}
