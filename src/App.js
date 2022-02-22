import './App.css';
import { useState, useEffect } from 'react';

import { Route } from 'react-router-dom';

import AreYou21 from './components/AreYou21'
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import ScrollBar from './components/ScrollBar';
import Menu from './components/Menu';
import HappyHour from './components/HappyHour';
import Team from './components/Team';
import Footer from './components/Footer';
import LoginSignup from './components/LoginSignup'
import UserHome from './UserHome'

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
  const [cocktails, setCocktails] = useState(['Margarita on the Rocks', 'Bloody Mary', 'Red Rocks Mule', 'Chocolate Martini', 'AK Old Fashioned', 'Classic Cosmo', 'PB&J', 'Martini']);

  const getBeers = () => {
    fetch('https://skybear-brewery-backend.herokuapp.com/beers')
      .then(response => response.json())
      .then(apiBeers => setBeers(apiBeers))
  }

  const getFoods = () => {
    fetch('https://skybear-brewery-backend.herokuapp.com/foods')
      .then(response => response.json())
      .then(apiFoods => setFoods(apiFoods))
  }

  useEffect(getBeers, [])

  useEffect(getFoods, [])

  const [visible, setVisible] = useState(false)

  Aos.init();

  const [areYou21, setAreYou21] = useState(false)

  

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


      <Route path='/login-signup' render={(routerProps) => <LoginSignup {...routerProps} beers={ beers } /> } />
      <Route path='/welcome-back' render={(routerProps) => <UserHome {...routerProps} beers={ beers } /> } />
      <Route path='/Black Bear' render={(routerProps) => <BlackBear {...routerProps} beers={ beers }/> } />
      <Route path='/Black Fox' render={(routerProps) => <BlackFox {...routerProps} beers={ beers } /> } />
      <Route path='/Blonde Bear' render={(routerProps) => <BlondeBear {...routerProps} beers={ beers } /> } />
      <Route path='/Bobcat Lager' render={(routerProps) => <Bobcat {...routerProps} beers={ beers } /> } />
      <Route path='/Eagle Light' render={(routerProps) => <Eagle {...routerProps} beers={ beers } /> } />
      <Route path='/Nuthatch Brown' render={(routerProps) => <Nuthatch {...routerProps} beers={ beers } /> } />
      <Route path='/Red Fox' render={(routerProps) => <RedFox {...routerProps} beers={ beers } /> } />
      <Route path='/Rattlesnake' render={(routerProps) => <Rattlesnake {...routerProps} beers={ beers } /> } />

    { areYou21 === true

    ?

    <Route exact path='/' render={(routerProps) => <div {...routerProps}>

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

        <Route render={(routerProps) => <Home {...routerProps}
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
        cocktails={ cocktails }
      />}
      />

      <HappyHour />

      <Team />

      <Footer />


    </div> } />

    :

    <div>
      <AreYou21 areYou21={areYou21} setAreYou21={setAreYou21} />
    </div>

    }

      </div>
      

  );
}

export default App;
