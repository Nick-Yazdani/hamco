import React from 'react';
import {
  StyledSlider,
  StyledSlide,
  StyledDot,
  StyledImage,
  StyledCarouselProvider,
  DotContainer,
  Overlay,
  Title,
  Paragraph,
  Name,
  Position,
  DetailsContainer,
  Dash
} from './Testimonial.elements';
import HouseOne from '../../../images/house_one.jpg';
import HouseTwo from '../../../images/house_two.jpg';
import HouseThree from '../../../images/house_three.jpg';

import 'pure-react-carousel/dist/react-carousel.es.css';

export default function Testimonial({
  title,
  reviewOne,
  nameOne,
  positionOne,
  reviewTwo,
  nameTwo,
  positionTwo,
  nameThree,
  positionThree,
  reviewThree,
}) {
  return (
    <section>
      <Title>{title}</Title>
      <StyledCarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={45}
        totalSlides={3}
      >
        <StyledSlider>
          <StyledSlide index={0}>
            <Overlay>
              <StyledImage src={HouseOne} isBgImage={true} />
            </Overlay>
            <DetailsContainer>
              <Paragraph>{reviewOne}</Paragraph>
              <Name>{nameOne}</Name>
              <Dash />
              <Position>{positionOne}</Position>
            </DetailsContainer>
          </StyledSlide>
          <StyledSlide index={1}>
            <Overlay>
              <StyledImage src={HouseTwo} isBgImage={true} />
            </Overlay>
            <DetailsContainer>
              <Paragraph>{reviewTwo}</Paragraph>
              <Name>{nameTwo}</Name>
              <Dash />
              <Position>{positionTwo}</Position>
            </DetailsContainer>
          </StyledSlide>
          <StyledSlide index={2}>
            <Overlay>
              <StyledImage src={HouseThree} isBgImage={true} />
            </Overlay>
            <DetailsContainer>
              <Paragraph>{reviewThree}</Paragraph>
              <Name>{nameThree}</Name>
              <Dash />
              <Position>{positionThree}</Position>
            </DetailsContainer>
          </StyledSlide>
        </StyledSlider>
        <DotContainer>
          <StyledDot slide={0} />
          <StyledDot slide={1} />
          <StyledDot slide={2} />
        </DotContainer>
      </StyledCarouselProvider>
    </section>
  );
}
