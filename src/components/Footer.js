import React from 'react';
import './Footer.css';
import { Container, Row, Col, Image } from 'react-bootstrap';


const styles = {
    h6: {
        fontWeight: 300,
        fontSize: '32px',
        color: "#fff"
    },
    h4: {
        paddingTop: '25vh',
        fontWeight: 300,
        fontSize: '38px',
        color: "#fff"
    },
    p: {
        fontWeight: 200,
        fontSize: '18px',
        color: "#fff",
        textAlign: 'center',
        paddingLeft: "250px",
        paddingRight: "250px"
},
    image: {
        paddingTop: '25px',
    }

};

const Footer = (props) => {
    return (
        <React.Fragment>
            <div style={styles.titleText} className="bg">

            </div>
        </React.Fragment>

    );
}

export default Footer;
