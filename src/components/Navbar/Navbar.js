import React, { useState } from 'react';
import {
  Nav,
  NavItemList,
  NavItem,
  NavLink,
  Logo,
  LogoLink,
  Hamburger,
  HamburgerLine,
} from './Navbar.elements';

const Navbar = () => {
  const [classOne, setClassOne] = useState('');
  const [classTwo, setClassTwo] = useState('');
  const [classThree, setClassThree] = useState('');
  const [isActive, setIsActive] = useState(false);

  return (
    <Nav>
      <Logo>
        <LogoLink to="/">Hamco</LogoLink>
      </Logo>
      <NavItemList>
        <NavItem>
          <NavLink to="/" activeClassName="active">
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/about" activeClassName="active">
            About
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/services" activeClassName="active">
            Services
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/portfolio" activeClassName="active">
            Portfolio
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/contact" activeClassName="active">
            Contact
          </NavLink>
        </NavItem>
      </NavItemList>
      <Hamburger
        onClick={() => {
          if (!isActive) {
            setClassOne('one');
            setClassTwo('two');
            setClassThree('three');
            setIsActive(true)
          } else {
            setClassOne('');
            setClassTwo('');
            setClassThree('');
            setIsActive(false)
          }
        }}
      >
        <HamburgerLine className={classOne} />
        <HamburgerLine className={classTwo} />
        <HamburgerLine className={classThree} />
      </Hamburger>
    </Nav>
  );
};

export default Navbar;
