import React from 'react'
import { Container, Image, Button, Anchor } from './Card.elements';

export default function Card({ src, alt, btnText, url }) {
    return (
        <Container>
            <Anchor to="/portfolio"><Image src={src} alt={alt} /></Anchor>
            <Button to="/portfolio">see more</Button>
        </Container>
    )
}
