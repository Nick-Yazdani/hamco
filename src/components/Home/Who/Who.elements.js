import styled from 'styled-components';

import bgImage from '../../../images/swatch_image.jpg';
import maskImage from '../../../svgs/swatch.svg';

export const WhoSection = styled.section`
  display: flex;
  padding: 2.5rem;
`;

export const Column = styled.section`
  display: flex;
  flex-direction: column;
  width: 50%;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const Square = styled.div`
  background-color: transparent;
  padding: 16rem;

  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${bgImage});

  mask-image: url(${maskImage});
  mask-repeat: no-repeat;
  mask-position: center;
  mask-size: 70vmin;
  z-index: 100;
`;

export const Title = styled.h2`
  font-size: 2rem;
  padding: 1rem;
`

export const SmallHeading = styled.h5`
  padding: .5rem 1rem;
  font-size: 1.3rem;
`

export const Paragraph = styled.p`
  padding: 1rem;
  line-height: 1.7rem;
`

export const SubColumn = styled.div`
  display: flex;
  flex-direction: column;
`

export const Container = styled.div`
  display: flex;
`

export const SquareBorder = styled.div`
    position: absolute;
    border: 0.5rem solid #ef8354;
    padding: 9rem;
    top: 50%; 
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 100;
`