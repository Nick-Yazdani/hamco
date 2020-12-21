import React, { Fragment } from 'react';
import { createGlobalStyle } from 'styled-components';
import { Navbar, Footer } from '../index';
import "fontsource-montserrat"

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  body {
      font-family: "Montserrat", sans-serif;
  }
  `

const Layout = ({ children }) => {
    return (
        <Fragment>
            <GlobalStyle />
            <Navbar />
            {children}
            <Footer />
        </Fragment>
    )
}

export default Layout