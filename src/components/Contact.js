import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import contactImg from '../assets/img/contact-img.svg';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


export const Contact = () => {
    const form = useRef();

    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        message: ''
    }

    const [messageStatus, setMessageStatus] = useState('')

    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('Send');
    const [status, setStatus] = useState({});

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setButtonText('Sending...');

        emailjs.sendForm('service_cbu1dc8', 'template_dmszr3q', form.current, 'jUvG4vustSDhtIUsa')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        setMessageStatus('Message Successfully Sent!')
        setFormDetails(formInitialDetails)
        setButtonText("Send")
    };

    return (
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col med={6}>
                        <img src={contactImg} alt="Contact Us"/>
                    </Col>
                    <Col md={6}>
                        <h2>Get In Touch</h2>
                        <form ref={form} onSubmit={handleSubmit}>
                            <Row>
                                <Col sm={6} className="px-1">
                                    <input type="text" name="user_first_name" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="text" name="user_last_name" value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)} />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="email" name="user_email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="text" name="user_company" value={formDetails.company} placeholder="Company" onChange={(e) => onFormUpdate('company', e.target.value)} />
                                </Col>
                                <Col className="Message-box">
                                    <textarea row="6" name="message" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)} />
                                    <button type="submit"><span>{buttonText}</span></button>
                                </Col>
                            </Row>
                        </form>
                        <h3>
                            <span>{messageStatus}</span> 
                        </h3>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}