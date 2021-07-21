import React from 'react'

function About() {
    return (
        <div>
            <section className="about-section sec-padding" id="about">
                <div className="container">
                    <div className="row">
                        <div className="section-title">
                            <h2 data-title="our story" data-aos="fade-up" data-aos-duration="500" >About Us</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="about-text" data-aos="fade-right" data-aos-duration="5000">
                            <h3>Welcome to Sky Bear Brewery & Pub!</h3>
                            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>

                            <p >"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</p>
                            <a href="#happy-hour" className="btn btn-default" data-aos="flip-down" data-aos-duration="1000">Check Out Our Happy Hour!</a>
                        </div>
                        <div className="about-img" data-aos="fade-left"
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine" data-aos-duration="500">
                            <div class="img-box" >
                                <h3>Proudly Brewing Coloardo Beer</h3>
                                <img src="https://i.imgur.com/eRSqhAv.jpg" alt="beer in the mountains" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About
