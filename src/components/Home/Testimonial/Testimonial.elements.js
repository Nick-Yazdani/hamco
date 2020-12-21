import { Slider, Slide, Dot, Image, CarouselProvider } from 'pure-react-carousel';
import styled from 'styled-components';
import React from 'react'

export const Title = styled.h2`
    text-align: center;
    font-size: 2.2rem;
`

export const StyledSlider = styled((props) => <Slider {...props} />)`
`;

export const StyledCarouselProvider = styled((props) => <CarouselProvider {...props} />)`
    position: relative;
    padding: 2rem 0rem;
`;

export const StyledSlide = styled((props) => <Slide {...props} />)`
   
`;

export const StyledDot = styled((props) => <Dot {...props} />)`
    padding: .3rem;
    border: none;
    border-radius: 10rem;
    outline: none;
    &:not(:last-child) {
        margin-right: .5rem;
    }
`;

export const StyledImage = styled((props) => <Image {...props} />)`
    z-index: -2;
`

export const Overlay = styled.div`
    position: relative;
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 1;
      background-image: linear-gradient(to right, rgba(79, 93, 117, .9) 0%, rgba(79, 93, 117, .9) 100%);
      opacity: 1 !important;
    }
`

export const DotContainer = styled.div`
    position: absolute;
    bottom: 10%;
    left: 50%;
    transform: translateX(-50%)
`
export const Paragraph = styled.p`
    font-size: 1.5rem;
`

export const Name = styled.span`
display: inline-block;
font-size: 1rem;
`

export const Position = styled.span`
display: inline-block;
font-size: 1rem;
`

export const DetailsContainer = styled.div`
    text-align: center;
    color: #fff;
    font-size: 1.5rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1000;
`

export const Dash = styled.span`
    background-color: #fff;
    height: 1px;
    width: 5px;
    display: inline-block;
    margin-bottom: 3.5px;
    margin-left: .5rem;
    margin-right: .5rem;

`