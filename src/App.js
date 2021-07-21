import './App.css';
import { useState, useEffect } from 'react';

import AreYou21 from './components/AreYou21'
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import ScrollBar from './components/ScrollBar';
import Beers from './components/Beers';
import Reviews from './components/Reviews';
import Team from './components/Team';
import Footer from './components/Footer';

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



  window.addEventListener("load", function () {

    Aos.init();

  });

  // const scrollBar = window.addEventListener("load", function () {

  //   Aos.init();

  //   const progress1 = document.getElementById('progressbar');
  //   const totalHeight = document.body.scrollHeight - window.innerHeight;

  //   window.onscroll = () => {

  //     const progressHeight = (window.pageYOffset / totalHeight) * 110;
  //     progress1.style.height = progressHeight + "%";
  //     setVisible(true);

  //     // let line1 = document.getElementById('line-1');
  //     // let line2 = document.getElementById('line-2');
  //     // let pos = window.scrollY - 2000;
  //     // line1.style.left = `${pos}rem`
  //     // line2.style.right = `${pos}rem`
  
  //   };
  // })


  // window.addEventListener("load", function () {

  //   // this.document.querySelector(".page-loader").classList.add("fade-out");
  //   // this.setTimeout(function(){
  //   //   this.document.querySelector(".page-loader").style.display="none";
  //   // },600);

  // })

  const [areYou21, setAreYou21] = useState(false)

  return (


    <div className="App">


    { areYou21 === true

    ?

    <div>

      <ScrollBar visible={ visible } setVisible={ setVisible } />
      <Header toggleBeer={ toggleBeer } setToggleBeer={ setToggleBeer }/>
      <Home toggleBeer={ toggleBeer } setToggleBeer={ setToggleBeer } />
      <About />
      <Beers toggleBeer={ toggleBeer } setToggleBeer={ setToggleBeer } beers={ beers } foods={ foods } />
      <Reviews />
      <Team />
      <Footer />
    </div >

    :

    <div>
      <AreYou21 areYou21={areYou21} setAreYou21={setAreYou21} />
    </div>

    }

      </div>
      

  );
}

export default App;
