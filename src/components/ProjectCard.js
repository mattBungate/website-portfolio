import { Col, Row, Container, Image } from 'react-bootstrap';
import { useState } from 'react';
import { render } from 'react-dom';

export const ProjectCard = ({ title, description, topic, software, imgUrl, gifURL }) => {

    const [isHovering, setIsHovering] = useState(false);

    const handleMouseEnter = (e) => {
        setIsHovering(true);
    }
    const handleMouseLeave = (e) => {
        setIsHovering(false);
    }
        return (
            <Container onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <div className='projectCard-bx'>
                    <Row>
                        <Col>
                            <h4>{title}</h4>
                            <h5>{topic}</h5>
                            <p>
                                <span>{description}</span>
                            </p>
                        </Col>
                        <Col>
                        <Image className='projectCard-img' src={isHovering ? gifURL : imgUrl }/>
                        <h5>Software section</h5>
                        </Col>
                    </Row>
                </div>
            </Container>
        );
    
}