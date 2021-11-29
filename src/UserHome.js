import './App.css';
import { useState, useEffect } from 'react';

import { Route } from 'react-router-dom';

import Header from './components/Header';
import LogInHome from './components/LogInHome';
import About from './components/About';
import ScrollBar from './components/ScrollBar';
import Menu from './components/Menu';
import Reviews from './components/HappyHour';
import Team from './components/Team';
import Footer from './components/Footer';
import LoginSignup from './components/LoginSignup'

import BlackBear from './beers/BlackBear'
import BlackFox from './beers/BlackFox'
import BlondeBear from './beers/BlondeBear'
import Bobcat from './beers/Bobcat'
import Eagle from './beers/Eagle'
import Nuthatch from './beers/Nuthatch'
import Rattlesnake from './beers/Rattlesnake'
import RedFox from './beers/RedFox'

import 'bootstrap/dist/css/bootstrap.min.css';

import Aos from 'aos';

function App() {

  let [toggleBeer, setToggleBeer] = useState(true)

  const [beers, setBeers] = useState([]);
  const [foods, setFoods] = useState([]);

  const getBeers = () => {
    fetch('http://localhost:3000/beers/')
      .then(response => response.json())
      .then(apiBeers => setBeers(apiBeers))
  }

  const getFoods = () => {
    fetch('http://localhost:3000/foods/')
      .then(response => response.json())
      .then(apiFoods => setFoods(apiFoods))
  }

  useEffect(getBeers, [])

  useEffect(getFoods, [])

  const [visible, setVisible] = useState(false)

  Aos.init();

  const [windowHeight, setWindowHeight] = useState(0)

  const [progressHeight, setProgressHeight] = useState(0)
    

    let totalHeight = document.body.scrollHeight - window.innerHeight;

    let scroll = window.onscroll = () => {

        setWindowHeight(window.pageYOffset);
        setProgressHeight((window.pageYOffset / totalHeight) * 100);
        setVisible(true);
    };

  return (


    <div className='App' >



    <div>
      <Route path='/login-signup' render={(routerProps) => <LoginSignup {...routerProps} /> } />
      <Route path='/Black Bear' render={(routerProps) => <BlackBear {...routerProps} /> } />
      <Route path='/Black Fox' render={(routerProps) => <BlackFox {...routerProps} /> } />
      <Route path='/Blonde Bear' render={(routerProps) => <BlondeBear {...routerProps} /> } />
      <Route path='/Bobcat Lager' render={(routerProps) => <Bobcat {...routerProps} /> } />
      <Route path='/Eagle Light' render={(routerProps) => <Eagle {...routerProps} /> } />
      <Route path='/Nuthatch Brown' render={(routerProps) => <Nuthatch {...routerProps} /> } />
      <Route path='/Red Fox' render={(routerProps) => <RedFox {...routerProps} /> } />
      <Route path='/Rattlesnake' render={(routerProps) => <Rattlesnake {...routerProps} /> } />

      <ScrollBar
        visible={ visible } 
        setVisible={ setVisible }
        scroll={ scroll }
        progressHeight={ progressHeight }
        setProgressHeight={ setProgressHeight }
      />


      <Header 
        toggleBeer={ toggleBeer } 
        setToggleBeer={ setToggleBeer }
        scroll={ scroll }
        windowHeight={ windowHeight }
        setWindowHeight={ setWindowHeight }
      />

        <Route render={(routerProps) => <LogInHome {...routerProps}
          toggleBeer={ toggleBeer } 
          setToggleBeer={ setToggleBeer }
        />}
      />



      <About />

      <Route render={(routerProps) => <Menu {...routerProps}
        toggleBeer={ toggleBeer } 
        setToggleBeer={ setToggleBeer } 
        beers={ beers } 
        foods={ foods } 
      />}
      />

      <Reviews />

      <Team />

      <Footer />


    </div>

      </div>
      

  );
}

export default App;
