import React, { Component } from 'react';
//import logo from './logo.svg';
import { Container, Row, Col, Navbar, Nav, Form, FormControl, Button, Card, Transformation, Carousel } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import './App.css';

import logo from './img/logo_branco.png';
import banner from './img/banner.png';
import banner_jornal from './img/banner_jornal.png';
import banner_biblia from './img/banner_biblia.png';

class NosScreen extends Component {

    render() {
        return (
            <div>
                <Container className="Container-basico">
                    <Image sm={8} fluid className="Banner-img" src={logo} />
                    <h1 class="ui header">Acompanhe nas redes sociais</h1>
                    <Row className="Inside-container-basico ">
                        <button className="ui facebook button Component-metric">
                            <i className="facebook icon"></i>
                            Facebook
                        </button>

                        <button className="ui instagram button Component-metric">
                            <i className="instagram icon"></i>
                            Instagram
                        </button>

                        <button className="ui youtube button Component-metric">
                            <i className="youtube icon"></i>
                            YouTube
                        </button>
                    </Row>
                </Container>

                <div className="Container-basico2">
                    
                    <Row className="Inside-container-basico ">
                        
                    </Row>
                </div>

            </div>

        );
    }
}

export default NosScreen;
