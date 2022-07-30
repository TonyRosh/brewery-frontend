import React, {useState} from 'react'

function Map({setToggleBeer, history}) {

    const [toggleCocktailStar, setToggleCocktailStar] = useState(false)
    const [toggleAboutStar, setToggleAboutStar] = useState(false)
    const [toggleBeersStar, setToggleBeersStar] = useState(false)
    const [toggleFoodStar, setToggleFoodStar] = useState(false)
    const [toggleTeamStar, setToggleTeamStar] = useState(false)
    const [toggleHappyHourStar, setToggleHappyHourStar] = useState(false)
    const [toggleContactStar, setToggleContactStar] = useState(false)

    let coordinates = {}

    const desktopCoordinates = {
        'About Us': '158, 170, 50',
        'Beers': '318, 198, 50',
        'Cocktails': '398, 293, 50',
        'Food': '491, 385, 50',
        'Team': '480, 505, 50',
        'happy-hour': '711, 445, 50',
        'Contact': '650, 575, 50'
    }

    const tabletCoordinates = {
        'About Us': '130, 136, 45',
        'Beers': '252, 158, 45',
        'Cocktails': '315, 233, 45',
        'Food': '390, 318, 45',
        'Team': '385, 420, 45',
        'happy-hour': '567, 365, 45',
        'Contact': '521, 475, 45'
    }

    const mobileCoordinates = {
        'About Us': '65, 90, 30',
        'Beers': '130, 100, 30',
        'Cocktails': '160, 153, 30',
        'Food': '200, 200, 30',
        'Team': '198, 263, 28',
        'happy-hour': '290, 225, 30',
        'Contact': '265, 295, 30'
    }

    const isMobile = window.matchMedia('(max-width: 575px)').matches;
    const isTablet = window.matchMedia('(max-width: 991px)').matches;


    if(isMobile) {
        coordinates = mobileCoordinates
    } else if(isTablet) {
        coordinates = tabletCoordinates
    } else {
        coordinates = desktopCoordinates
    }

    return (
        <>
            <img src='https://i.imgur.com/n0vdV8Y.png' alt='big dipper' useMap='#starmap' className='big-dipper' />
            <map name='starmap' className='starmap'>

                <area shape='circle' coords={coordinates['About Us']} alt='About' href='#about' data-title='About Us' className='star' onMouseOver={ () => setToggleAboutStar(true) } onMouseOut={ () => setToggleAboutStar(false) } />
                { toggleAboutStar === false 
                ?
                <h5 className='starnav-about'>About</h5>
                :
                <h5 id='star-nav-about' className='starnav-about'>About</h5>
                }

                <area shape='circle' coords={coordinates['Beers']} alt='Beers' href='#beers' data-title='Beers' className='star' onMouseOver={ () => setToggleBeersStar(true) } onMouseOut={ () => setToggleBeersStar(false) } />
                { toggleBeersStar === false
                ?
                <h5 className='starnav-beer'>Beers</h5>
                :
                <h5 id='star-nav-beer' className='starnav-beer'>Beers</h5>
                }

                <area shape='circle' coords={coordinates['Cocktails']} alt='Cocktails' href='#cocktails' data-title='Cocktails' className='star' onClick={() => setToggleCocktailStar(true)} onMouseOver={ () => setToggleCocktailStar(true) } onMouseOut={ () => setToggleCocktailStar(false) } />
                { toggleCocktailStar === false
                ?
                <h5 className='starnav-cocktail'>Cocktails</h5>
                :
                <h5 id='star-nav-cocktail' className='starnav-cocktail'>Cocktails</h5>
                }

                <area shape='circle' coords={coordinates['Food']} alt='Food' href='#food' data-title='Food' className='star' onClick={() => setToggleBeer(false)} onMouseOver={ () => setToggleFoodStar(true) } onMouseOut={ () => setToggleFoodStar(false) } />
                { toggleFoodStar === false
                ?
                <h5 className='starnav-food'>Food</h5>
                :
                <h5 id='star-nav-food' className='starnav-food'>Food</h5>
                }

                <area shape='circle' coords={coordinates['Team']} alt='Team' href='#team' data-title='Team' className='star' onMouseOver={ () => setToggleTeamStar(true) } onMouseOut={ () => setToggleTeamStar(false) } />
                { toggleTeamStar === false
                ?
                <h5 className='starnav-team'>Team</h5>
                :
                <h5 id='star-nav-team' className='starnav-team'>Team</h5>
                }

                {/* <area shape='circle' coords={coordinates['happy-hour']} alt='happy-hour' href='#happy-hour' data-title='happy-hour' className='star' onMouseOver={ () => setToggleHappyHourStar(true) } onMouseOut={ () => setToggleHappyHourStar(false) } />
                { toggleHappyHourStar === false
                ?
                <h5 className='starnav-happy-hour'>Happy Hour</h5>
                :
                <h5 id='star-nav-happy-hour' className='starnav-happy-hour'>Happy Hour</h5>
                } */}

                <area shape='circle' coords={coordinates['Contact']} alt='Contact' href='#contact' data-title='Contact' className='star' onMouseOver={ () => setToggleContactStar(true) } onMouseOut={ () => setToggleContactStar(false) } />
                { toggleContactStar === false
                ?
                <h5 className='starnav-contact'>Contact</h5>
                :
                <h5 id='star-nav-contact' className='starnav-contact'>Contact</h5>
                }

            </map>
        </>
    )
}

export default Map
