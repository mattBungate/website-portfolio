
import { Container, Row, Col } from 'react-bootstrap';

export const SoftwareTag = ({ name, imgURL }) => {
    return (
        <div className='softwareTag-bx'>
            <Container fluid>
                <Row xs={3}>
                    <Col xs={1}>
                        <img width={64} height={64} src={imgURL} className='softwareTag-img' alt='Software tag image'/>
                    </Col>
                    <Col xs={2}>
                        <span>{name}</span>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}