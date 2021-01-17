import React from 'react';
import './NavigationItems.css';
import { Dropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useHooks from '../../../UseHooks';

    function NavigationItems() {
      const show = useHooks();

  return (
       <ul className="NavigationItems">
        <li >
          <NavLink activeClassName="links" id={show && 'changeCol'} to='/'>HOME</NavLink>
        </li>
        <li>
          <NavLink className="links" id={show && 'changeCol'} to="/news">NEWS</NavLink>
          </li>
        <li>
          <NavLink className="links" id={show && 'changeCol'} to="/markets">MARKETS</NavLink>
        </li>
        <li>
          <NavLink className="links" id={show && 'changeCol'} to="/advice">ADVICE</NavLink>
        </li>
        <li>
          <NavLink id={show && 'changeCol'} className="links" to="media">MEDIA</NavLink>
        </li>
        <li link="/app">
          <NavLink className="links" id={show && 'changeCol'} to="app">GET APP</NavLink>
        </li>
       <li className="dropdown_li"> <Dropdown className="drop">
          <Dropdown.Toggle className="dropdown" id={show && 'changeCol'} variant="none">
              Account
          </Dropdown.Toggle>
          <Dropdown.Menu className="dropMenu">
          <Dropdown.Item ><NavLink to="/signup">SignIn</NavLink></Dropdown.Item>
          <Dropdown.Item ><NavLink to="/login">Login</NavLink></Dropdown.Item>
          </Dropdown.Menu>
          </Dropdown>
      </li>
      <li id="subscribe">Subcribe</li>
    </ul>
    );
};

export default NavigationItems;