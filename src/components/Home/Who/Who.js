import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserHardHat, faPaintRoller } from '@fortawesome/pro-duotone-svg-icons';
import { Column, Square, WhoSection, Title, Paragraph, Container, SubColumn, SmallHeading, SquareBorder } from './Who.elements';

const Who = ({ title, mainParagraph, smhOne, smpOne, smhTwo, smpTwo }) => {
  return (
    <WhoSection>
      <Column>
        <SquareBorder />
        <Square />
      </Column>
      <Column>
        <Title>{title}</Title>
        <Paragraph>{mainParagraph}</Paragraph>
        <Container>
            <FontAwesomeIcon icon={faUserHardHat} color={`#4f5d75`} size={`5x`} fixedWidth />
            <SubColumn>
                <SmallHeading>{smhOne}</SmallHeading>
                <Paragraph>{smpOne}</Paragraph>
            </SubColumn>
        </Container>
        <Container>
            <FontAwesomeIcon icon={faPaintRoller} color={`#4f5d75`} size={`5x`} fixedWidth />
            <SubColumn>
                <SmallHeading>{smhTwo}</SmallHeading>
                <Paragraph>{smpTwo}</Paragraph>
            </SubColumn>
        </Container>
      </Column>
    </WhoSection>
  );
};

export default Who;
