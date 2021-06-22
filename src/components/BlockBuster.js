import React from 'react';
import {Row, Col } from 'react-bootstrap';
import './BlockBuster.css';
import displayImage from '../images/1250x600.jpg';
import consoleImage from '../images/XboxOneX.jpg';
import FourKImage from '../images/4K.png';
import HDRImage from '../images/HDR.png';
import EnhancedImage from '../images/X1Xenhanced.png';



const styles = {
    h6: {
        fontWeight: 300,
        fontSize: '32px',
        color: "#fff"
    },
    h4: {
        paddingTop: '25vh',
        fontWeight: 300,
        fontSize: '32px',
        color: "#fff"
    },
    p: {
        fontWeight: 200,
        fontSize: '18px',
        color: "#fff",
        textAlign: 'center',
        paddingLeft: "250px",
        paddingRight: "250px",
        paddingBottom: "25vh"
    },
    image: {
        paddingTop: '25px',
    }

};

const BlockBuster = (props) => {
    return (
        <React.Fragment>
            <div className="bg">
                <h5 style={styles.h4} className="title" sm={2}>The biggest blockbusters play better on Xbox One X and Samsung</h5>
                <Row className="justify-content-md-center">
                    <Col xs={12} sm={8} md={8} >
                        <img src={displayImage} alt="xbox blockbusters on samsung tv" width='100%' style={styles.image} />
                    </Col>
                    <Col xs={12} sm={8} md={8}>
                        <img src={consoleImage} alt="xbox blockbusters on samsung tv" width='70%' height='300px' />
                    </Col>
                    <Row >
                        <Col >
                            <img src={HDRImage} alt="xbox blockbusters on samsung tv" width='250px' height='150px' />
                        </Col>
                        <Col >
                            <img src={FourKImage} alt="xbox blockbusters on samsung tv" width='250px' height='150px' />

                        </Col>
                        <Col >
                            <img src={EnhancedImage} alt="xbox blockbusters on samsung tv" width='250px' height='150px' />

                        </Col>
                    </Row>
                </Row>
                <h6 style={styles.h6}>Look for the feature icons</h6>
                <p style={styles.p} className='ml-auto detail'>
                    All games look and play great on Xbox One X. But select titles are optimised to take advantage of the world’s most powerful console.
                    These games are Xbox One X Enhanced
                </p>
            </div>
        </React.Fragment>

    );
}

export default BlockBuster;
