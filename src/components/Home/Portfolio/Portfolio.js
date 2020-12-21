import React from 'react';
import Card from '../../Card/Card';
import { PortfolioSection, Title, CardContainer } from './Portfolio.elements';

import HouseOne from '../../../images/house_one.jpg';
import HouseTwo from '../../../images/house_two.jpg';
import HouseThree from '../../../images/house_three.jpg';

const PortfolioData = [
  {
    buttonText: 'read more',
    imgSrc: HouseOne,
    imgAlt: 'Picture of a modern house',
    link: '/portfolio',
  },
  {
    buttonText: 'read more',
    imgSrc: HouseTwo,
    imgAlt: 'Picture of a modern house',
    link: '/portfolio',
  },
  {
    buttonText: 'read more',
    imgSrc: HouseThree,
    imgAlt: 'Picture of a modern house',
    link: '/portfolio',
  },
  {
    buttonText: 'read more',
    imgSrc: HouseOne,
    imgAlt: 'Picture of a modern house',
    link: '/portfolio',
  },
  {
    buttonText: 'read more',
    imgSrc: HouseTwo,
    imgAlt: 'Picture of a modern house',
    link: '/portfolio',
  },
  {
    buttonText: 'read more',
    imgSrc: HouseThree,
    imgAlt: 'Picture of a modern house',
    link: '/portfolio',
  },
];

export default function Portfolio() {
  return (
    <PortfolioSection>
      <Title>Our Design Portfolio</Title>
      <CardContainer>
        {PortfolioData.map((element) => {
          return (
            <Card
              btnText={element.buttonText}
              src={element.imgSrc}
              alt={element.imgAlt}
              url={element.link}
            />
          );
        })}
      </CardContainer>
    </PortfolioSection>
  );
}
