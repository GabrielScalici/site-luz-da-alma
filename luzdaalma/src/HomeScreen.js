import React from 'react';
//import logo from './logo.svg';
import { Container, Row, Col, Card } from 'react-bootstrap';
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
                    <Col sm={12} md={4} class="">
                        <div class="ui fluid image">
                            <div class="ui green ribbon label">
                                <i class="book icon"></i> Artigos
                            </div>
                            <img src={kardec} />
                            <div class="ui bottom attached label">Conheça o espiritismo</div>
                        </div>
                    </Col>
                    <Col sm={12} md={4} class="">
                        <div class="ui fluid image">
                            <div class="ui green ribbon label">
                                <i class="bullhorn icon"></i> Eventos
                            </div>
                            <img src={luz} />
                            <div class="ui bottom attached label">Tudo sobre os atuais eventos</div>
                        </div>
                    </Col>
                    <Col sm={12} md={4} class="">
                        <div class="ui fluid image">
                            <div class="ui green ribbon label">
                                <i class="play icon"></i> Tv Espírita
                            </div>
                            <img src={tv} />
                            <div class="ui bottom attached label">Acompanhe no Youtube</div>
                        </div>
                    </Col>
                </div>
                <div class="ui divider"></div>
                <div>
                </div>

            </Container>

            <div className="Linha-cinza Container-center" >
                <Row sm={12} xl={12} >
                    <Col sm={12} md={6}>
                        <Card className="bg-dark text-white ">
                            <Card.Img src={tv} alt="Card image" className="Img-card-destaque" />
                            <Card.ImgOverlay>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This content is a little bit longer.
                            </Card.Text>
                                <Card.Text>Last updated 3 mins ago</Card.Text>
                            </Card.ImgOverlay>
                        </Card>
                    </Col>

                    <Col sm={12} md={6} className="Container-center">

                        <Row className="Container-center">
                            <div class="ui card Card-pequeno">
                                <div class="content">
                                    <div class="header">Cute Dog</div>
                                    <div class="meta">
                                        <span>2 days ago</span>
                                        <a>Animals</a>
                                    </div>
                                    <p>Aqui vai um texta ens nfjn fkjsnd kjfns jkdfn skjdfnj ksdnf jksdnfjks nfjksnjfskjdfn jkdsnfkjsnfjksnj kfnskjfnsjkdnfjks ndf</p>
                                </div>
                            </div>
                        </Row>
                        <Row className="Container-center">
                            <div class="ui card Card-pequeno">
                                <div class="content">
                                    <div class="header">Cute Dog</div>
                                    <div class="meta">
                                        <span>2 days ago</span>
                                        <a>Animals</a>
                                    </div>
                                    <p>Aqui vai um texta ens nfjn fkjsnd kjfns jkdfn skjdfnj ksdnf jksdnfjks nfjksnjfskjdfn jkdsnfkjsnfjksnj kfnskjfnsjkdnfjks ndf</p>

                                </div>
                            </div>
                        </Row>
                        <Row className="Container-center">
                            <div class="ui card Card-pequeno">
                                <div class="content">
                                    <div class="header">Cute Dog</div>
                                    <div class="meta">
                                        <span>2 days ago</span>
                                        <a>Animals</a>
                                    </div>
                                    <p>Aqui vai um texta ens nfjn fkjsnd kjfns jkdfn skjdfnj ksdnf jksdnfjks nfjksnjfskjdfn jkdsnfkjsnfjksnj kfnskjfnsjkdnfjks ndf</p>

                                </div>
                            </div>
                        </Row>
                    </Col>
                </Row>
            </div>
            <div className="Container-branco">
                <Row>
                    <Col sm={12} md={3} className="Container-center">
                        <Row className="Container-center">
                            <div class="ui card Card-pequeno">
                                <div class="content">
                                    <div class="header">Cute Dog</div>
                                    <div class="meta">
                                        <span>2 days ago</span>
                                        <a>Animals</a>
                                    </div>
                                    <p>Aqui vai um texta ens nfjn fkjsnd kjfns jkdfn skjdfnj ksdnf jksdnfjks nfjksnjfskjdfn jkdsnfkjsnfjksnj kfnskjfnsjkdnfjks ndf</p>
                                </div>
                            </div>
                        </Row>
                        <Row className="Container-center">
                            <div class="ui card Card-pequeno">
                                <div class="content">
                                    <div class="header">Cute Dog</div>
                                    <div class="meta">
                                        <span>2 days ago</span>
                                        <a>Animals</a>
                                    </div>
                                    <p>Aqui vai um texta ens nfjn fkjsnd kjfns jkdfn skjdfnj ksdnf jksdnfjks nfjksnjfskjdfn jkdsnfkjsnfjksnj kfnskjfnsjkdnfjks ndf</p>

                                </div>
                            </div>
                        </Row>
                        <Row className="Container-center">
                            <div class="ui card Card-pequeno">
                                <div class="content">
                                    <div class="header">Cute Dog</div>
                                    <div class="meta">
                                        <span>2 days ago</span>
                                        <a>Animals</a>
                                    </div>
                                    <p>Aqui vai um texta ens nfjn fkjsnd kjfns jkdfn skjdfnj ksdnf jksdnfjks nfjksnjfskjdfn jkdsnfkjsnfjksnj kfnskjfnsjkdnfjks ndf</p>

                                </div>
                            </div>
                        </Row>
                    </Col>
                    <Col sm={12} md={3} className="Container-center">
                        <Row className="Container-center">
                            <Col>
                                <Card.Img variant="top" src="holder.js/100px180" />
                            </Col>
                            <Col>
                                <div class="ui card Card-pequeno">
                                    <div class="content">
                                        <div class="header">Cute Dog</div>
                                        <div class="meta">
                                            <span>2 days ago</span>
                                            <a>Animals</a>
                                        </div>
                                        <p>CU DE BURRO</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <Row className="Container-center">
                            <div class="ui card Card-pequeno">
                                <div class="content">
                                    <div class="header">Cute Dog</div>
                                    <div class="meta">
                                        <span>2 days ago</span>
                                        <a>Animals</a>
                                    </div>
                                    <p>Aqui vai um texta ens nfjn fkjsnd kjfns jkdfn skjdfnj ksdnf jksdnfjks nfjksnjfskjdfn jkdsnfkjsnfjksnj kfnskjfnsjkdnfjks ndf</p>

                                </div>
                            </div>
                        </Row>
                        <Row className="Container-center">
                            <div class="ui card Card-pequeno">
                                <div class="content">
                                    <div class="header">Cute Dog</div>
                                    <div class="meta">
                                        <span>2 days ago</span>
                                        <a>Animals</a>
                                    </div>
                                    <p>Aqui vai um texta ens nfjn fkjsnd kjfns jkdfn skjdfnj ksdnf jksdnfjks nfjksnjfskjdfn jkdsnfkjsnfjksnj kfnskjfnsjkdnfjks ndf</p>

                                </div>
                            </div>
                        </Row>
                    </Col>
                    <Col sm={12} md={3} className="Container-center">
                        <Row className="Container-center">
                            <div class="ui card Card-pequeno">
                                <div class="content">
                                    <div class="header">Cute Dog</div>
                                    <div class="meta">
                                        <span>2 days ago</span>
                                        <a>Animals</a>
                                    </div>
                                    <p>Aqui vai um texta ens nfjn fkjsnd kjfns jkdfn skjdfnj ksdnf jksdnfjks nfjksnjfskjdfn jkdsnfkjsnfjksnj kfnskjfnsjkdnfjks ndf</p>
                                </div>
                            </div>
                        </Row>
                        <Row className="Container-center">
                            <div class="ui card Card-pequeno">
                                <div class="content">
                                    <div class="header">Cute Dog</div>
                                    <div class="meta">
                                        <span>2 days ago</span>
                                        <a>Animals</a>
                                    </div>
                                    <p>Aqui vai uahsbd akjsdbka asdkj asdkja sdkjba ajksdb askjdb asjkd basdkj baskjdb askdjb asjkd baskjd basdjk basdkj baskd baskjd bm texta ens nfjn fkjsnd kjfns jkdfn skjdfnj ksdnf jksdnfjks nfjksnjfskjdfn jkdsnfkjsnfjksnj kfnskjfnsjkdnfjks ndf</p>

                                </div>
                            </div>
                        </Row>
                        <Row className="Container-center">
                            <div class="ui card Card-pequeno">
                                <div class="content">
                                    <div class="header">Cute Dog</div>
                                    <div class="meta">
                                        <span>2 days ago</span>
                                        <a>Animals</a>
                                    </div>
                                    <p>Aqui vai um texta ens nfjn fkjsnd kjfns jkdfn skjdfnj ksdnf jksdnfjks nfjksnjfskjdfn jkdsnfkjsnfjksnj kfnskjfnsjkdnfjks ndf</p>

                                </div>
                            </div>
                        </Row>
                    </Col>
                    <Col sm={12} md={3} className="Container-center">
                        <Row className="Container-center">
                            <div class="ui card Card-pequeno">
                                <div class="content">
                                    <div class="header">Cute Dog</div>
                                    <div class="meta">
                                        <span>2 days ago</span>
                                        <a>Animals</a>
                                    </div>
                                    <p>Aqui vai um texta ens nfjn fkjsnd kjfns jkdfn skjdfnj ksdnf jksdnfjks nfjksnjfskjdfn jkdsnfkjsnfjksnj kfnskjfnsjkdnfjks ndf</p>
                                </div>
                            </div>
                        </Row>
                        <Row className="Container-center">
                            <div class="ui card Card-pequeno">
                                <div class="content">
                                    <div class="header">Cute Dog</div>
                                    <div class="meta">
                                        <span>2 days ago</span>
                                        <a>Animals</a>
                                    </div>
                                    <p>Aqui vai um texta ens nfjn fkjsnd kjfns jkdfn skjdfnj ksdnf jksdnfjks nfjksnjfskjdfn jkdsnfkjsnfjksnj kfnskjfnsjkdnfjks ndf</p>

                                </div>
                            </div>
                        </Row>
                        <Row className="Container-center">
                            <div class="ui card Card-pequeno">
                                <div class="content">
                                    <div class="header">Cute Dog</div>
                                    <div class="meta">
                                        <span>2 days ago</span>
                                        <a>Animals</a>
                                    </div>
                                    <p>Aqui vai um texta ens nfjn fkjsnd kjfns jkdfn skjdfnj ksdnf jksdnfjks nfjksnjfskjdfn jkdsnfkjsnfjksnj kfnskjfnsjkdnfjks ndf</p>

                                </div>
                            </div>
                        </Row>
                    </Col>
                </Row>
            </div>

        </div>
    );
}

export default HomeScreen;
