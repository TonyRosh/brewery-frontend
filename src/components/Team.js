import React from 'react'


function Team() {
    return (
        <div>
            <section className='team-section sec-padding' id='team'>
                <div className='container'>
                    <div className='row'>
                        <div className='section-title'>
                            <h2 data-title='Get To Know Us!' data-aos='fade-up' data-aos-duration='500'>The Crew</h2>
                        </div>
                    </div>
                    <div className='row'>

                        <div className='team-item'></div>

                        <div className='team-item' data-aos='flip-left' data-aos-duration='1000'>
                            <img src='https://i.imgur.com/BNmBjea.jpg' alt='brewer' />
                            <div className='team-item-info'>
                                <h3>The Kissel Family</h3>
                                <p>We hope you enjoy your brews! <br /> - Mark, Linda, and Amanda.</p>
                            </div>
                        </div>

                        <div className='team-item'></div>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default Team
