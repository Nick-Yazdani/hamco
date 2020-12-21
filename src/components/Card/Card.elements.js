import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

export const Container = styled.div`
  position: relative;
  text-align: center;
`;

export const Image = styled.img`
    width: 100%;
`;

export const Anchor = styled((props) => <Link {...props} />)`
`;

export const Button = styled((props) => <Link {...props} />)`
    display: block;
    padding: 1rem;
    text-decoration: none;
    color: #ef8354;
    border: 1px solid #ef8354;
    text-transform: capitalize;
    margin-top: 2rem;
    transition: all .3s;

    &:hover {
        background-color: #ef8354;
        color: #fff;
    }
`;

