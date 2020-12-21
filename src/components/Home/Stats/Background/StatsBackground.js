import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';

import BackgroundImage from 'gatsby-background-image';

const StatsBackground = ({ className, children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        file(relativePath: { eq: "cover-two.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
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

const StyledStatsBackground = styled(StatsBackground)`
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background: linear-gradient(to right, rgba(79, 93, 117, .9) 0%, rgba(79, 93, 117, .9) 100%);
  opacity: 1 !important;
  background-attachment: fixed;
`;

export default StyledStatsBackground;
