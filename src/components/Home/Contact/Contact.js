import React from 'react'
import { Form, Label, Input, Container, Row, Col, MessageText, Title, Highlight, Button} from './Contact.elements';

export default function Contact() {
    return (
        <section>
            <Form>
                <Container>
                    <Row><Title><Highlight>Send</Highlight> us a <Highlight>message</Highlight></Title></Row>
                    <Row>
                        <Col>
                        <Label htmlFor="name"></Label>
                            <Input id="name" name="name" type="text" placeholder="Name" />
                        </Col>
                        <Col>
                        <Label htmlFor="email"></Label>
                            <Input id="email" name="email" type="email" placeholder="Email" />
                        </Col>
                    </Row>
                    <Row>
                        <MessageText placeholder="Message..." />
                    </Row>
                    <Row>
                        <Button>send</Button>
                    </Row>
                </Container>
            </Form>
        </section>
    )
}
