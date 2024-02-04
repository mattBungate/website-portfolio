import { Container, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import defaultGif from '../../assets/gif/30C-1T-3D-1_25SR-50LIM.gif';
import C30T1D3SR125L50 from '../../assets/gif/30C-1T-3D-1_25SR-50LIM.gif';
import dGif from './deliveryVisualisations/20Canimations/20C-1T-2D-150SR-60LIM.gif';
import Legend from '../../assets/img/truckDroneLegend.png';

export const AnimationDisplayBox = () => {

    const [displayedGif, setDisplayedGif] = useState(defaultGif)
    
    function importAll(r) {
        console.log(r)
        let animations = {};
        r.keys().map((item, index) => { animations[item.replace('./deliveryVisualisations', '')] = r(item); });
        console.log(animations)
        return animations;
    }
    

    const animations = importAll(require.context('./deliveryVisualisations', true, /\.gif$/));
    

    const ParamRow = ( { param } ) => {
        return (
            <Row>
                <Col>
                <button onClick={handleNumCustomersIncrease}>
                    +
                </button>
                <button onClick={handleNumCustomersDecrease}>
                    -
                </button>
                </Col>
                <Col>
                    <h4>Customers: {numCustomers}</h4>
                </Col>
            </Row>
        )
    }

    const handleChangeGIF = () => {
        let gifURL = `C${numCustomers}T1D${numDrones}SR${speedRatio*100}L${droneLimit}`;
        setDisplayedGif(gifURL);
    }

    const maxCustomers = 25
    const minCustomers = 5
    const customerInterval = 5
    const [numCustomers, setNumCustomers] = useState(15)
    const handleNumCustomersDecrease = (e) => {
        if (numCustomers > minCustomers) {
            setNumCustomers((prevNumCustomers) => prevNumCustomers - customerInterval)
        }
    }

    const handleNumCustomersIncrease = (e) => {
        if (numCustomers < maxCustomers) {
            setNumCustomers((prevNumCustomers) => prevNumCustomers + customerInterval)
        }
    }

    const maxDrones = 3
    const minDrones = 1
    const droneInterval = 1
    const [numDrones, setNumDrones] = useState(1)
    const handleNumDronesDecrease = (e) => {
        if (numDrones > minDrones) {
            setNumDrones((prevNumDrones) => prevNumDrones - droneInterval)
            console.log(numDrones)
            handleChangeGIF()
        }
        console.log(numDrones)
    }

    const handleNumDronesIncrease = (e) => {
        if (numDrones < maxDrones) {
            setNumDrones((prevNumDrones) => prevNumDrones + droneInterval)
            handleChangeGIF()
        }
    }

    const maxSpeedRatio = 2
    const minSpeedRatio = 1
    const speedRatioInterval = 0.25
    const [speedRatio, setSpeedRatio] = useState(1.5)
    const handleSpeedRatioDecrease = (e) => {
        if (speedRatio > minSpeedRatio) {
            setSpeedRatio((prevSpeedRatio) => prevSpeedRatio - speedRatioInterval)
            handleChangeGIF()
        }
    }
    const handleSpeedRatioIncrease = (e) => {
        if (speedRatio < maxSpeedRatio) {
            setSpeedRatio((prevSpeedRatio) => prevSpeedRatio + speedRatioInterval)
            handleChangeGIF()
        }
    }

    const maxDroneLimit = 75
    const minDroneLimit = 30
    const droneLimitInterval = 15
    const [droneLimit, setDroneLimit] = useState(45)
    const handleDroneLimitDecrease = (e) => {
        if (droneLimit > minDroneLimit) {
            setDroneLimit((prevDroneLimit) => prevDroneLimit - droneLimitInterval)
            handleChangeGIF()
        }
    }
    const handleDroneLimitIncrease = (e) => {
        if (droneLimit < maxDroneLimit) {
            setDroneLimit((prevDroneLimit) => prevDroneLimit + droneLimitInterval)
            handleChangeGIF()
        }
    }

    return (
        <section className='animationDisplay'>
            <Container>
                <div className='animationDisplay-bx'>
                    <Row>
                        <Col xs={12} md={6}>
                            <img src={animations[`./${numCustomers}Canimations/${numCustomers}C-1T-${numDrones}D-${speedRatio*100}SR-${droneLimit}LIM.gif`]} alt='Truck Drone Delivery Animation' className='animationDisplay-img'/>
                        </Col>
                        <Col>
                            <h2>PARAMETERS</h2>
                            <Row>
                                <Col>
                                <button onClick={handleNumCustomersIncrease}>
                                    +
                                </button>
                                <button onClick={handleNumCustomersDecrease}>
                                    -
                                </button>
                                </Col>
                                <Col>
                                    <h4>Customers: {numCustomers}</h4>
                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                <button onClick={handleNumDronesIncrease}>
                                    +
                                </button>
                                <button onClick={handleNumDronesDecrease}>
                                    -
                                </button>
                                </Col>
                                <Col>
                                    <h4>Drones: {numDrones}</h4>
                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                <button onClick={handleSpeedRatioIncrease}>
                                    +
                                </button>
                                <button onClick={handleSpeedRatioDecrease}>
                                    -
                                </button>
                                </Col>
                                <Col>
                                    <h4>Speed Ratio: {speedRatio}</h4>
                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                <button onClick={handleDroneLimitIncrease}>
                                    +
                                </button>
                                <button onClick={handleDroneLimitDecrease}>
                                    -
                                </button>
                                </Col>
                                <Col>
                                    <h4>Drone Limit: {droneLimit}</h4>
                                </Col>
                            </Row>
                            <h2>Legend</h2>
                            <p><strong>Blue dots:</strong> Customers</p>
                            <p><strong>Red Square:</strong> Depot/Starting location</p>
                            <p><strong>Blue line:</strong> Truck</p>
                            <p><strong>Red line:</strong> Drone</p>
                        </Col>
                    </Row>
                </div>
            </Container>
        </section>
    )
}