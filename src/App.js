import './App.css';
import { useState, useEffect } from 'react';

import { BrowserRouter as Route, Router } from 'react-router-dom';

import AreYou21 from './components/AreYou21'
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import ScrollBar from './components/ScrollBar';
import Menu from './components/Menu';
import Reviews from './components/Reviews';
import Team from './components/Team';
import Footer from './components/Footer';
import LoginSignup from './components/LoginSignup';

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

  const [areYou21, setAreYou21] = useState(false)

  const [toggleHomeStar, setToggleHomeStar] = useState(false)
  const [toggleAboutStar, setToggleAboutStar] = useState(false)
  const [toggleBeersStar, setToggleBeersStar] = useState(false)
  const [toggleFoodStar, setToggleFoodStar] = useState(false)
  const [toggleTeamStar, setToggleTeamStar] = useState(false)
  const [toggleFeedbackStar, setToggleFeedbackStar] = useState(false)
  const [toggleContactStar, setToggleContactStar] = useState(false)

  const [windowHeight, setWindowHeight] = useState(0)

  const [progressHeight, setProgressHeight] = useState(0)
    

    let totalHeight = document.body.scrollHeight - window.innerHeight;

    let scroll = window.onscroll = () => {

        setWindowHeight(window.pageYOffset);
        setProgressHeight((window.pageYOffset / totalHeight) * 100);
        setVisible(true);
    };

  return (


    <Router>
    <div className="App" >



    { areYou21 === true

    ?

    <div>


      <Route exact path="/login-signup" render={(routerprops) => <LoginSignup key="login" /> } />


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

      <Home 
        toggleBeer={ toggleBeer } 
        setToggleBeer={ setToggleBeer } 
        toggleHomeStar={ toggleHomeStar }
        setToggleHomeStar={ setToggleHomeStar }
        toggleAboutStar={ toggleAboutStar }
        setToggleAboutStar={ setToggleAboutStar }
        toggleBeersStar={ toggleBeersStar }
        setToggleBeersStar={ setToggleBeersStar }
        toggleFoodStar={ toggleFoodStar }
        setToggleFoodStar={ setToggleFoodStar }
        toggleTeamStar={ toggleTeamStar }
        setToggleTeamStar={ setToggleTeamStar }
        toggleFeedbackStar={ toggleFeedbackStar }
        setToggleFeedbackStar={ setToggleFeedbackStar }
        toggleContactStar={ toggleContactStar }
        setToggleContactStar={ setToggleContactStar }
      />

      <About />

      <Menu 
        toggleBeer={ toggleBeer } 
        setToggleBeer={ setToggleBeer } 
        beers={ beers } 
        foods={ foods } 
      />

      <Reviews />

      <Team />

      <Footer />


    </div>

    :

    <div>
      <AreYou21 areYou21={areYou21} setAreYou21={setAreYou21} />
    </div>

    }

      </div>
      </Router>
      

  );
}

export default App;
