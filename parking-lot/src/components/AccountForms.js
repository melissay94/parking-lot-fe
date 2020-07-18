import React, { useState } from 'react';
import { Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import classnames from 'classnames';

import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import "../styles/AccountForm.css";

export default function AccountForms() {

  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  }

  return (
    <div className='account-tabs'>
      <Nav tabs>
        <NavItem className="first-tab">
          <NavLink 
            className={classnames({ active: activeTab === '1' })}
            onClick={ () => { toggle('1'); } }>
              Sign Up!
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink 
            className={classnames({ active: activeTab === '2' })}
            onClick={ () => { toggle('2'); } }>
              Login
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab} className="form-holder">
        <TabPane tabId='1'>
          <SignupForm />
        </TabPane>
        <TabPane tabId='2'>
          <LoginForm />
        </TabPane>
      </TabContent>
    </div>
  );

}
