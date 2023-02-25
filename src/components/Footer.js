import { Container, Row, Col } from 'react-bootstrap';
import logo from '../assets/img/logo.svg';
import linkedInIcon from '../assets/img/nav-icon1.svg';
import githubIcon from '../assets/img/github.svg';

export const Footer = () => {
    return (
        <footer className='footer'>
            <Container>
                <Row className="align-item-center">
                    <Col sm={6}>
                        <img src={logo} alt='Matt' />
                    </Col>
                    <Col sm={6} className='text-center text-sm-end'>
                        <div className='social-icon'>
                            <a href="https://www.linkedin.com/in/matthew-bungate/" target="_blank"><img src={linkedInIcon} /></a>
                            <a href="https://www.github.com/mattBungate" target="_blank"><img src={githubIcon} /></a>
                        </div>
                        <p> CopyRight 2022. All Right Reserved Matthew Bungate</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}