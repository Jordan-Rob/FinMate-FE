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
        <div>  
            <div className="container mt-5">
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

            <div className="mt-5 pt-5" >
                <div className="row "  style={{ height:'580px', width:'100%' }}>
                    <div className="col-md-6 p-0" style={{ backgroundImage:`url(${pattern})` }}>
                    </div>
                    <div className="col-md-6 p-0" style={{  background:'#fff'}}>
                        <div className="container">
                            <div classname="row">
                                <div className="col-md-6">
                                    <Card>
                                        <Card.Body>
                                            <Card.Title>Budget</Card.Title>
                                            <Card.Text></Card.Text>
                                        </Card.Body>
                                    </Card>                                
                                </div>
                                <div className="col-md-6">
                                    <Card>
                                        <Card.Body>
                                            <Card.Title>Budget</Card.Title>
                                            <Card.Text></Card.Text>
                                        </Card.Body>
                                    </Card> 
                                </div>
                            </div>
                            <div classname="row">
                                <div className="col-md-6">
                                    <Card>
                                        <Card.Body>
                                            <Card.Title>Budget</Card.Title>
                                            <Card.Text></Card.Text>
                                        </Card.Body>
                                    </Card> 
                                </div>
                                <div className="col-md-6">
                                    <Card>
                                        <Card.Body>
                                            <Card.Title>Budget</Card.Title>
                                            <Card.Text></Card.Text>
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