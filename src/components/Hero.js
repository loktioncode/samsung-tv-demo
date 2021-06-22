import React from 'react';
import { Jumbotron, Container, Row, Col } from 'react-bootstrap';
import './Hero.css';


const styles = {
    heroText: {
        marginTop: '200px',
        marginRight: '300px',
        paddingRight: '350px'
    },
    h2: {
        fontWeight: 400,
        fontSize:'38px'
    },
    h3: {
        fontWeight: 200
    }

};

const Hero = (props) => {
    return (
        <React.Fragment>
            <Jumbotron className="hero">
                <Container >
                    <div style={styles.heroText}>
                        <h2 style={styles.h2}>Unbeatable Combination</h2>
                        <h3 style={styles.h3}>
                            Together, Xbox and Samsung deliver
                            a true 4K HDR gaming experience.
                        </h3>
                    </div>

                </Container>
            </Jumbotron>
        </React.Fragment>

    );
}

export default Hero;
