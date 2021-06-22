import React from 'react';
import './FindRetailer.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import FeaturedImage from '../images/Feature-800x450.jpg';



const styles = {
    h6: {
        fontWeight: 300,
        fontSize: '28px',
        color: '#000',
        textAlign: 'left',

    },
    p: {
        fontWeight: 200,
        fontSize: '16px',
        textAlign: 'left',
    },
    image: {
        paddingTop: '50px',
    },
    spacing: {
        paddingTop: '100px',
    },
    col:{
        paddingTop:'120px',
        marginLeft: '0px',
    }

};

const FindRetailer = (props) => {
    return (
        <React.Fragment>

            <div className="retailer">
                <Container>
                    <Row className="d-flex" style={styles.spacing}>

                        <Col lg={4} style={styles.col} sm>
                            <h6 style={styles.h6}>Enjoy truly immersive gaming</h6>
                            <p style={styles.p}> Play on the world’s most powerful console and the
                                high-performance Samsung QLED TV </p>

                            <Button variant="success">Find a Retailer</Button>{' '}
                        </Col>

                        <Col lg={6} className='align-self-end' >
                            <img src={FeaturedImage} alt="xbox blockbusters on samsung tv" width='800px' height='400px' />
                        </Col>

                    </Row>
                </Container>
            </div>
        </React.Fragment>

    );
}

export default FindRetailer;
