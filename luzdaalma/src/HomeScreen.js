import React from 'react';
//import logo from './logo.svg';
import { Container, Row, Col, Navbar, Nav, Button, Jumbotron } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import './App.css';

import logo from './img/logo_lateral.png';
import banner from './img/banner.png';
import luz from './img/luz.png';
import kardec from './img/kardec.png';
import tv from './img/tv.png';

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
            <Container className="Container-basico">
                    <div class="ui three column grid">
                        <div class="column">
                            <div class="ui fluid image">
                                <div class="ui green ribbon label">
                                    <i class="book icon"></i> Artigos
                            </div>
                                <img src={kardec} />
                                <div class="ui bottom attached label">Conheça o espiritismo</div>
                            </div>
                        </div>
                        <div class="column">
                            <div class="ui fluid image">
                                <div class="ui green ribbon label">
                                    <i class="bullhorn icon"></i> Eventos
                            </div>
                                <img src={luz} />
                                <div class="ui bottom attached label">Tudo sobre os atuais eventos</div>
                            </div>
                        </div>
                        <div class="column">
                            <div class="ui fluid image">
                                <div class="ui green ribbon label">
                                    <i class="play icon"></i> Tv Espírita
                            </div>
                                <img src={tv} />
                                <div class="ui bottom attached label">Acompanhe no Youtube</div>
                            </div>
                        </div>
                    </div>
            </Container>

        </div>
    );
}

export default HomeScreen;
