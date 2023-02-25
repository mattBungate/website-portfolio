import { Container, Col, Row, Tab, Nav, Image } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';
import truckDronePlot from '../assets/img/30-Customer-plot.png';
import truckDroneGif from '../assets/gif/30C-1T-3D-1_25SR-50LIM.gif';
import colorSharp2 from "../assets/img/color-sharp2.png";

export const Projects = () => {


    const projects = [
        {
            title: "Truck & Drone delivery",
            topic: "Research Operations",
            software: 'Python - Gurobi',
            description: "Use a combination of trucks and drones to deliver packages to customers in the fastest time possible",
            imgUrl: truckDronePlot,
            gifURL: truckDroneGif,
        },
    ];

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>A collection of projects focusing on Research Operations & Machine Learning</p>
                        {
                        projects.map((project, index) => {
                                            return (
                                                <ProjectCard
                                                    key={index}
                                                    {...project}
                                                    />
                                            )
                                        })
                        }
                    </Col>
                </Row>
            </Container>
            <img className='background-image-right' src={colorSharp2}></img>
        </section>
    )
}