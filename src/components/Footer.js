import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'

function Footer() {


    return (
        <div>
            <footer className="footer" id="contact">
                <div className="container">
                    <div className="row">
                        <div className="footer-item">
                            <h3 data-aos="fade-up">Our Location</h3>
                            <p data-aos="fade-up" data-aos-duration="1000">5413 Cherly St, Loveland, CO 80538</p>
                        </div>
                        <div className="footer-item">
                            <h3 data-aos="fade-up">Our Hours</h3>
                            <p data-aos="fade-up" data-aos-duration="1000">Monday - Thursday <br /> Noon - 10pm</p>
                            <p data-aos="fade-up" data-aos-duration="1200">Friday and Saturday <br /> 11am - Midnight</p>
                            <p data-aos="fade-up" data-aos-duration="1300">Sunday <br /> Noon - 9pm</p>
                        </div>
                        <div className="footer-item">
                            <h3 data-aos="fade-up">Contact Us</h3>
                            <p data-aos="fade-up" data-aos-duration="1000">970-173-8153</p>
                            <p data-aos="fade-up" data-aos-duration="1200">SkyBearBrewery@gmail.com</p>
                            <div className="social-links" data-aos="fade-up" data-aos-duration="1300">
                                <a href="#contact"><FontAwesomeIcon icon={faFacebookF} /></a>
                                <a href="#contact"><FontAwesomeIcon icon={faInstagram} /></a>
                                <a href="#contact"><FontAwesomeIcon icon={faTwitter} /></a>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="copyright">
                            &copy; {new Date().getFullYear()} - Powered by CoffeeFreaks ☕️
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
