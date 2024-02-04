import { Col, Row, Container, Image } from 'react-bootstrap';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { SoftwareTag } from '../util/SoftwareTag';

export const ProjectCard = ({ title, description, topic, software, imgUrl, gifURL }) => {

    const [isHovering, setIsHovering] = useState(false);

    const handleMouseEnter = (e) => {
        setIsHovering(true);
    }
    const handleMouseLeave = (e) => {
        setIsHovering(false);
    }
        return (
            <Link exact to='/truck-drone-delivery' style={{ textDecoration: 'none' }}>
            <Container onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <div className='projectCard-bx'>
                    <Row>
                        <Col xs={12} md={6}>
                            <h4>{title}</h4>
                            <br></br>
                            <h5>{topic}</h5>
                            <br></br>
                            <span>{description}</span>
                            <br></br>
                            <br></br>
                        </Col>
                        <Col>
                        <Image className='projectCard-img' src={isHovering ? gifURL : imgUrl }/>
                        </Col>
                    </Row>
                </div>
            </Container>
            </Link>
        );
    
}