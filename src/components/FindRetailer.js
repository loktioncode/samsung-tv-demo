import React from 'react';
import './FindRetailer.css';
import { Container, Row, Col, Image } from 'react-bootstrap';


const styles = {
    h6: {
        fontWeight: 300,
        fontSize: '32px',
        color: '#000'
    },
    p: {
        fontWeight: 200,
        fontSize: '18px',
        textAlign: 'center',
        paddingTop:'25vh',
        paddingLeft: "250px",
        paddingRight: "250px"
    },
    image: {
        paddingTop: '25px',
    }

};

const FindRetailer = (props) => {
    return (
        <React.Fragment>
            <div className="retailer">
                <p style={styles.p} className='ml-auto'>
                    All games look and play great on Xbox One X. But select titles are optimised to take advantage of the world’s most powerful console.
                    These games are Xbox One X Enhanced
                </p>
            </div>
        </React.Fragment>

    );
}

export default FindRetailer;
