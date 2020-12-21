import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

export const Container = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
`

export const Heading = styled.h1`
  color: #fff;
  font-size: 2.7rem;
  padding: 1rem;

  @media only screen and (max-width: 1000px) {
      & {
        font-size: 2rem;
      }
  };
`;

export const Button = styled((props) => <Link {...props} />)`
font-size: .8rem;
display: inline-block;
padding: 1rem 2rem;
border: 1px solid #ef8354;
text-transform: uppercase;
text-decoration: none;
color: #ef8354;
transition: all .3s;

&:hover {
  background-color: #ef8354;
  color: #fff;
}

@media only screen and (max-width: 1000px) {
      & {
        font-size: .6rem;
        padding: .7rem, 1.7rem;
      }
  };
`;