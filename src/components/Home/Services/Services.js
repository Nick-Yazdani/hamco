import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  ServicesSection,
  Title,
  Paragraph,
  GridContainer,
  SubHeading,
  SubParagraph,
  SubContainer,
  DirtyCenter
} from './Services.elements';

export default function Services({
  sectionTitle,
  sectionMainParagraph,
  servicesData,
}) {
  return (
    <ServicesSection>
      <Title>{sectionTitle}</Title>
      <Paragraph>{sectionMainParagraph}</Paragraph>
      <GridContainer>
        {servicesData.map((service) => {
          return (
            <Fragment>
              <SubContainer right>
                <SubHeading>{service.title_left}</SubHeading>
                <SubParagraph>{service.details_left}</SubParagraph>
              </SubContainer>
              <DirtyCenter>
              <FontAwesomeIcon
                icon={service.icon_left}
                color={`#ef8354`}
                size={`3x`}
                fixedWidth
              />
              </DirtyCenter>
              <DirtyCenter>
              <FontAwesomeIcon
                icon={service.icon_right}
                color={`#ef8354`}
                size={`3x`}
                fixedWidth
              />
              </DirtyCenter>
              <SubContainer>
                <SubHeading>{service.title_right}</SubHeading>
                <SubParagraph>{service.details_right}</SubParagraph>
              </SubContainer>
            </Fragment>
          );
        })}
      </GridContainer>
    </ServicesSection>
  );
}
