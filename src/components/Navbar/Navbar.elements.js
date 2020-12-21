import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

export const Nav = styled.nav`
  position: absolute;
  z-index: 1;
  width: 100%;
  display: flex;
`;

export const NavItemList = styled.ul`
  display: flex;
  list-style: none;
  justify-content: center;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);

  @media only screen and (max-width: 1000px) {
    & {
      display: none;
    }
  }
`;

export const NavItem = styled.li`
  padding: 2.3rem 1.7rem;
`;

export const NavLink = styled((props) => <Link {...props} />)`
  display: inline-block;
  text-decoration: none;
  color: #fff;
  transition: color 0.25s;

  &:hover {
    color: #ef8354;
  }

  &.active {
    color: #ef8354;
  }
`;

export const Logo = styled.span`
  display: inline-block;
  padding: 1.3rem 1rem;
  margin-left: 1rem;
`;

export const LogoLink = styled((props) => <Link {...props} />)`
  display: inline-block;
  text-decoration: none;
  color: #fff;
  font-size: 2.3rem;
  font-weight: bold;
  @media only screen and (max-width: 1000px) {
      & {
        font-size: 1.6rem;
      }
  };
`;

export const Hamburger = styled.div`
    display: none;
    cursor: pointer;
    @media only screen and (max-width: 1000px) {
    & {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      margin-left: auto;
      margin-right: 1.5rem;
    }
  }
`

export const HamburgerLine = styled.span`
    background-color: #fff;
    height: 3px;
    margin: 3.5px;
    width: 32px;
    display: inline-block;
    border-radius: 10rem;
    transition: all .5s;

    &.one {
        transform: rotate(45deg);
        transform-origin: bottom left;
        width: 28px;
    }

    &.two {
        opacity: 0;
        transform: rotate(45deg) translateX(-400%);
    }

    &.three {
        transform: rotate(-45deg);
        transform-origin: top left;
        width: 28px;
    }
`
