import React from 'react';
//import logo from './logo.svg';
import { Container, Row, Col, Navbar, Nav, Button, Jumbotron } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import './App.css';

import logo from './img/logo_lateral.png';
import banner from './img/banner.png';
import teste from './img/teste.png';

function HomeScreen() {
    return (
        <div className="App">
            {/* <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
        </p>
                <p className="Texto-teste"> Olá meus amigosssssssss </p>
                <p> Olá meus amigosssssssss </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
        </a>
            </header> */}
            <Image sm={12} fluid className="Banner-img" src={banner} />
            <Container>
                <div class="ui two column grid">
                    <div class="column">
                        <div class="ui fluid image">
                            <div class="ui black ribbon label">
                                <i class="hotel icon"></i> Hotel
                            </div>
                            <img src={teste} />
                        </div>
                    </div>
                    <div class="column">
                        <div class="ui fluid image">
                            <div class="ui blue ribbon label">
                                <i class="spoon icon"></i> Food
                            </div>
                            <img src={teste} />
                        </div>
                    </div>
                </div>

            </Container>

        </div>
    );
}

export default HomeScreen;
