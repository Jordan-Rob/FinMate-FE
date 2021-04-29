import React, { useEffect } from 'react';
import Illustration from '../MoneySaving.svg'
import Lottie from 'lottie-web'
import Animation from '../animations/drawkit-grape-animation-2-LOOP.json'

const Home = () => {
    useEffect(() => {
        Lottie.loadAnimation({
            container: document.querySelector('#home-illustration'),
            animationData:Animation
        })
    }, [])

    return (
        <div className="container mt-5">
          <div className="row" >
              <div className="col-md-6 " style={{ paddingTop:'130px', paddingLeft:'60px' }}>
                  <h3 className=''>Welcome to FinMate</h3>
                  <p>
                      Your online financial assistant. Make use of our platform <br/>
                      to create and manage your Budgets, Monitor your expenditures <br/>
                      and plan your finances, encouraging you to save money.    
                  </p>
              </div>
              <div className="col-md-6"  >
                <div style={{ height: "500px" }} id='home-illustration'></div>
              </div>
          </div>
        </div>
      );

}

export default Home;