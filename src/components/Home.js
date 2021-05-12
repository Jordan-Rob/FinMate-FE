import React, { useEffect } from 'react';
import pattern from '../static/patternpad.svg'
import Lottie from 'lottie-web'
import Animation from '../animations/drawkit-grape-animation-2-LOOP.json'
import Bargraph from '../animations/18841-bar-graph.json'
import One from '../static/1.svg'
import Two from '../static/2.svg'
import Three from '../static/3.svg'
import Four from '../static/4.svg'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

const Home = () => {
    useEffect(() => {
        Lottie.loadAnimation({
            container: document.querySelector('#home-illustration'),
            animationData:Animation
        })
    }, [])

    useEffect(() => {
        Lottie.loadAnimation({
            container: document.querySelector('#bar-graph'),
            animationData:Bargraph
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
                            <div className="row" style={{ marginBottom:'50px' }}>
                                <div className="col-md-4 px-2 mr-4 ">
                                    <Card className="shadow" style={{ height:'200px', border:'none', borderRadius:'15px', background:'#F68F43', color:'#fff' }}>
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
                                    <Card className="shadow" style={{ height:'200px', border:'none', borderRadius:'15px', background:'#2C907F', color:'#fff' }}>
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
                                <div className="col-md-6 px-2 mr-4 ">
                                    <Card className="shadow" style={{ height:'200px', border:'none', borderRadius:'15px', background:'#057C68', color:'#fff' }}>
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
                                    <Card className="shadow" style={{ height:'200px', border:'none', borderRadius:'15px', background:'#F9B480', color:'#fff' }}>
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

            <div style={{ background:'#fff', paddingTop:'105px', paddingBottom:'105px' }}>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6'>
                            <div style={{ height: "450px" }} id='bar-graph'></div>
                        </div>
                        <div className='col-md-6' style={{ textAlign:'center', paddingTop:'70px' }}>
                            <h3>Viuslize Your Financial data</h3>
                            <p style={{ paddingTop:'40px' }}>
                                Our platform allows you to easily visualize your financial data<br/> 
                                in the form of bar graphs, pie charts, line charts and easily  <br/>
                                establish trends in your expenditures, tell if you are spending<br/> 
                                within your budget or exceeding it.<br/>
                            </p>
                            <p>
                                This translates to you taking steps to make adjustments in your <br/>
                                spending so as to meet your budgetary goals and save money. 

                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ height:'580px' }}>
                <div className='container' style={{ paddingTop:'100px' }}>
                    <div style={{ textAlign:'center', paddingBottom:'80px' }}>
                        <h2 style={{ color:'#057C68' }}>How it works</h2>
                    </div>
                    <div className='row' >
                        <div className='col-md-3'>
                            <div style={{ background:'#fff', width:'70px', height:'70px', borderRadius:'20px', marginBottom:'25px' }}>
                                <h2 style={{ textAlign:'center', paddingTop:'15px', color:'#057C68' }} >01</h2>
                            </div>
                            <div>
                                <h3 style={{ marginBottom:'20px' }}>Create Budget</h3>
                                <p>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </p>
                            </div>
                        </div>    
                        <div className='col-md-3'>
                            <div style={{ background:'#fff', width:'70px', height:'70px', borderRadius:'20px', marginBottom:'25px' }}>
                                <h2 style={{ textAlign:'center', paddingTop:'15px', color:'#057C68' }} >02</h2>
                            </div>
                            <div>
                                <h3 style={{ marginBottom:'20px' }}>Add Expenditures</h3>
                                <p>
                                   Some quick example text to build on the card title and make up the bulk of
                                   the card's content.
                                </p>
                            </div>
                        </div>
                        <div className='col-md-3'>
                            <div style={{ background:'#fff', width:'70px', height:'70px', borderRadius:'20px', marginBottom:'25px' }}>
                                <h2 style={{ textAlign:'center', paddingTop:'15px' , color:'#057C68'}} >03</h2>
                            </div>
                            <div>
                                <h3 style={{ marginBottom:'20px' }}>Visualize Data</h3>
                                <p>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </p>
                            </div>
                        </div>
                        <div className='col-md-3'>
                            <div style={{ background:'#fff', width:'70px', height:'70px', borderRadius:'20px', marginBottom:'25px' }}>
                                <h2 style={{ textAlign:'center', paddingTop:'15px', color:'#057C68' }} >04</h2>
                            </div>
                            <div>
                                <h3 style={{ marginBottom:'20px' }}>Follow Tips</h3>
                                <p>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>  
      );

}

export default Home;