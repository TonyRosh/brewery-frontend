import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBeer } from '@fortawesome/free-solid-svg-icons'

function Menu(props) {

    let toggleBeer = props.toggleBeer
    let setToggleBeer = props.setToggleBeer

    let beers = () => props.beers.map(beer => {

        const goToBeer = event => {
            props.history.push(`/${beer.name}`)
        }

        return (
            <div className='beer-item' data-aos='fade-up-right' data-aos-duration='800' onClick={goToBeer} >
                                <div className='beer-item-title'>
                                    <p className='beer-style-abv'>
                                    {beer.style}
                                    <br />
                                    <hr className='lines' />
                                    {beer.alcohol} ABV
                                    </p>
                                    <img src='https://i.imgur.com/e1wPUir.jpg' alt='menu item thumbnail' />
                                    <h3 className='beer-name'>{beer.name}</h3>
                                <div className='beer-item-price-big-screen'>
                                    <p>$4.50</p>
                                </div>
                                </div>
                                <div className='beer-item-price-small-screen'>
                                    <p>$4.50</p>
                                </div>
                            </div>
        )
    })

    let foods = () => props.foods.map(food => {
        return (
            <div className='beer-item' data-aos='fade-up-right' data-aos-duration='800' >
                                <div className='beer-item-title'>
                                    <img src='https://i.imgur.com/ZgWrueP.jpg' alt='menu item thumbnail' />
                                    <h3 className='food-name'>{food.dish}</h3>
                                </div>
                                <div>
                                    <p className='food-description'>{food.description}</p>
                                </div>
                                <div className='beer-item-price'>
                                    <p>$4.50</p>
                                </div>
                            </div>
        )
    })

    return (
        <div>
            <section className='beer-section sec-padding'>
                <div className='container'>

                    {toggleBeer === true

                        ?

                        <div>
                        <div className='row' id='beers'>
                        <div className='section-title'>
                            <h2 data-title='Thirsty?' data-aos='fade-up' data-aos-duration='500'>Our Brews</h2>
                                <p data-aos='fade-up' data-aos-duration='500'>Our decision to offer more than Mark’s homebrew craft beer is also derived from
                                the Kissel Family. Often while visiting new cities, Mark, Amanda, and a few others
                                would want to visit the local breweries, while the rest of the family would opt out
                                due to not liking local craft brew. Mark, Linda, and Amanda knew they had to
                                open a place that anyone who wanted a drink knew they could find something
                                they would love, including their whole family!
                                Sky Bear offers 8-10 craft beers, domestic beers (when you don’t want to stray
                                from what you love), wine, seltzers, and cocktails. We are certain that no matter
                                what you love to drink, you will find it here!</p>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='beer-tabs' data-aos='fade-up' data-aos-duration='500'>
                            <button type='button' className='beer-tab-item' data-target='#on-tap' onClick={() => setToggleBeer(toggleBeer = true)}>On Tap</button>
                            <button type='button' className='beer-tab-item' data-target='#bottles' onClick={() => setToggleBeer(toggleBeer = false)}>Snacks</button>
                        </div>
                    </div>

                        <div className='row beer-tab-content' id='on-tap'>

                            {beers()}

                        </div>
                        </div>

                        :

                        <div>
                        <div className='row' id='food'>
                        <div className='section-title'>
                            <h2 data-title='Hungry?' data-aos='fade-up' data-aos-duration='500'>Our Snacks</h2>
                            <p data-aos='fade-up' data-aos-duration='500'>Our food menu is the perfect option for a quick bite for lunch, a meal with family
                                or friends, or just the needed appetizer. The food is created in house by our staff.
                                We offer the usual pub favorites and some unique twists on classic favorites.</p>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='beer-tabs' data-aos='fade-up' data-aos-duration='500'>
                            <button type='button' className='beer-tab-item' data-target='#on-tap' onClick={() => setToggleBeer(toggleBeer = true)}>On Tap</button>
                            <button type='button' className='beer-tab-item' data-target='#bottles' onClick={() => setToggleBeer(toggleBeer = false)}>Snacks</button>
                        </div>
                    </div>

                        <div className='row beer-tab-content' id='bottles'>

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
