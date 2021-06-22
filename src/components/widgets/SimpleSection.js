import React from 'react';
import { Jumbotron, Container, Row, Col, Image} from 'react-bootstrap';
import './Visuals.css';


const styles = {
    titleText: {
        marginTop: '10vh'
    },
    h4: {
        fontWeight: 400,
        fontSize: '38px'
    },
    p: {
        fontWeight: 200,
        fontSize: '18px'
    },
    img: {
        Top: 8
    }

};

const Section = (props) => {
    return (
        <React.Fragment>
            <Container className="visuals" >
                <div style={styles.titleText}>
                    <h4 style={styles.h4}>{props.title}</h4>
                    <p style={styles.p}>
                       {props.paragraph}
                    </p>
                    <img src={props.displayImage} alt="xbox visuals represanatation" width='100%' />
                </div>

            </Container>
        </React.Fragment>

    );
}

export default Section;
