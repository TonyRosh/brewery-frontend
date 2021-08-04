import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBeer } from '@fortawesome/free-solid-svg-icons'
import { faBacon } from '@fortawesome/free-solid-svg-icons'


function HappyHour() {

    return (
        <div>
            <section className='happy-hour-section sec-padding' id='happy-hour'>
                <div className='container'>
                    <div className='row'>
                        <div className='section-title'>
                            <h2 data-title='The best hour...' data-aos='fade-up' data-aos-duration='500' className="happy-hour-title">Happy Hour</h2>
                            <br/>
                            <h5 className="happy-hour-hours">Mon-Thurs: 4-6PM</h5>
                            <br/>
                            <h5 className="happy-hour-hours">Friday and Saturday: 4-6pm | Weekend Late-night: 10pm-Close</h5>
                            <br/>
                            <h5 className="happy-hour-hours">Sunday: 5pm-Close</h5>
                        </div>
                    </div>
                    <div className='row'>

                        <div className='happy-hour-item' data-aos='zoom-in' data-aos-duration='1000'>
                            <div className='happy-hour-author'>
                                <div className='happy-hour-author-name'>
                                    <h2 className='happy-hour-title'>Thirsty?</h2>
                                    <span>Happy Hour Drinks</span>
                                </div>
                                <div className='happy-hour-author-img'>
                                    <img src='https://i.imgur.com/OfjH4VD.jpg' alt='happy-hour author' />
                                </div>
                            </div>
                            <p><FontAwesomeIcon icon={faBeer} className='happy-hour-icon' /> All beers on tap are 50% off!
                            <br/>
                            <br/><FontAwesomeIcon icon={faBeer} className='happy-hour-icon' /> Bottled beers buy 1 get 1 free!
                            <br/>
                            <br/><FontAwesomeIcon icon={faBeer} className='happy-hour-icon' /> $5 well drinks!
                            <br/>
                            <br/><FontAwesomeIcon icon={faBeer} className='happy-hour-icon' /> $10 beer flights!</p>
                        </div>

                        <div className='happy-hour-item' data-aos='zoom-in' data-aos-duration='1250'>
                            <div className='happy-hour-author'>
                                <div className='happy-hour-author-name'>
                                    <h2>Hungry?</h2>
                                    <span>Happy Hour Food</span>
                                </div>
                                <div className='happy-hour-author-img'>
                                    <img src='https://i.imgur.com/Zozk9I3.jpg' alt='happy-hour author' />
                                </div>
                            </div>
                            <p><FontAwesomeIcon icon={faBacon} className='happy-hour-icon' /> $5 Quesadillas!
                            <br/>
                            <br/><FontAwesomeIcon icon={faBacon} className='happy-hour-icon' /> $5 Nachos!
                            <br/>
                            <br/><FontAwesomeIcon icon={faBacon} className='happy-hour-icon' /> $2.50 Basket Of Fries!
                            <br/>
                            <br/><FontAwesomeIcon icon={faBacon} className='happy-hour-icon' /> Free Chips and Salsa on Request w/ Beer Purchase!</p>
                        </div>

                    </div>

                </div>
            </section>
        </div>
    )
}

export default HappyHour
