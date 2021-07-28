import React from 'react'

function Menu(props) {

    let toggleBeer = props.toggleBeer
    let setToggleBeer = props.setToggleBeer

    let beers = () => props.beers.map(beer => {
        return (
            <div className="beer-item" data-aos="fade-up-right" data-aos-duration="800">
                                <div className="beer-item-title">
                                    <p className="beer-style-abv">
                                    {beer.style}
                                    <br />
                                    <hr className="lines" />
                                    {beer.alcohol} ABV
                                    </p>
                                    <img src="https://i.imgur.com/e1wPUir.jpg" alt="menu item thumbnail" />
                                    <h3 className="beer-name">{beer.name}</h3>
                                </div>
                                <div className="beer-item-price">
                                    <p>$4.50</p>
                                </div>
                            </div>
        )
    })

    let foods = () => props.foods.map(food => {
        return (
            <div className="beer-item" data-aos="fade-up-right" data-aos-duration="800" >
                                <div className="beer-item-title">
                                    <img src="https://i.imgur.com/ZgWrueP.jpg" alt="menu item thumbnail" />
                                    <h3 className="food-name">{food.dish}</h3>
                                </div>
                                <div>
                                    <p className="food-description">{food.description}</p>
                                </div>
                                <div className="beer-item-price">
                                    $4.50
                                </div>
                            </div>
        )
    })

    return (
        <div>
            <section className="beer-section sec-padding">
                <div className="container">

                    {toggleBeer === true

                        ?

                        <div>
                        <div className="row" id="beers">
                        <div className="section-title">
                            <h2 data-title="Thirsty?" data-aos="fade-up" data-aos-duration="500">Our Brews</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="beer-tabs" data-aos="fade-up" data-aos-duration="500">
                            <button type="button" className="beer-tab-item" data-target="#on-tap" onClick={() => setToggleBeer(toggleBeer = true)}>On Tap</button>
                            <button type="button" className="beer-tab-item" data-target="#bottles" onClick={() => setToggleBeer(toggleBeer = false)}>Snacks</button>
                        </div>
                    </div>

                        <div className="row beer-tab-content" id="on-tap">

                            {beers()}

                        </div>
                        </div>

                        :

                        <div>
                        <div className="row" id="food">
                        <div className="section-title">
                            <h2 data-title="Hungry?" data-aos="fade-up" data-aos-duration="500">Our Snacks</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="beer-tabs" data-aos="fade-up" data-aos-duration="500">
                            <button type="button" className="beer-tab-item" data-target="#on-tap" onClick={() => setToggleBeer(toggleBeer = true)}>On Tap</button>
                            <button type="button" className="beer-tab-item" data-target="#bottles" onClick={() => setToggleBeer(toggleBeer = false)}>Snacks</button>
                        </div>
                    </div>

                        <div className="row beer-tab-content" id="bottles">

                            {foods()}

                        </div>
                        </div>
                    }

                </div>
            </section>
        </div>
    )
}

export default Menu
