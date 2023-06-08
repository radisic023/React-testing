import React from 'react';
import {Container, Row, Col, Card} from 'react-bootstrap';
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css'; 
import './Home.css';
/*import {Link} from "react-router-dom";*/

export function Home() {
    return (
        <>
        <header>
            <Container className='h-100'>
                <Row className='d-flex justify-content-center h-100'>
                    <Col xl={8} className='d-flex align-items-center'>
                        <div>
                            <h1 className='mb-3 white-text fw-bold fs-1'>Simple Hosting made by <strong>Radisic</strong></h1>
                            <p className='mb-0 light-text fw-normal fs-5'>Affordable hosting services with unrivalled performance</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </header>
        <section className='features mt-n3'>
            <Container>
                <Row>
                    <Col xl={4}>
                        <Card>
                            <Card.Body>
                                <div className='d-flex mb-3'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none"><g stroke="#cb2d3e" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" clip-path="url(#a)"><path d="M30 6.667H10A3.333 3.333 0 0 0 6.667 10v20A3.333 3.333 0 0 0 10 33.333h20A3.333 3.333 0 0 0 33.333 30V10A3.333 3.333 0 0 0 30 6.667Z"/><path d="M25 15H15v10h10V15ZM15 1.667v5M25 1.667v5M15 33.333v5M25 33.333v5M33.334 15h5M33.334 23.333h5M1.667 15h5M1.667 23.333h5"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h40v40H0z"/></clipPath></defs></svg>
                                    <h2 className='ms-2 mb-0 fs-3 fw-bold d-flex align-items-center text-black'>Enterprise Hardware</h2>
                                </div>
                                <p>We only use enterprise hardware to make sure your product is always up and running as smooth as possible.</p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={4}>
                        <Card>
                            <Card.Body>
                                <div className='d-flex mb-3'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#cb2d3e"><path d="M12 0C8.629 2.866 6.516 3 3 3v11.535c0 4.603 3.203 5.804 9 9.465 5.797-3.661 9-4.862 9-9.465V3c-3.516 0-5.629-.134-9-3zm-.548 15L8 11.638l1.237-1.239 2.215 2.123 4.382-4.475 1.238 1.238L11.452 15z"/></svg>
                                    <h2 className='ms-2 mb-0 fs-3 fw-bold d-flex align-items-center text-black'>DDoS Protection</h2>
                                </div>
                                <p>All of our services are equipped with automated DDoS protection. Keeping your server online is our priority.</p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={4}>
                        <Card>
                            <Card.Body>
                                <div className='d-flex mb-3'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#cb2d3e"><path d="m8 24 3-9H2L16 0l-3 9h9L8 24z"/></svg>
                                    <h2 className='ms-2 mb-0 fs-3 fw-bold d-flex align-items-center text-black'>Instant Setup</h2>
                                </div>
                                <p>No matter what service you buy from us, it will be instantly setup right after payment has been received.</p>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>

        <section className='offers py-5'>
            <div className='container-fluid container-custom'>
                <div className='row'>
                    <div className='col-lg-4'>
                        <div className='site_title mb-5'>
                            <h2>What we right now offering</h2>
                            <p className='mb-0'>Our current offer of game hosting is constantly evolving and adapting to the needs of our customers. We update our hosting and add new features such as cloud backups and an easy to use admin panel. Decide who has access to your server and what permissions they will receive.</p>
                        </div>
                    </div>
                    <div className='col-lg-8'>
                        <OwlCarousel items={3} className="owl-theme" loop nav margin={8}>  
                            <Card>
                                <Card.Body>Test</Card.Body>
                            </Card>
                            <Card>
                                <Card.Body>Test 2</Card.Body>
                            </Card>
                            <Card>
                                <Card.Body>Test 3</Card.Body>
                            </Card>
                        </OwlCarousel> 
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}