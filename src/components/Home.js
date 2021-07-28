import React from 'react'
import { Link } from 'react-router-dom'


function Home(props) {

    let toggleBeer = props.toggleBeer
    let setToggleBeer = props.setToggleBeer

    let toggleHomeStar = props.toggleHomeStar
    let setToggleHomeStar = props.setToggleHomeStar

    let toggleAboutStar = props.toggleAboutStar
    let setToggleAboutStar = props.setToggleAboutStar

    let toggleBeersStar = props.toggleBeersStar
    let setToggleBeersStar = props.setToggleBeersStar

    let toggleFoodStar = props.toggleFoodStar
    let setToggleFoodStar = props.setToggleFoodStar

    let toggleTeamStar = props.toggleTeamStar
    let setToggleTeamStar = props.setToggleTeamStar

    let toggleFeedbackStar = props.toggleFeedbackStar
    let setToggleFeedbackStar = props.setToggleFeedbackStar

    let toggleContactStar = props.toggleContactStar
    let setToggleContactStar = props.setToggleContactStar

    return (
        <div>
            <section className="home-section" id="home">
                <div className="home-bg"></div>
                <div className="container">
                    <div className="row min-vh-100 align-items-center">
                    <h2 className="intro">Welcome to Sky Bear Brewery!</h2>
                    <img src="https://i.imgur.com/n0vdV8Y.png" alt="big dipper" useMap="#starmap" className="big-dipper" />
                    <map name="starmap" className="starmap">
                        <Link className="login-signup" to="./login-signup" ><area shape="circle" coords="158, 170, 50" alt="Login-Signup" data-title="Login-Signup" className="star" onMouseOver={ () => setToggleHomeStar(toggleHomeStar = true) } onMouseOut={ () => setToggleHomeStar(toggleHomeStar = false) } /></Link>
                        { toggleHomeStar === false 
    
                        ?
    
                        <h5 className="starnav-home" style={{ position: 'absolute',  left: 41, top: -12}} >Log In</h5>
    
                        :
    
                        <h5 id="star-nav-home" className="starnav-home" style={{ position: 'absolute',  left: 41, top: -12}} >Log In</h5>
    
                        }
    
                        <area shape="circle" coords="318, 198, 50" alt="About" href="#about" data-title="About Us" className="star" onMouseOver={ () => setToggleAboutStar(toggleAboutStar = true) } onMouseOut={ () => setToggleAboutStar(toggleAboutStar = false) } />
    
                        { toggleAboutStar === false
    
                        ?
    
                        <h5 className="starnav-about" style={{ position: 'absolute',  left: 200, top: 12}} >About</h5>
    
                        :
    
                        <h5 id="star-nav-about" className="starnav-about" style={{ position: 'absolute',  left: 200, top: 12}} >About</h5>
    
                        }
    
                        <area shape="circle" coords="398, 293, 50" alt="Beers" href="#beers" data-title="Beers" className="star" onClick={() => setToggleBeer(toggleBeer = true)} onMouseOver={ () => setToggleBeersStar(toggleBeersStar = true) } onMouseOut={ () => setToggleBeersStar(toggleBeersStar = false) } />
    
                        { toggleBeersStar === false
    
                        ?
    
                        <h5 className="starnav-beer" style={{ position: 'absolute',  left: 280, top: 102}} >Beers</h5>
    
                        :
    
                        <h5 id="star-nav-beer" className="starnav-beer" style={{ position: 'absolute',  left: 280, top: 102}} >Beers</h5>
    
                        }
    
                        <area shape="circle" coords="491, 385, 50" alt="Food" href="#food" data-title="Food" className="star" onClick={() => setToggleBeer(toggleBeer = false)} onMouseOver={ () => setToggleFoodStar(toggleFoodStar = true) } onMouseOut={ () => setToggleFoodStar(toggleFoodStar = false) } />
    
                        { toggleFoodStar === false
    
                        ?
    
                        <h5 className="starnav-food" style={{ position: 'absolute',  left: 378, top: 197}} >Food</h5>
    
                        :
    
                        <h5 id="star-nav-food" className="starnav-food" style={{ position: 'absolute',  left: 378, top: 197}} >Food</h5>
    
                        }
    
                        <area shape="circle" coords="480, 505, 50" alt="Team" href="#team" data-title="Team" className="star" onMouseOver={ () => setToggleTeamStar(toggleTeamStar = true) } onMouseOut={ () => setToggleTeamStar(toggleTeamStar = false) } />
    
                        { toggleTeamStar === false
    
                        ?
    
                        <h5 className="starnav-team" style={{ position: 'absolute',  left: 368, top: 322}} >Team</h5>
    
                        :
    
                        <h5 id="star-nav-team" className="starnav-team" style={{ position: 'absolute',  left: 368, top: 322}} >Team</h5>
    
                        }
    
                        <area shape="circle" coords="711, 445, 50" alt="Testimonials" href="#testimonials" data-title="Feedback" className="star" onMouseOver={ () => setToggleFeedbackStar(toggleFeedbackStar = true) } onMouseOut={ () => setToggleFeedbackStar(toggleFeedbackStar = false) } />
    
                        { toggleFeedbackStar === false
    
                        ?
    
                        <h5 className="starnav-feedback" style={{ position: 'absolute',  left: 583, top: 260}} >Feedback</h5>
    
                        :
    
                        <h5 id="star-nav-feedback" className="starnav-feedback" style={{ position: 'absolute',  left: 583, top: 260}} >Feedback</h5>
    
                        }
    
                        <area shape="circle" coords="650, 575, 50" alt="Contact" href="#contact" data-title="Contact" className="star" onMouseOver={ () => setToggleContactStar(toggleContactStar = true) } onMouseOut={ () => setToggleContactStar(toggleContactStar = false) } />
    
                        { toggleContactStar === false
    
                        ?
    
                        <h5 className="starnav-contact" style={{ position: 'absolute',  left: 528, top: 380}} >Contact</h5>
    
                        :
    
                        <h5 id="star-nav-contact" className="starnav-contact" style={{ position: 'absolute',  left: 528, top: 380}} >Contact</h5>
    
                        }
                    </map>
                    </div>
                </div>
            </section>
        </div>
    )
};

export default Home









// for large screen
// return (
//     <div>
//         <section className="home-section" id="home">
//             <div className="home-bg"></div>
//             <div className="container">
//                 <div className="row min-vh-100 align-items-center">
//                 <h2 className="intro">Welcome to Sky Bear Brewery!</h2>
//                 <img src="https://i.imgur.com/n0vdV8Y.png" alt="big dipper" useMap="#starmap" className="big-dipper" />
//                 <map name="starmap" className="starmap">
//                     <area shape="circle" coords="158, 170, 50" alt="Home" href="#home" data-title="Home" className="star" onMouseOver={homeNavVisible} onMouseOut={homeNavInvisible} />
//                     <h5 className="starnav-home" style={{ position: 'absolute',  left: 41, top: -12}} >Home</h5>
//                     <h5 id="starnav-home" className="starnav-home" style={{ position: 'absolute',  left: 41, top: -12}} >Home</h5>
//                     <area shape="circle" coords="318, 198, 50" alt="About" href="#about" data-title="About Us" className="star" onMouseOver={aboutNavVisible} onMouseOut={aboutNavInvisible}/>
//                     <h5 id="starnav-about" style={{ position: 'absolute',  left: 200, top: 12}} >About</h5>
//                     <area shape="circle" coords="398, 293, 50" alt="Beers" href="#beers" data-title="Beers" className="star" onClick={() => setToggleBeer(toggleBeer = true)} onMouseOver={beerNavVisible} onMouseOut={beerNavInvisible}/>
//                     <h5 id="starnav-beer" style={{ position: 'absolute',  left: 280, top: 102}} >Beers</h5>
//                     <area shape="circle" coords="491, 385, 50" alt="Food" href="#food" data-title="Food" className="star" onClick={() => setToggleBeer(toggleBeer = false)} onMouseOver={foodNavVisible} onMouseOut={foodNavInvisible}/>
//                     <h5 id="starnav-food" style={{ position: 'absolute',  left: 378, top: 197}} >Food</h5>
//                     <area shape="circle" coords="480, 505, 50" alt="Team" href="#team" data-title="Team" className="star" onMouseOver={teamNavVisible} onMouseOut={teamNavInvisible}/>
//                     <h5 id="starnav-team" style={{ position: 'absolute',  left: 368, top: 322}} >Team</h5>
//                     <area shape="circle" coords="711, 445, 50" alt="Testimonials" href="#testimonials" data-title="Feedback" className="star" onMouseOver={feedbackNavVisible} onMouseOut={feedbackNavInvisible}/>
//                     <h5 id="starnav-feedback" style={{ position: 'absolute',  left: 583, top: 260}} >Feedback</h5>
//                     <area shape="circle" coords="650, 575, 50" alt="Contact" href="#contact" data-title="Contact" className="star"onMouseOver={contactNavVisible} onMouseOut={contactNavInvisible}/>
//                     <h5 id="starnav-contact" style={{ position: 'absolute',  left: 528, top: 380}} >Contact</h5>
//                 </map>
//                 </div>
//             </div>
//         </section>
//     </div>
// )
// }











// for medium screen
// return (
//     <div>
//         <section className="home-section" id="home">
//             <div className="home-bg"></div>
//             <div className="container">
//                 <div className="row min-vh-100 align-items-center">
//                 <h2 className="intro">Welcome to Sky Bear Brewery!</h2>
//                 <img src="https://i.imgur.com/n0vdV8Y.png" alt="big dipper" useMap="#starmap" className="big-dipper" />
//                 <map name="starmap" className="starmap">
//                     <area shape="circle" coords="130, 136, 45" alt="Home" href="#home" data-title="Home" className="star" onMouseOver={homeNavVisible} onMouseOut={homeNavInvisible} />
//                     <h5 id="starnav-home" style={{ position: 'absolute',  left: 101, top: 17}} >Home</h5>
//                     <area shape="circle" coords="252, 158, 45" alt="About" href="#about" data-title="About Us" className="star" onMouseOver={aboutNavVisible} onMouseOut={aboutNavInvisible}/>
//                     <h5 id="starnav-about" style={{ position: 'absolute',  left: 223, top: 38}} >About</h5>
//                     <area shape="circle" coords="315, 233, 45" alt="Beers" href="#beers" data-title="Beers" className="star" onClick={() => setToggleBeer(toggleBeer = true)} onMouseOver={beerNavVisible} onMouseOut={beerNavInvisible}/>
//                     <h5 id="starnav-beer" style={{ position: 'absolute',  left: 291, top: 109}} >Beers</h5>
//                     <area shape="circle" coords="390, 318, 45" alt="Food" href="#food" data-title="Food" className="star" onClick={() => setToggleBeer(toggleBeer = false)} onMouseOver={foodNavVisible} onMouseOut={foodNavInvisible}/>
//                     <h5 id="starnav-food" style={{ position: 'absolute',  left: 369, top: 188}} >Food</h5>
//                     <area shape="circle" coords="385, 420, 45" alt="Team" href="#team" data-title="Team" className="star" onMouseOver={teamNavVisible} onMouseOut={teamNavInvisible}/>
//                     <h5 id="starnav-team" style={{ position: 'absolute',  left: 360, top: 292}} >Team</h5>
//                     <area shape="circle" coords="567, 365, 45" alt="Testimonials" href="#testimonials" data-title="Feedback" className="star" onMouseOver={feedbackNavVisible} onMouseOut={feedbackNavInvisible}/>
//                     <h5 id="starnav-feedback" style={{ position: 'absolute',  left: 530, top: 245}} >Feedback</h5>
//                     <area shape="circle" coords="521, 475, 45" alt="Contact" href="#contact" data-title="Contact" className="star"onMouseOver={contactNavVisible} onMouseOut={contactNavInvisible}/>
//                     <h5 id="starnav-contact" style={{ position: 'absolute',  left: 487, top: 347}} >Contact</h5>
//                 </map>
//                 </div>
//             </div>
//         </section>
//     </div>
// )
// }






// for small screens
// return (
//     <div>
//         <section className="home-section" id="home">
//             <div className="home-bg"></div>
//             <div className="container">
//                 <div className="row min-vh-100 align-items-center">
//                 <h2 className="intro">Welcome to Sky Bear Brewery!</h2>
//                 <img src="https://i.imgur.com/n0vdV8Y.png" alt="big dipper" useMap="#starmap" className="big-dipper" />
//                 <map name="starmap" className="starmap">
//                     <area shape="circle" coords="128, 105, 25" alt="Home" href="#home" data-title="Home" className="star" onMouseOver={homeNavVisible} onMouseOut={homeNavInvisible} />
//                     <h5 id="starnav-home" style={{ position: 'absolute',  left: 215, top: 73}} >Home</h5>
//                     <area shape="circle" coords="252, 125, 25" alt="About" href="#about" data-title="About Us" className="star" onMouseOver={aboutNavVisible} onMouseOut={aboutNavInvisible}/>
//                     <h5 id="starnav-about" style={{ position: 'absolute',  left: 278, top: 85}} >About</h5>
//                     <area shape="circle" coords="313, 188, 25" alt="Beers" href="#beers" data-title="Beers" className="star" onClick={() => setToggleBeer(toggleBeer = true)} onMouseOver={beerNavVisible} onMouseOut={beerNavInvisible}/>
//                     <h5 id="starnav-beer" style={{ position: 'absolute',  left: 313, top: 131}} >Beers</h5>
//                     <area shape="circle" coords="388, 247, 25" alt="Food" href="#food" data-title="Food" className="star" onClick={() => setToggleBeer(toggleBeer = false)} onMouseOver={foodNavVisible} onMouseOut={foodNavInvisible}/>
//                     <h5 id="starnav-food" style={{ position: 'absolute',  left: 353, top: 180}} >Food</h5>
//                     <area shape="circle" coords="385, 330, 25" alt="Team" href="#team" data-title="Team" className="star" onMouseOver={teamNavVisible} onMouseOut={teamNavInvisible}/>
//                     <h5 id="starnav-team" style={{ position: 'absolute',  left: 349, top: 243}} >Team</h5>
//                     <area shape="circle" coords="570, 285, 25" alt="Testimonials" href="#testimonials" data-title="Feedback" className="star" onMouseOver={feedbackNavVisible} onMouseOut={feedbackNavInvisible}/>
//                     <h5 id="starnav-feedback" style={{ position: 'absolute',  left: 427, top: 214}} >Feedback</h5>
//                     <area shape="circle" coords="525, 375, 25" alt="Contact" href="#contact" data-title="Contact" className="star"onMouseOver={contactNavVisible} onMouseOut={contactNavInvisible}/>
//                     <h5 id="starnav-contact" style={{ position: 'absolute',  left: 408, top: 277}} >Contact</h5>
//                 </map>
//                 </div>
//             </div>
//         </section>
//     </div>
// )
// }







































// for small screen

// return (
//     <div>
//         <section className="home-section" id="home">
//             <div className="home-bg"></div>
//             <div className="container">
//                 <div className="row min-vh-100 align-items-center">
//                 <h2 className="intro">Welcome to Sky Bear Brewery!</h2>
//                 <img src="https://i.imgur.com/n0vdV8Y.png" alt="big dipper" useMap="#starmap" className="big-dipper" />
//                 <map name="starmap" className="starmap">
//                     <area shape="circle" coords="65, 90, 30" alt="Home" href="#home" data-title="Home" className="star" onMouseOver={ () => setToggleHomeStar(toggleHomeStar = true) } onMouseOut={ () => setToggleHomeStar(toggleHomeStar = false) } />

//                     { toggleHomeStar === false

//                     ?

//                     <h5 className="starnav-home" style={{ position: 'absolute',  left: 215, top: 73}} >Home</h5>

//                     :

//                     <h5 id="star-nav-home" className="starnav-home" style={{ position: 'absolute',  left: 215, top: 73}} >Home</h5>

//                     }

//                     <area shape="circle" coords="130, 100, 30" alt="About" href="#about" data-title="About Us" className="star" onMouseOver={ () => setToggleAboutStar(toggleAboutStar = true) } onMouseOut={ () => setToggleAboutStar(toggleAboutStar = false) } />

//                     { toggleAboutStar === false

//                     ?

//                     <h5 className="starnav-about" style={{ position: 'absolute',  left: 278, top: 85}} >About</h5>

//                     :

//                     <h5 id="star-nav-about" className="starnav-about" style={{ position: 'absolute',  left: 278, top: 85}} >About</h5>

//                     }

//                     <area shape="circle" coords="160, 153, 30" alt="Beers" href="#beers" data-title="Beers" className="star" onClick={() => setToggleBeer(toggleBeer = true)} onMouseOver={ () => setToggleBeersStar(toggleBeersStar = true) } onMouseOut={ () => setToggleBeersStar(toggleBeersStar = false) } />

//                     { toggleBeersStar === false

//                     ?

//                     <h5 className="starnav-beer" style={{ position: 'absolute',  left: 313, top: 131}} >Beers</h5>

//                     :

//                     <h5 id="star-nav-beer" className="starnav-beer" style={{ position: 'absolute',  left: 313, top: 131}} >Beers</h5>

//                     }

//                     <area shape="circle" coords="200, 200, 30" alt="Food" href="#food" data-title="Food" className="star" onClick={() => setToggleBeer(toggleBeer = false)} onMouseOver={ () => setToggleFoodStar(toggleFoodStar = true) } onMouseOut={ () => setToggleFoodStar(toggleFoodStar = false) } />

//                     { toggleFoodStar === false

//                     ?

//                     <h5 className="starnav-food" style={{ position: 'absolute',  left: 353, top: 180}} >Food</h5>

//                     :

//                     <h5 id="star-nav-food" className="starnav-food" style={{ position: 'absolute',  left: 353, top: 180}} >Food</h5>

//                     }

//                     <area shape="circle" coords="198, 263, 28" alt="Team" href="#team" data-title="Team" className="star" onMouseOver={ () => setToggleTeamStar(toggleTeamStar = true) } onMouseOut={ () => setToggleTeamStar(toggleTeamStar = false) } />

//                     { toggleTeamStar === false

//                     ?

//                     <h5 className="starnav-team" style={{ position: 'absolute',  left: 349, top: 243}} >Team</h5>

//                     :

//                     <h5 id="star-nav-team" className="starnav-team" style={{ position: 'absolute',  left: 349, top: 243}} >Team</h5>

//                     }

//                     <area shape="circle" coords="290, 225, 30" alt="Testimonials" href="#testimonials" data-title="Feedback" className="star" onMouseOver={ () => setToggleFeedbackStar(toggleFeedbackStar = true) } onMouseOut={ () => setToggleFeedbackStar(toggleFeedbackStar = false) } />

//                     { toggleFeedbackStar === false

//                     ?

//                     <h5 className="starnav-feedback" style={{ position: 'absolute',  left: 427, top: 214}} >Feedback</h5>

//                     :

//                     <h5 id="star-nav-feedback" className="starnav-feedback" style={{ position: 'absolute',  left: 427, top: 214}} >Feedback</h5>

//                     }

//                     <area shape="circle" coords="265, 295, 30" alt="Contact" href="#contact" data-title="Contact" className="star" onMouseOver={ () => setToggleContactStar(toggleContactStar = true) } onMouseOut={ () => setToggleContactStar(toggleContactStar = false) } />

//                     { toggleContactStar === false

//                     ?

//                     <h5 className="starnav-contact" style={{ position: 'absolute',  left: 408, top: 277}} >Contact</h5>

//                     :

//                     <h5 id="star-nav-contact" className="starnav-contact" style={{ position: 'absolute',  left: 408, top: 277}} >Contact</h5>

//                     }

//                 </map>
//                 </div>
//             </div>
//         </section>
//     </div>
// )
// }















// for medium screen

// return (
//     <div>
//         <section className="home-section" id="home">
//             <div className="home-bg"></div>
//             <div className="container">
//                 <div className="row min-vh-100 align-items-center">
//                 <h2 className="intro">Welcome to Sky Bear Brewery!</h2>
//                 <img src="https://i.imgur.com/n0vdV8Y.png" alt="big dipper" useMap="#starmap" className="big-dipper" />
//                 <map name="starmap" className="starmap">
//                     <area shape="circle" coords="130, 136, 45" alt="Home" href="#home" data-title="Home" className="star" onMouseOver={ () => setToggleHomeStar(toggleHomeStar = true) } onMouseOut={ () => setToggleHomeStar(toggleHomeStar = false) } />

//                     { toggleHomeStar === false

//                     ?

//                     <h5 className="starnav-home" style={{ position: 'absolute',  left: 101, top: 17}} >Home</h5>

//                     :

//                     <h5 id="star-nav-home" className="starnav-home" style={{ position: 'absolute',  left: 101, top: 17}} >Home</h5>

//                     }

//                     <area shape="circle" coords="252, 158, 45" alt="About" href="#about" data-title="About Us" className="star" onMouseOver={ () => setToggleAboutStar(toggleAboutStar = true) } onMouseOut={ () => setToggleAboutStar(toggleAboutStar = false) } />

//                     { toggleAboutStar === false

//                     ?

//                     <h5 className="starnav-about" style={{ position: 'absolute',  left: 223, top: 38}} >About</h5>

//                     :

//                     <h5 id="star-nav-about" className="starnav-about" style={{ position: 'absolute',  left: 223, top: 38}} >About</h5>

//                     }

//                     <area shape="circle" coords="315, 233, 45" alt="Beers" href="#beers" data-title="Beers" className="star" onMouseOver={ () => setToggleBeersStar(toggleBeersStar = true) } onMouseOut={ () => setToggleBeersStar(toggleBeersStar = false) } onClick={() => setToggleBeer(toggleBeer = true)} />

//                     { toggleBeersStar === false

//                     ?

//                     <h5 className="starnav-beer" style={{ position: 'absolute',  left: 291, top: 109}} >Beers</h5>

//                     :

//                     <h5 id="star-nav-beer" className="starnav-beer" style={{ position: 'absolute',  left: 291, top: 109}} >Beers</h5>

//                     }

//                     <area shape="circle" coords="390, 318, 45" alt="Food" href="#food" data-title="Food" className="star" onMouseOver={ () => setToggleFoodStar(toggleFoodStar = true) } onMouseOut={ () => setToggleFoodStar(toggleFoodStar = false) } onClick={() => setToggleBeer(toggleBeer = false)} />

//                     { toggleFoodStar === false

//                     ?

//                     <h5 className="starnav-food" style={{ position: 'absolute',  left: 369, top: 188}} >Food</h5>

//                     :

//                     <h5 id="star-nav-food" className="starnav-food" style={{ position: 'absolute',  left: 369, top: 188}} >Food</h5>

//                     }

//                     <area shape="circle" coords="385, 420, 45" alt="Team" href="#team" data-title="Team" className="star" onMouseOver={ () => setToggleTeamStar(toggleTeamStar = true) } onMouseOut={ () => setToggleTeamStar(toggleTeamStar = false) } />

//                     { toggleTeamStar === false

//                     ?

//                     <h5 className="starnav-team" style={{ position: 'absolute',  left: 360, top: 292}} >Team</h5>

//                     :

//                     <h5 id="star-nav-team" className="starnav-team" style={{ position: 'absolute',  left: 360, top: 292}} >Team</h5>

//                     }

//                     <area shape="circle" coords="567, 365, 45" alt="Testimonials" href="#testimonials" data-title="Feedback" className="star" onMouseOver={ () => setToggleFeedbackStar(toggleFeedbackStar = true) } onMouseOut={ () => setToggleFeedbackStar(toggleFeedbackStar = false) } />

//                     { toggleFeedbackStar === false

//                     ?

//                     <h5 className="starnav-feedback" style={{ position: 'absolute',  left: 530, top: 245}} >Feedback</h5>

//                     :

//                     <h5 id="star-nav-feedback" className="starnav-feedback" style={{ position: 'absolute',  left: 530, top: 245}} >Feedback</h5>

//                     }

//                     <area shape="circle" coords="521, 475, 45" alt="Contact" href="#contact" data-title="Contact" className="star" onMouseOver={ () => setToggleContactStar(toggleContactStar = true) } onMouseOut={ () => setToggleContactStar(toggleContactStar = false) } />

//                     { toggleContactStar === false

//                     ?

//                     <h5 className="starnav-contact" style={{ position: 'absolute',  left: 487, top: 347}} >Contact</h5>

//                     :

//                     <h5 id="star-nav-contact" className="starnav-contact" style={{ position: 'absolute',  left: 487, top: 347}} >Contact</h5>

//                     }

//                 </map>
//                 </div>
//             </div>
//         </section>
//     </div>
// )
// }










// for large screen
// return (
//     <div>
//         <section className="home-section" id="home">
//             <div className="home-bg"></div>
//             <div className="container">
//                 <div className="row min-vh-100 align-items-center">
//                 <h2 className="intro">Welcome to Sky Bear Brewery!</h2>
//                 <img src="https://i.imgur.com/n0vdV8Y.png" alt="big dipper" useMap="#starmap" className="big-dipper" />
//                 <map name="starmap" className="starmap">
//                     <area shape="circle" coords="158, 170, 50" alt="Home" href="#home" data-title="Home" className="star" onMouseOver={ () => setToggleHomeStar(toggleHomeStar = true) } onMouseOut={ () => setToggleHomeStar(toggleHomeStar = false) } />
//                     { toggleHomeStar === false 

//                     ?

//                     <h5 className="starnav-home" style={{ position: 'absolute',  left: 41, top: -12}} >Home</h5>

//                     :

//                     <h5 id="star-nav-home" className="starnav-home" style={{ position: 'absolute',  left: 41, top: -12}} >Home</h5>

//                     }

//                     <area shape="circle" coords="318, 198, 50" alt="About" href="#about" data-title="About Us" className="star" onMouseOver={ () => setToggleAboutStar(toggleAboutStar = true) } onMouseOut={ () => setToggleAboutStar(toggleAboutStar = false) } />

//                     { toggleAboutStar === false

//                     ?

//                     <h5 className="starnav-about" style={{ position: 'absolute',  left: 200, top: 12}} >About</h5>

//                     :

//                     <h5 id="star-nav-about" className="starnav-about" style={{ position: 'absolute',  left: 200, top: 12}} >About</h5>

//                     }

//                     <area shape="circle" coords="398, 293, 50" alt="Beers" href="#beers" data-title="Beers" className="star" onClick={() => setToggleBeer(toggleBeer = true)} onMouseOver={ () => setToggleBeersStar(toggleBeersStar = true) } onMouseOut={ () => setToggleBeersStar(toggleBeersStar = false) } />

//                     { toggleBeersStar === false

//                     ?

//                     <h5 className="starnav-beer" style={{ position: 'absolute',  left: 280, top: 102}} >Beers</h5>

//                     :

//                     <h5 id="star-nav-beer" className="starnav-beer" style={{ position: 'absolute',  left: 280, top: 102}} >Beers</h5>

//                     }

//                     <area shape="circle" coords="491, 385, 50" alt="Food" href="#food" data-title="Food" className="star" onClick={() => setToggleBeer(toggleBeer = false)} onMouseOver={ () => setToggleFoodStar(toggleFoodStar = true) } onMouseOut={ () => setToggleFoodStar(toggleFoodStar = false) } />

//                     { toggleFoodStar === false

//                     ?

//                     <h5 className="starnav-food" style={{ position: 'absolute',  left: 378, top: 197}} >Food</h5>

//                     :

//                     <h5 id="star-nav-food" className="starnav-food" style={{ position: 'absolute',  left: 378, top: 197}} >Food</h5>

//                     }

//                     <area shape="circle" coords="480, 505, 50" alt="Team" href="#team" data-title="Team" className="star" onMouseOver={ () => setToggleTeamStar(toggleTeamStar = true) } onMouseOut={ () => setToggleTeamStar(toggleTeamStar = false) } />

//                     { toggleTeamStar === false

//                     ?

//                     <h5 className="starnav-team" style={{ position: 'absolute',  left: 368, top: 322}} >Team</h5>

//                     :

//                     <h5 id="star-nav-team" className="starnav-team" style={{ position: 'absolute',  left: 368, top: 322}} >Team</h5>

//                     }

//                     <area shape="circle" coords="711, 445, 50" alt="Testimonials" href="#testimonials" data-title="Feedback" className="star" onMouseOver={ () => setToggleFeedbackStar(toggleFeedbackStar = true) } onMouseOut={ () => setToggleFeedbackStar(toggleFeedbackStar = false) } />

//                     { toggleFeedbackStar === false

//                     ?

//                     <h5 className="starnav-feedback" style={{ position: 'absolute',  left: 583, top: 260}} >Feedback</h5>

//                     :

//                     <h5 id="star-nav-feedback" className="starnav-feedback" style={{ position: 'absolute',  left: 583, top: 260}} >Feedback</h5>

//                     }

//                     <area shape="circle" coords="650, 575, 50" alt="Contact" href="#contact" data-title="Contact" className="star" onMouseOver={ () => setToggleContactStar(toggleContactStar = true) } onMouseOut={ () => setToggleContactStar(toggleContactStar = false) } />

//                     { toggleContactStar === false

//                     ?

//                     <h5 className="starnav-contact" style={{ position: 'absolute',  left: 528, top: 380}} >Contact</h5>

//                     :

//                     <h5 id="star-nav-contact" className="starnav-contact" style={{ position: 'absolute',  left: 528, top: 380}} >Contact</h5>

//                     }
//                 </map>
//                 </div>
//             </div>
//         </section>
//     </div>
// )
// }











// should work??? why

// return (
//     window.addEventListener("resize", function () {
//         if (window.width < 575) {
//             return (
//                 <div>
//                     <section className="home-section" id="home">
//                         <div className="home-bg"></div>
//                         <div className="container">
//                             <div className="row min-vh-100 align-items-center">
//                                 <h2 className="intro">Welcome to Sky Bear Brewery!</h2>
//                                 <img src="https://i.imgur.com/n0vdV8Y.png" alt="big dipper" useMap="#starmap" className="big-dipper" />
//                                 <map name="starmap" className="starmap">
//                                     <area shape="circle" coords="65, 90, 30" alt="Home" href="#home" data-title="Home" className="star" onMouseOver={() => setToggleHomeStar(toggleHomeStar = true)} onMouseOut={() => setToggleHomeStar(toggleHomeStar = false)} />

//                                     {toggleHomeStar === false

//                                         ?

//                                         <h5 className="starnav-home" style={{ position: 'absolute', left: 215, top: 73 }} >Home</h5>

//                                         :

//                                         <h5 id="star-nav-home" className="starnav-home" style={{ position: 'absolute', left: 215, top: 73 }} >Home</h5>

//                                     }

//                                     <area shape="circle" coords="130, 100, 30" alt="About" href="#about" data-title="About Us" className="star" onMouseOver={() => setToggleAboutStar(toggleAboutStar = true)} onMouseOut={() => setToggleAboutStar(toggleAboutStar = false)} />

//                                     {toggleAboutStar === false

//                                         ?

//                                         <h5 className="starnav-about" style={{ position: 'absolute', left: 278, top: 85 }} >About</h5>

//                                         :

//                                         <h5 id="star-nav-about" className="starnav-about" style={{ position: 'absolute', left: 278, top: 85 }} >About</h5>

//                                     }

//                                     <area shape="circle" coords="160, 153, 30" alt="Beers" href="#beers" data-title="Beers" className="star" onClick={() => setToggleBeer(toggleBeer = true)} onMouseOver={() => setToggleBeersStar(toggleBeersStar = true)} onMouseOut={() => setToggleBeersStar(toggleBeersStar = false)} />

//                                     {toggleBeersStar === false

//                                         ?

//                                         <h5 className="starnav-beer" style={{ position: 'absolute', left: 313, top: 131 }} >Beers</h5>

//                                         :

//                                         <h5 id="star-nav-beer" className="starnav-beer" style={{ position: 'absolute', left: 313, top: 131 }} >Beers</h5>

//                                     }

//                                     <area shape="circle" coords="200, 200, 30" alt="Food" href="#food" data-title="Food" className="star" onClick={() => setToggleBeer(toggleBeer = false)} onMouseOver={() => setToggleFoodStar(toggleFoodStar = true)} onMouseOut={() => setToggleFoodStar(toggleFoodStar = false)} />

//                                     {toggleFoodStar === false

//                                         ?

//                                         <h5 className="starnav-food" style={{ position: 'absolute', left: 353, top: 180 }} >Food</h5>

//                                         :

//                                         <h5 id="star-nav-food" className="starnav-food" style={{ position: 'absolute', left: 353, top: 180 }} >Food</h5>

//                                     }

//                                     <area shape="circle" coords="198, 263, 28" alt="Team" href="#team" data-title="Team" className="star" onMouseOver={() => setToggleTeamStar(toggleTeamStar = true)} onMouseOut={() => setToggleTeamStar(toggleTeamStar = false)} />

//                                     {toggleTeamStar === false

//                                         ?

//                                         <h5 className="starnav-team" style={{ position: 'absolute', left: 349, top: 243 }} >Team</h5>

//                                         :

//                                         <h5 id="star-nav-team" className="starnav-team" style={{ position: 'absolute', left: 349, top: 243 }} >Team</h5>

//                                     }

//                                     <area shape="circle" coords="290, 225, 30" alt="Testimonials" href="#testimonials" data-title="Feedback" className="star" onMouseOver={() => setToggleFeedbackStar(toggleFeedbackStar = true)} onMouseOut={() => setToggleFeedbackStar(toggleFeedbackStar = false)} />

//                                     {toggleFeedbackStar === false

//                                         ?

//                                         <h5 className="starnav-feedback" style={{ position: 'absolute', left: 427, top: 214 }} >Feedback</h5>

//                                         :

//                                         <h5 id="star-nav-feedback" className="starnav-feedback" style={{ position: 'absolute', left: 427, top: 214 }} >Feedback</h5>

//                                     }

//                                     <area shape="circle" coords="265, 295, 30" alt="Contact" href="#contact" data-title="Contact" className="star" onMouseOver={() => setToggleContactStar(toggleContactStar = true)} onMouseOut={() => setToggleContactStar(toggleContactStar = false)} />

//                                     {toggleContactStar === false

//                                         ?

//                                         <h5 className="starnav-contact" style={{ position: 'absolute', left: 408, top: 277 }} >Contact</h5>

//                                         :

//                                         <h5 id="star-nav-contact" className="starnav-contact" style={{ position: 'absolute', left: 408, top: 277 }} >Contact</h5>

//                                     }

//                                 </map>
//                             </div>
//                         </div>
//                     </section>
//                 </div>
//             )
//         }
//         else if (window.width > 991) {
//             return (
//                 <div>
//                     <section className="home-section" id="home">
//                         <div className="home-bg"></div>
//                         <div className="container">
//                             <div className="row min-vh-100 align-items-center">
//                                 <h2 className="intro">Welcome to Sky Bear Brewery!</h2>
//                                 <img src="https://i.imgur.com/n0vdV8Y.png" alt="big dipper" useMap="#starmap" className="big-dipper" />
//                                 <map name="starmap" className="starmap">
//                                     <area shape="circle" coords="158, 170, 50" alt="Home" href="#home" data-title="Home" className="star" onMouseOver={() => setToggleHomeStar(toggleHomeStar = true)} onMouseOut={() => setToggleHomeStar(toggleHomeStar = false)} />
//                                     {toggleHomeStar === false

//                                         ?

//                                         <h5 className="starnav-home" style={{ position: 'absolute', left: 41, top: -12 }} >Home</h5>

//                                         :

//                                         <h5 id="star-nav-home" className="starnav-home" style={{ position: 'absolute', left: 41, top: -12 }} >Home</h5>

//                                     }

//                                     <area shape="circle" coords="318, 198, 50" alt="About" href="#about" data-title="About Us" className="star" onMouseOver={() => setToggleAboutStar(toggleAboutStar = true)} onMouseOut={() => setToggleAboutStar(toggleAboutStar = false)} />

//                                     {toggleAboutStar === false

//                                         ?

//                                         <h5 className="starnav-about" style={{ position: 'absolute', left: 200, top: 12 }} >About</h5>

//                                         :

//                                         <h5 id="star-nav-about" className="starnav-about" style={{ position: 'absolute', left: 200, top: 12 }} >About</h5>

//                                     }

//                                     <area shape="circle" coords="398, 293, 50" alt="Beers" href="#beers" data-title="Beers" className="star" onClick={() => setToggleBeer(toggleBeer = true)} onMouseOver={() => setToggleBeersStar(toggleBeersStar = true)} onMouseOut={() => setToggleBeersStar(toggleBeersStar = false)} />

//                                     {toggleBeersStar === false

//                                         ?

//                                         <h5 className="starnav-beer" style={{ position: 'absolute', left: 280, top: 102 }} >Beers</h5>

//                                         :

//                                         <h5 id="star-nav-beer" className="starnav-beer" style={{ position: 'absolute', left: 280, top: 102 }} >Beers</h5>

//                                     }

//                                     <area shape="circle" coords="491, 385, 50" alt="Food" href="#food" data-title="Food" className="star" onClick={() => setToggleBeer(toggleBeer = false)} onMouseOver={() => setToggleFoodStar(toggleFoodStar = true)} onMouseOut={() => setToggleFoodStar(toggleFoodStar = false)} />

//                                     {toggleFoodStar === false

//                                         ?

//                                         <h5 className="starnav-food" style={{ position: 'absolute', left: 378, top: 197 }} >Food</h5>

//                                         :

//                                         <h5 id="star-nav-food" className="starnav-food" style={{ position: 'absolute', left: 378, top: 197 }} >Food</h5>

//                                     }

//                                     <area shape="circle" coords="480, 505, 50" alt="Team" href="#team" data-title="Team" className="star" onMouseOver={() => setToggleTeamStar(toggleTeamStar = true)} onMouseOut={() => setToggleTeamStar(toggleTeamStar = false)} />

//                                     {toggleTeamStar === false

//                                         ?

//                                         <h5 className="starnav-team" style={{ position: 'absolute', left: 368, top: 322 }} >Team</h5>

//                                         :

//                                         <h5 id="star-nav-team" className="starnav-team" style={{ position: 'absolute', left: 368, top: 322 }} >Team</h5>

//                                     }

//                                     <area shape="circle" coords="711, 445, 50" alt="Testimonials" href="#testimonials" data-title="Feedback" className="star" onMouseOver={() => setToggleFeedbackStar(toggleFeedbackStar = true)} onMouseOut={() => setToggleFeedbackStar(toggleFeedbackStar = false)} />

//                                     {toggleFeedbackStar === false

//                                         ?

//                                         <h5 className="starnav-feedback" style={{ position: 'absolute', left: 583, top: 260 }} >Feedback</h5>

//                                         :

//                                         <h5 id="star-nav-feedback" className="starnav-feedback" style={{ position: 'absolute', left: 583, top: 260 }} >Feedback</h5>

//                                     }

//                                     <area shape="circle" coords="650, 575, 50" alt="Contact" href="#contact" data-title="Contact" className="star" onMouseOver={() => setToggleContactStar(toggleContactStar = true)} onMouseOut={() => setToggleContactStar(toggleContactStar = false)} />

//                                     {toggleContactStar === false

//                                         ?

//                                         <h5 className="starnav-contact" style={{ position: 'absolute', left: 528, top: 380 }} >Contact</h5>

//                                         :

//                                         <h5 id="star-nav-contact" className="starnav-contact" style={{ position: 'absolute', left: 528, top: 380 }} >Contact</h5>

//                                     }
//                                 </map>
//                             </div>
//                         </div>
//                     </section>
//                 </div>
//             )
//         }
//         else {
//             return (
//                 <div>
//                     <section className="home-section" id="home">
//                         <div className="home-bg"></div>
//                         <div className="container">
//                             <div className="row min-vh-100 align-items-center">
//                                 <h2 className="intro">Welcome to Sky Bear Brewery!</h2>
//                                 <img src="https://i.imgur.com/n0vdV8Y.png" alt="big dipper" useMap="#starmap" className="big-dipper" />
//                                 <map name="starmap" className="starmap">
//                                     <area shape="circle" coords="130, 136, 45" alt="Home" href="#home" data-title="Home" className="star" onMouseOver={() => setToggleHomeStar(toggleHomeStar = true)} onMouseOut={() => setToggleHomeStar(toggleHomeStar = false)} />

//                                     {toggleHomeStar === false

//                                         ?

//                                         <h5 className="starnav-home" style={{ position: 'absolute', left: 101, top: 17 }} >Home</h5>

//                                         :

//                                         <h5 id="star-nav-home" className="starnav-home" style={{ position: 'absolute', left: 101, top: 17 }} >Home</h5>

//                                     }

//                                     <area shape="circle" coords="252, 158, 45" alt="About" href="#about" data-title="About Us" className="star" onMouseOver={() => setToggleAboutStar(toggleAboutStar = true)} onMouseOut={() => setToggleAboutStar(toggleAboutStar = false)} />

//                                     {toggleAboutStar === false

//                                         ?

//                                         <h5 className="starnav-about" style={{ position: 'absolute', left: 223, top: 38 }} >About</h5>

//                                         :

//                                         <h5 id="star-nav-about" className="starnav-about" style={{ position: 'absolute', left: 223, top: 38 }} >About</h5>

//                                     }

//                                     <area shape="circle" coords="315, 233, 45" alt="Beers" href="#beers" data-title="Beers" className="star" onMouseOver={() => setToggleBeersStar(toggleBeersStar = true)} onMouseOut={() => setToggleBeersStar(toggleBeersStar = false)} onClick={() => setToggleBeer(toggleBeer = true)} />

//                                     {toggleBeersStar === false

//                                         ?

//                                         <h5 className="starnav-beer" style={{ position: 'absolute', left: 291, top: 109 }} >Beers</h5>

//                                         :

//                                         <h5 id="star-nav-beer" className="starnav-beer" style={{ position: 'absolute', left: 291, top: 109 }} >Beers</h5>

//                                     }

//                                     <area shape="circle" coords="390, 318, 45" alt="Food" href="#food" data-title="Food" className="star" onMouseOver={() => setToggleFoodStar(toggleFoodStar = true)} onMouseOut={() => setToggleFoodStar(toggleFoodStar = false)} onClick={() => setToggleBeer(toggleBeer = false)} />

//                                     {toggleFoodStar === false

//                                         ?

//                                         <h5 className="starnav-food" style={{ position: 'absolute', left: 369, top: 188 }} >Food</h5>

//                                         :

//                                         <h5 id="star-nav-food" className="starnav-food" style={{ position: 'absolute', left: 369, top: 188 }} >Food</h5>

//                                     }

//                                     <area shape="circle" coords="385, 420, 45" alt="Team" href="#team" data-title="Team" className="star" onMouseOver={() => setToggleTeamStar(toggleTeamStar = true)} onMouseOut={() => setToggleTeamStar(toggleTeamStar = false)} />

//                                     {toggleTeamStar === false

//                                         ?

//                                         <h5 className="starnav-team" style={{ position: 'absolute', left: 360, top: 292 }} >Team</h5>

//                                         :

//                                         <h5 id="star-nav-team" className="starnav-team" style={{ position: 'absolute', left: 360, top: 292 }} >Team</h5>

//                                     }

//                                     <area shape="circle" coords="567, 365, 45" alt="Testimonials" href="#testimonials" data-title="Feedback" className="star" onMouseOver={() => setToggleFeedbackStar(toggleFeedbackStar = true)} onMouseOut={() => setToggleFeedbackStar(toggleFeedbackStar = false)} />

//                                     {toggleFeedbackStar === false

//                                         ?

//                                         <h5 className="starnav-feedback" style={{ position: 'absolute', left: 530, top: 245 }} >Feedback</h5>

//                                         :

//                                         <h5 id="star-nav-feedback" className="starnav-feedback" style={{ position: 'absolute', left: 530, top: 245 }} >Feedback</h5>

//                                     }

//                                     <area shape="circle" coords="521, 475, 45" alt="Contact" href="#contact" data-title="Contact" className="star" onMouseOver={() => setToggleContactStar(toggleContactStar = true)} onMouseOut={() => setToggleContactStar(toggleContactStar = false)} />

//                                     {toggleContactStar === false

//                                         ?

//                                         <h5 className="starnav-contact" style={{ position: 'absolute', left: 487, top: 347 }} >Contact</h5>

//                                         :

//                                         <h5 id="star-nav-contact" className="starnav-contact" style={{ position: 'absolute', left: 487, top: 347 }} >Contact</h5>

//                                     }

//                                 </map>
//                             </div>
//                         </div>
//                     </section>
//                 </div>
//             )
//         }
//     }
//     )
// )
// };