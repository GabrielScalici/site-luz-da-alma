import React, { Component } from 'react';
//import logo from './logo.svg';
import { Container, Row, Col, Navbar, Nav, Form, FormControl, Button, Card, Transformation, Carousel } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import './App.css';

import logo from './img/logo_lateral.png';
import banner from './img/banner.png';
import banner_jornal from './img/banner_jornal.png';
import banner_biblia from './img/banner_biblia.png';

class ArtigosScreen extends Component {

    render() {
        return (
            <div>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={banner_jornal}
                            alt="Saiba tudo"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={banner_biblia}
                            alt="Conheça"
                        />

                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={banner}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel> 
            </div>

        );
    }
}

export default ArtigosScreen;

// function ArtigosScreen() {
//     return (
//         <div className="App">
//             {/* <header className="App-header">
//                 <img src={logo} className="App-logo" alt="logo" />
//                 <p>
//                     Edit <code>src/App.js</code> and save to reload.
//         </p>
//                 <p className="Texto-teste"> Olá meus amigosssssssss </p>
//                 <p> Olá meus amigosssssssss </p>
//                 <a
//                     className="App-link"
//                     href="https://reactjs.org"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                 >
//                     Learn React
//         </a>
//             </header> */}
//             <Carousel
//                 //activeIndex={index}
//                 //direction={direction}
//                 onSelect={this.handleSelect}
//             >
//                 <Carousel.Item>
//                     <img
//                         className="d-block w-100"
//                         src="holder.js/800x400?text=First slide&bg=373940"
//                         alt="First slide"
//                     />
//                     <Carousel.Caption>
//                         <h3>First slide label</h3>
//                         <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//                     </Carousel.Caption>
//                 </Carousel.Item>
//                 <Carousel.Item>
//                     <img
//                         className="d-block w-100"
//                         src="holder.js/800x400?text=Second slide&bg=282c34"
//                         alt="Third slide"
//                     />

//                     <Carousel.Caption>
//                         <h3>Second slide label</h3>
//                         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//                     </Carousel.Caption>
//                 </Carousel.Item>
//                 <Carousel.Item>
//                     <img
//                         className="d-block w-100"
//                         src="holder.js/800x400?text=Third slide&bg=20232a"
//                         alt="Third slide"
//                     />

//                     <Carousel.Caption>
//                         <h3>Third slide label</h3>
//                         <p>
//                             Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//             </p>
//                     </Carousel.Caption>
//                 </Carousel.Item>
//             </Carousel>
//             <Container>
//             </Container>


//         </div>
//     );
// }

// export default ArtigosScreen;
