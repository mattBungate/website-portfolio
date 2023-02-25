import { Container, Row, Col } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import researchOpsImg from "../assets/img/research-operations-logo.png";

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you
            breakpoint: { max:4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min:1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            itmes: 2
        },
        mobile: {
            breakpoint: {max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className="skill" id="skills">
            <Container>
                
                <Row>
                    <Col>
                    
                        <div className="skill-bx">
                            <h2>TOPICS</h2>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src={researchOpsImg} alt="Image" />
                                    <h5>Research Operations</h5>
                                </div>
                                <div className="item">
                                    <img src='' alt="Image" />
                                    <h5>Machine Learning</h5>
                                </div>
                                <div className="item">
                                    <img src='' alt="Image" />
                                    <h5>Tutoring</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}