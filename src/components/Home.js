import React, { useEffect } from 'react';
import pattern from '../static/patternpad.svg'
import Lottie from 'lottie-web'
import Animation from '../animations/drawkit-grape-animation-2-LOOP.json'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

const Home = () => {
    useEffect(() => {
        Lottie.loadAnimation({
            container: document.querySelector('#home-illustration'),
            animationData:Animation
        })
    }, [])

    return (
        <div style={{ color:'#63686e' }}>
            <div style={{ background:'#fff', paddingTop:'15px', paddingBottom:'55px' }}> 
                <div className="container ">
                    <div className="row" >
                        <div className="col-md-6 " style={{ paddingTop:'130px', paddingLeft:'60px', fontSize:'18px' }}>
                            <h1 className=''>Welcome to FinMate</h1>
                            <p>
                                Your online financial assistant. Make use of our platform <br/>
                                to create and manage your budgets, monitor your expenditures <br/>
                                and plan your finances, encouraging you to save money.    
                            </p>
                            <div style={{ marginTop:'25px', }}>
                                <Button style={{ background:'#057B68', outline:'0 !important;', border:'none'}}>Get Started</Button>
                                <Button style={{ marginLeft:'18px', background:'#F69044', outline: 'none; !important', border:'none' }}>Learn More</Button>
                            </div>
                        </div>
                        <div className="col-md-6"  >
                            <div style={{ height: "500px" }} id='home-illustration'></div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="container-fluid " >
                <div className="row"  style={{ height:'650px'}}>
                    <div className="col-md-5 p-0" style={{ backgroundImage:`url(${pattern})` }}>
                    </div>
                    <div className="col-md-7 p-0" style={{ position:'relative' }}>
                        <div className="container"  style={{ position:'absolute', top:'20%', paddingLeft:'120px' }}>
                            <div className="row" style={{ marginBottom:'20px' }}>
                                <div className="col-md-4 px-2 mx-0 ">
                                    <Card style={{ height:'200px', border:'none', borderRadius:'15px' }}>
                                        <Card.Body>
                                            <Card.Title>Budget</Card.Title>
                                            <Card.Text>
                                                Some quick example text to build on the card title and make up the bulk of
                                                the card's content.
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>                                
                                </div>
                                <div className="col-md-6 px-2 mx-0 ">
                                    <Card style={{ height:'200px', border:'none', borderRadius:'15px' }}>
                                        <Card.Body>
                                            <Card.Title>Budget</Card.Title>
                                            <Card.Text>
                                                Some quick example text to build on the card title and make up the bulk of
                                                the card's content.
                                            </Card.Text>
                                        </Card.Body>
                                    </Card> 
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 px-2 mx-0 ">
                                    <Card style={{ height:'200px', border:'none', borderRadius:'15px' }}>
                                        <Card.Body>
                                            <Card.Title>Budget</Card.Title>
                                            <Card.Text>
                                                Some quick example text to build on the card title and make up the bulk of
                                                the card's content.
                                            </Card.Text>
                                        </Card.Body>
                                    </Card> 
                                </div>
                                <div className="col-md-4 px-2 mx-0 ">
                                    <Card style={{ height:'200px', border:'none', borderRadius:'15px' }}>
                                        <Card.Body>
                                            <Card.Title>Budget</Card.Title>
                                            <Card.Text>
                                                Some quick example text to build on the card title and make up the bulk of
                                                the card's content.
                                            </Card.Text>
                                        </Card.Body>
                                    </Card> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>  
      );

}

export default Home;