import React from 'react'

function Home(props) {

    let toggleBeer = props.toggleBeer
    let setToggleBeer = props.setToggleBeer
    
    let homeNavVisible = () => {
        document.getElementById('starnav-home').style.opacity = 1
        document.getElementById('starnav-home').style.transform = 'scale(1)'
    }
    
    let homeNavInvisible = () => {
        document.getElementById('starnav-home').style.opacity = 0.45
        document.getElementById('starnav-home').style.transform = 'scale(0.95)'
    }
    
    let aboutNavVisible = () => {
        document.getElementById('starnav-about').style.opacity = 1
        document.getElementById('starnav-about').style.transform = 'scale(1)'
    }
    
    let aboutNavInvisible = () => {
        document.getElementById('starnav-about').style.opacity = 0.45
        document.getElementById('starnav-about').style.transform = 'scale(0.95)'
    }
    
    let beerNavVisible = () => {
        document.getElementById('starnav-beer').style.opacity = 1
        document.getElementById('starnav-beer').style.transform = 'scale(1)'
    }
    
    let beerNavInvisible = () => {
        document.getElementById('starnav-beer').style.opacity = 0.45
        document.getElementById('starnav-beer').style.transform = 'scale(0.95)'
    }
    
    let foodNavVisible = () => {
        document.getElementById('starnav-food').style.opacity = 1
        document.getElementById('starnav-food').style.transform = 'scale(1)'
    }
    
    let foodNavInvisible = () => {
        document.getElementById('starnav-food').style.opacity = 0.45
        document.getElementById('starnav-food').style.transform = 'scale(0.95)'
    }
    
    let teamNavVisible = () => {
        document.getElementById('starnav-team').style.opacity = 1
        document.getElementById('starnav-team').style.transform = 'scale(1)'
    }
    
    let teamNavInvisible = () => {
        document.getElementById('starnav-team').style.opacity = 0.45
        document.getElementById('starnav-team').style.transform = 'scale(0.95)'
    }
    
    let feedbackNavVisible = () => {
        document.getElementById('starnav-feedback').style.opacity = 1
        document.getElementById('starnav-feedback').style.transform = 'scale(1)'
    }
    
    let feedbackNavInvisible = () => {
        document.getElementById('starnav-feedback').style.opacity = 0.45
        document.getElementById('starnav-feedback').style.transform = 'scale(0.95)'
    }
    
    let contactNavVisible = () => {
        document.getElementById('starnav-contact').style.opacity = 1
        document.getElementById('starnav-contact').style.transform = 'scale(1)'
    }
    
    let contactNavInvisible = () => {
        document.getElementById('starnav-contact').style.opacity = 0.45
        document.getElementById('starnav-contact').style.transform = 'scale(0.95)'
    }

    return (
            <div>
                <section className="home-section" id="home">
                    <div className="home-bg"></div>
                    <div className="container">
                        <div className="row min-vh-100 align-items-center">
                        <h2 className="intro">Welcome to Sky Bear Brewery!</h2>
                        <img src="https://i.imgur.com/n0vdV8Y.png" alt="big dipper" useMap="#starmap" className="big-dipper" />
                        <map name="starmap" className="starmap">
                            <area shape="circle" coords="130, 136, 25" alt="Home" href="#home" data-title="Home" className="star" onMouseOver={homeNavVisible} onMouseOut={homeNavInvisible} />
                            <h5 id="starnav-home" style={{ position: 'absolute',  left: 101, top: 17}} >Home</h5>
                            <area shape="circle" coords="252, 158, 25" alt="About" href="#about" data-title="About Us" className="star" onMouseOver={aboutNavVisible} onMouseOut={aboutNavInvisible}/>
                            <h5 id="starnav-about" style={{ position: 'absolute',  left: 223, top: 38}} >About</h5>
                            <area shape="circle" coords="315, 233, 25" alt="Beers" href="#beers" data-title="Beers" className="star" onClick={() => setToggleBeer(toggleBeer = true)} onMouseOver={beerNavVisible} onMouseOut={beerNavInvisible}/>
                            <h5 id="starnav-beer" style={{ position: 'absolute',  left: 291, top: 109}} >Beers</h5>
                            <area shape="circle" coords="390, 318, 25" alt="Food" href="#food" data-title="Food" className="star" onClick={() => setToggleBeer(toggleBeer = false)} onMouseOver={foodNavVisible} onMouseOut={foodNavInvisible}/>
                            <h5 id="starnav-food" style={{ position: 'absolute',  left: 369, top: 188}} >Food</h5>
                            <area shape="circle" coords="385, 420, 25" alt="Team" href="#team" data-title="Team" className="star" onMouseOver={teamNavVisible} onMouseOut={teamNavInvisible}/>
                            <h5 id="starnav-team" style={{ position: 'absolute',  left: 360, top: 292}} >Team</h5>
                            <area shape="circle" coords="567, 365, 25" alt="Testimonials" href="#testimonials" data-title="Feedback" className="star" onMouseOver={feedbackNavVisible} onMouseOut={feedbackNavInvisible}/>
                            <h5 id="starnav-feedback" style={{ position: 'absolute',  left: 530, top: 245}} >Feedback</h5>
                            <area shape="circle" coords="521, 475, 25" alt="Contact" href="#contact" data-title="Contact" className="star"onMouseOver={contactNavVisible} onMouseOut={contactNavInvisible}/>
                            <h5 id="starnav-contact" style={{ position: 'absolute',  left: 487, top: 347}} >Contact</h5>
                        </map>
                        </div>
                    </div>
                </section>
            </div>
        )
        }

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
//                     <area shape="circle" coords="128, 105, 25" alt="Home" href="#home" data-title="Home" className="star" onMouseOver={homeNavVisible} onMouseOut={homeNavInvisible} />
//                     <h5 id="starnav-home" style={{ position: 'absolute',  left: 41, top: -12}} >Home</h5>
//                     <area shape="circle" coords="252, 125, 25" alt="About" href="#about" data-title="About Us" className="star" onMouseOver={aboutNavVisible} onMouseOut={aboutNavInvisible}/>
//                     <h5 id="starnav-about" style={{ position: 'absolute',  left: 200, top: 12}} >About</h5>
//                     <area shape="circle" coords="313, 188, 25" alt="Beers" href="#beers" data-title="Beers" className="star" onClick={() => setToggleBeer(toggleBeer = true)} onMouseOver={beerNavVisible} onMouseOut={beerNavInvisible}/>
//                     <h5 id="starnav-beer" style={{ position: 'absolute',  left: 280, top: 102}} >Beers</h5>
//                     <area shape="circle" coords="388, 247, 25" alt="Food" href="#food" data-title="Food" className="star" onClick={() => setToggleBeer(toggleBeer = false)} onMouseOver={foodNavVisible} onMouseOut={foodNavInvisible}/>
//                     <h5 id="starnav-food" style={{ position: 'absolute',  left: 378, top: 197}} >Food</h5>
//                     <area shape="circle" coords="385, 330, 25" alt="Team" href="#team" data-title="Team" className="star" onMouseOver={teamNavVisible} onMouseOut={teamNavInvisible}/>
//                     <h5 id="starnav-team" style={{ position: 'absolute',  left: 368, top: 322}} >Team</h5>
//                     <area shape="circle" coords="570, 285, 25" alt="Testimonials" href="#testimonials" data-title="Feedback" className="star" onMouseOver={feedbackNavVisible} onMouseOut={feedbackNavInvisible}/>
//                     <h5 id="starnav-feedback" style={{ position: 'absolute',  left: 583, top: 260}} >Feedback</h5>
//                     <area shape="circle" coords="525, 375, 25" alt="Contact" href="#contact" data-title="Contact" className="star"onMouseOver={contactNavVisible} onMouseOut={contactNavInvisible}/>
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
//                     <area shape="circle" coords="128, 105, 25" alt="Home" href="#home" data-title="Home" className="star" onMouseOver={homeNavVisible} onMouseOut={homeNavInvisible} />
//                     <h5 id="starnav-home" style={{ position: 'absolute',  left: 101, top: 17}} >Home</h5>
//                     <area shape="circle" coords="252, 125, 25" alt="About" href="#about" data-title="About Us" className="star" onMouseOver={aboutNavVisible} onMouseOut={aboutNavInvisible}/>
//                     <h5 id="starnav-about" style={{ position: 'absolute',  left: 225, top: 36}} >About</h5>
//                     <area shape="circle" coords="313, 188, 25" alt="Beers" href="#beers" data-title="Beers" className="star" onClick={() => setToggleBeer(toggleBeer = true)} onMouseOver={beerNavVisible} onMouseOut={beerNavInvisible}/>
//                     <h5 id="starnav-beer" style={{ position: 'absolute',  left: 291, top: 109}} >Beers</h5>
//                     <area shape="circle" coords="388, 247, 25" alt="Food" href="#food" data-title="Food" className="star" onClick={() => setToggleBeer(toggleBeer = false)} onMouseOver={foodNavVisible} onMouseOut={foodNavInvisible}/>
//                     <h5 id="starnav-food" style={{ position: 'absolute',  left: 369, top: 188}} >Food</h5>
//                     <area shape="circle" coords="385, 330, 25" alt="Team" href="#team" data-title="Team" className="star" onMouseOver={teamNavVisible} onMouseOut={teamNavInvisible}/>
//                     <h5 id="starnav-team" style={{ position: 'absolute',  left: 360, top: 292}} >Team</h5>
//                     <area shape="circle" coords="570, 285, 25" alt="Testimonials" href="#testimonials" data-title="Feedback" className="star" onMouseOver={feedbackNavVisible} onMouseOut={feedbackNavInvisible}/>
//                     <h5 id="starnav-feedback" style={{ position: 'absolute',  left: 530, top: 245}} >Feedback</h5>
//                     <area shape="circle" coords="525, 375, 25" alt="Contact" href="#contact" data-title="Contact" className="star"onMouseOver={contactNavVisible} onMouseOut={contactNavInvisible}/>
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