import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

function About() {
    return (
        <div>
            <section className='about-section sec-padding' id='about'>
            <h1>Sky Bear Brewery Will Be Opening Soon!</h1>
                <div className='container'>
                    <div className='row'>
                        <div className='section-title'>
                            <h2 data-title='our story' data-aos='fade-up' data-aos-duration='500' >About Us</h2>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='about-text' data-aos='fade-right' data-aos-duration='5000'>
                        <img src='https://i.imgur.com/5GhS1US.png' alt='logo'/>
                        <br/>
                        <br/>
                            <p>Sky Bear Brewery & Pub is family owned and operated, run by daughter Amanda
                                and her parents Mark and Linda. Amanda has over 10 years of experience in the
                                restaurant industry and Mark has been brewing homebrew beer for his family and
                                friends for close to a decade. Putting together the family’s love of enjoying beer
                                and spirits together, Mark’s passion for brewing beer, Linda’s love for family and
                                meeting new friends, and Amanda’s passion for hospitality we believe we can
                                create a great experience for any guest who walks through the door.
                                To date the beer has been brewed at Mark and Linda’s residence located on Sky
                                Bear Trail in Colorado. With Amanda living in Loveland, we decided it was time to
                                bring our delicious family beer to Loveland. We have found a turn of the century
                                building downtown that we plan to preserve with Loveland’s history. We hope to
                                see you soon, where we can extend a warm welcome from our family to you!</p>
                            <a href='#happy-hour' className='btn btn-default' data-aos='flip-down' data-aos-duration='1000'>Check Out Our Happy Hour!</a>
                        </div>
                        <div className='about-img' data-aos='fade-left'
                            data-aos-offset='300'
                            data-aos-easing='ease-in-sine' data-aos-duration='500'>
                            <div class='img-box' >
                                <h3>Proudly Brewing Colorado Beer</h3>
                                <Carousel autoPlay={true} 
                                infiniteLoop={true}
                                showArrows={false}
                                showThumbs={false}
                                interval={4000}
                                showIndicators={false}
                                useKeyboardArrows={true}
                                >
                <div>
                <img src='https://i.imgur.com/oc5Z73E.png' alt='beer in the mountains' />
                </div>
                <div>
                <img src='https://i.imgur.com/fCPLYjI.jpg' alt='the brewery owners' />
                </div>
                <div>
                <img src='https://i.imgur.com/AU0RiVr.jpg' alt='beer in the mountains' />
                </div>
                <div>
                <img src='https://i.imgur.com/Iaup3GX.jpg' alt='beer in the mountains' />
                </div>
                <div>
                <img src='https://i.imgur.com/xHAvi5A.jpg' alt='beer in the mountains' />
                </div>
                <div>
                <img src='https://i.imgur.com/T04rYU5.jpg' alt='beer in the mountains' />
                </div>
                <div>
                <img src='https://i.imgur.com/C4VyRUJ.jpg' alt='beer in the mountains' />
                </div>
                <div>
                <img src='https://i.imgur.com/hBdfm3r.jpg' alt='beer in the mountains' />
                </div>
                <div>
                <img src='https://i.imgur.com/axjZ9pn.jpg' alt='beer in the mountains' />
                </div>
                <div>
                <img src='https://i.imgur.com/dCtRZIj.jpg' alt='beer in the mountains' />
                </div>
                <div>
                <img src='https://i.imgur.com/9okUG9U.jpg' alt='beer in the mountains' />
                </div>
            </Carousel>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About
