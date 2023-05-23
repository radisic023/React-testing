import React from 'react';
import {Container, Row, Col, Card} from 'react-bootstrap';
import {Link} from "react-router-dom";

export function Home() {
    return (
        <>
        <div className='home'>
            <Container>
            <Row>
                <Col md={6}>
                <Card>
                    <Card.Img variant="top" src="https://via.placeholder.com/350x150" />
                    <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>lorem  input text </Card.Text>
                    <Link to='./minecraft' className='btn btn-primary'>Go to Minecraft</Link>
                    </Card.Body>
                </Card>
                </Col>
                <Col md={6}>
                <Card>
                    <Card.Img variant="top" src="https://via.placeholder.com/350x150" />
                    <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>lorem  input text </Card.Text>
                    <Link to='./about' className='btn btn-primary'>Go to About us</Link>
                    </Card.Body>
                </Card>
                </Col>
            </Row>
            </Container>
        </div>
        </>
    )
}