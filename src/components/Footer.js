import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'

function Footer() {


    return (
        <div>
            <footer className='footer' id='contact'>
                <div className='container'>
                    <div className='row'>
                        <div className='footer-item'>
                            <h3 data-aos='fade-up'>Our Location</h3>
                            <p data-aos='fade-up' data-aos-duration='1000'>272 East 5th Street Loveland, CO 80537</p>
                        </div>
                        <div className='footer-item'>
                            <h3 data-aos='fade-up'>Our Hours</h3>
                            <p data-aos='fade-up' data-aos-duration='1000'>Monday:<br /> Closed</p>
                            <p data-aos='fade-up' data-aos-duration='1000'>Tuesday - Thursday: <br /> 11am - 10pm</p>
                            <p data-aos='fade-up' data-aos-duration='1200'>Friday and Saturday: <br /> 11am - 11pm</p>
                            <p data-aos='fade-up' data-aos-duration='1300'>Sunday: <br /> 11am - 10pm</p>
                        </div>
                        <div className='footer-item'>
                            <h3 data-aos='fade-up'>Contact Us</h3>
                            <div className='phone-div' data-aos='fade-up' data-aos-duration='1000'>
                            <a className='phone' href="tel:970-744-6300">(970) 744-6300</a>
                            </div>
                            <br />
                            <div className='email-div' data-aos='fade-up' data-aos-duration='1200'>
                            <a className='email' href="mailto:skybearbreweryandpub@gmail.com">Email Us!</a>
                            </div>
                            <div className='social-links' data-aos='fade-up' data-aos-duration='1300'>
                                <a href='https://www.facebook.com/Skybearbreweryandpub'><FontAwesomeIcon icon={faFacebookF} /></a>
                                <a href='https://www.instagram.com/skybearbreweryandpub/'><FontAwesomeIcon icon={faInstagram} /></a>
                            </div>
                        </div>
                    </div>
                    <div><h2>Sky Bear Brewery Will Be Opening Soon!</h2></div>
                    <div className='row'>
                        <div className='copyright'>
                            &copy; {new Date().getFullYear()} - Powered by CoffeeFreaks ☕️
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
