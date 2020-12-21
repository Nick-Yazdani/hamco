import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';

import BackgroundImage from 'gatsby-background-image';

const MainBackground = ({ className, children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        file(relativePath: { eq: "cover.jpg" }) {
          childImageSharp {
            fluid(quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  );
  
  const imageData = data.file.childImageSharp.fluid;

  return (
    <BackgroundImage
      Tag="section"
      className={className}
      fluid={imageData}
      backgroundColor={`#040e18`}
    >
      {children}
    </BackgroundImage>
  );
};

const StyledMainBackground = styled(MainBackground)`
  height: 100vh;
  background: linear-gradient(to right, rgba(79, 93, 117, .9) 0%, rgba(79, 93, 117, .9) 100%);
  opacity: 1 !important;
  width: 100%;
  background-position: center;
  background-repeat: repeat-y;
  background-size: cover;
  background-attachment: fixed;
`;

export default StyledMainBackground;
