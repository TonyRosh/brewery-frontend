import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBeer } from '@fortawesome/free-solid-svg-icons'

function Reviews() {


    return (
        <div>
            <section className="testimonials-section sec-padding" id="testimonials">
                <div className="container">
                    <div className="row">
                        <div className="section-title">
                            <h2 data-title="testimonials" data-aos="fade-up" data-aos-duration="500">Feed Back</h2>
                        </div>
                    </div>
                    <div className="row">

                        <div className="testi-item" data-aos="zoom-in" data-aos-duration="1000">
                            <div className="testi-author">
                                <div className="testi-author-name">
                                    <h3>Ray Volpe</h3>
                                    <span>food specialist</span>
                                </div>
                                <div className="testi-author-img">
                                    <img src="https://i.imgur.com/Cf7WUXz.jpg" alt="testi author" />
                                </div>
                            </div>
                            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</p>
                            <div className="ratings">
                                <FontAwesomeIcon icon={faBeer} />
                                <FontAwesomeIcon icon={faBeer} />
                                <FontAwesomeIcon icon={faBeer} />
                                <FontAwesomeIcon icon={faBeer} />
                                <FontAwesomeIcon icon={faBeer} />
                            </div>
                        </div>

                        <div className="testi-item" data-aos="zoom-in" data-aos-duration="1250">
                            <div className="testi-author">
                                <div className="testi-author-name">
                                    <h3>Nitti Gritti</h3>
                                    <span>food specialist</span>
                                </div>
                                <div className="testi-author-img">
                                    <img src="https://i.imgur.com/PydGTRK.jpg" alt="testi author" />
                                </div>
                            </div>
                            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</p>
                            <div className="ratings">
                                <FontAwesomeIcon icon={faBeer} />
                                <FontAwesomeIcon icon={faBeer} />
                                <FontAwesomeIcon icon={faBeer} />
                                <FontAwesomeIcon icon={faBeer} />
                                <FontAwesomeIcon icon={faBeer} />
                            </div>
                        </div>

                        <div className="testi-item" data-aos="zoom-in" data-aos-duration="1500">
                            <div className="testi-author">
                                <div className="testi-author-name">
                                    <h3>Sippy</h3>
                                    <span>food specialist</span>
                                </div>
                                <div className="testi-author-img">
                                    <img src="https://i.imgur.com/oqcbpSX.jpg" alt="testi author" />
                                </div>
                            </div>
                            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</p>
                            <div className="ratings">
                                <FontAwesomeIcon icon={faBeer} />
                                <FontAwesomeIcon icon={faBeer} />
                                <FontAwesomeIcon icon={faBeer} />
                                <FontAwesomeIcon icon={faBeer} />
                                <FontAwesomeIcon icon={faBeer} />
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default Reviews
