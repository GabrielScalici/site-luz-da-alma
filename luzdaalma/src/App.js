import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Navbar, Nav, Image } from 'react-bootstrap';

//TELAS
import ArtigosScreen from './ArtigosScreen';
import HomeScreen from './HomeScreen';

//IMAGENS
import logo from './img/logo_lateral.png';

class App extends Component {

    render() {
        return (
            <Router>
                <div>
                    <Navbar bg="white" variant="light">
                        <Navbar.Brand href="#home">
                            <Image className="Logo-nav" src={logo} />
                        </Navbar.Brand>
                        <Nav className="mr-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="/artigosscreen">Artigos</Nav.Link>
                            <Nav.Link href="#eventos">Eventos</Nav.Link>
                            <Nav.Link href="#tv">TV Espírita</Nav.Link>

                        </Nav>
                        {/* <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-primary">Search</Button>
                </Form> */}
                    </Navbar>
                    <Switch>
                        <Route exact path='/' component={HomeScreen} />
                        <Route path='/artigosscreen' component={ArtigosScreen} />
                    </Switch>
                </div>

            </Router>
        );
    }
}

export default App;
