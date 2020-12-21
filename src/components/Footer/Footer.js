import React from 'react';
import {
  Container,
  About,
  Links,
  Contact,
  ContactEntry,
  Paragraph,
  LinkList,
  Heading,
  ListItem,
  ListLink,
  ContactContainer
} from './Footer.elements';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope, faPhone } from '@fortawesome/pro-light-svg-icons';

export default function Footer() {
  return (
    <Container>
      <About>
        <Heading>about us</Heading>
        <Paragraph>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus,
          itaque cupiditate? Ut dolore porro consequuntur laboriosam eius
          architecto ducimus, accusantium libero quos dolor, adipisci tempore
          cumque. Sequi voluptatum beatae cumque!
        </Paragraph>
      </About>
      <Links>
        <Heading>quick links</Heading>
        <LinkList>
            <ListItem><ListLink to="/">Home</ListLink></ListItem>
            <ListItem><ListLink to="/about">About</ListLink></ListItem>
            <ListItem><ListLink to="/services">Services</ListLink></ListItem>
            <ListItem><ListLink to="/portfolio">Portfolio</ListLink></ListItem>
            <ListItem><ListLink to="/contact">Contact</ListLink></ListItem>
        </LinkList>
      </Links>
      <Contact>
        <Heading>contact</Heading>
        <ContactContainer><FontAwesomeIcon icon={faMapMarkerAlt} fixedWidth /><ContactEntry>28 Jersey Rd, Bayswater, VIC 3153</ContactEntry></ContactContainer>
        <ContactContainer><FontAwesomeIcon icon={faEnvelope} fixedWidth /><ContactEntry>hamcohomes@gmail.com</ContactEntry></ContactContainer>
        <ContactContainer><FontAwesomeIcon icon={faPhone} fixedWidth /><ContactEntry>0409 077 462</ContactEntry></ContactContainer>
      </Contact>
    </Container>
  );
}
