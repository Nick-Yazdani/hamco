import React from 'react'
import { Container, Heading, Button } from './Landing.elements'
import StyledMainBackground from "../../MainBackground/MainBackground"


const Landing = ({ heading, text }) => {
    return (
        <StyledMainBackground>
            <Container>
                <Heading>{heading}</Heading>
                <Button to="/about">{text}</Button>
            </Container>
        </StyledMainBackground>
    )
}

export default Landing;