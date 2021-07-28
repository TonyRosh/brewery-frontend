import React from 'react'


function Team() {
    return (
        <div>
            <section className="team-section sec-padding" id="team">
                <div className="container">
                    <div className="row">
                        <div className="section-title">
                            <h2 data-title="Get To Know Us!" data-aos="fade-up" data-aos-duration="500">The Crew</h2>
                        </div>
                    </div>
                    <div className="row">

                        <div className="team-item" data-aos="flip-left" data-aos-duration="1000">
                            <img src="https://i.imgur.com/IQrhIuS.jpg" alt="brewer" />
                            <div className="team-item-info">
                                <h3>Amandas Dad</h3>
                                <p>The Mastermind Behind The Brews</p>
                            </div>
                        </div>

                        <div className="team-item" data-aos="flip-left" data-aos-duration="1000">
                            <img src="https://i.imgur.com/FQx8hx2.jpg" alt="brewer" />
                            <div className="team-item-info">
                                <h3>Amandas Mom</h3>
                                <p>Motherly Figure & Manager</p>
                            </div>
                        </div>

                        <div className="team-item" data-aos="flip-left" data-aos-duration="1000">
                            <img src="https://i.imgur.com/3VbANdO.jpg" alt="brewer" />
                            <div className="team-item-info">
                                <h3>Amanda</h3>
                                <p>Manager & Tony's First Client 🙏🏼</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default Team
