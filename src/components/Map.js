import React, {useState} from 'react'

function Map({setToggleBeer, history}) {

    const [toggleLoginSignupStar, setToggleLoginSignupStar] = useState(false)
    const [toggleAboutStar, setToggleAboutStar] = useState(false)
    const [toggleBeersStar, setToggleBeersStar] = useState(false)
    const [toggleFoodStar, setToggleFoodStar] = useState(false)
    const [toggleTeamStar, setToggleTeamStar] = useState(false)
    const [toggleHappyHourStar, setToggleHappyHourStar] = useState(false)
    const [toggleContactStar, setToggleContactStar] = useState(false)

    const handleClick = (event) => {
        history.push('/login-signup')
    }

    let coordinates = {}

    const desktopCoordinates = {
        'Login-Signup': '158, 170, 50',
        'About Us': '318, 198, 50',
        'Beers': '398, 293, 50',
        'Food': '491, 385, 50',
        'Team': '480, 505, 50',
        'happy-hour': '711, 445, 50',
        'Contact': '650, 575, 50'
    }

    const tabletCoordinates = {
        'Login-Signup': '130, 136, 45',
        'About Us': '252, 158, 45',
        'Beers': '315, 233, 45',
        'Food': '390, 318, 45',
        'Team': '385, 420, 45',
        'happy-hour': '567, 365, 45',
        'Contact': '521, 475, 45'
    }

    const mobileCoordinates = {
        'Login-Signup': '65, 90, 30',
        'About Us': '130, 100, 30',
        'Beers': '160, 153, 30',
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

                <area shape='circle' coords={coordinates['Login-Signup']} alt='Login-Signup' data-title='Login-Signup' className='star' onClick={handleClick} onMouseOver={ () => setToggleLoginSignupStar(true) } onMouseOut={ () => setToggleLoginSignupStar(false) } />
                { toggleLoginSignupStar === false 
                ?
                <h5 className='starnav-login-signup'>Log In</h5>
                :
                <h5 id='star-nav-login-signup' className='starnav-login-signup'>Log In</h5>
                }

                <area shape='circle' coords={coordinates['About Us']} alt='About' href='#about' data-title='About Us' className='star' onMouseOver={ () => setToggleAboutStar(true) } onMouseOut={ () => setToggleAboutStar(false) } />
                { toggleAboutStar === false
                ?
                <h5 className='starnav-about'>About</h5>
                :
                <h5 id='star-nav-about' className='starnav-about'>About</h5>
                }

                <area shape='circle' coords={coordinates['Beers']} alt='Beers' href='#beers' data-title='Beers' className='star' onClick={() => setToggleBeer(true)} onMouseOver={ () => setToggleBeersStar(true) } onMouseOut={ () => setToggleBeersStar(false) } />
                { toggleBeersStar === false
                ?
                <h5 className='starnav-beer'>Beers</h5>
                :
                <h5 id='star-nav-beer' className='starnav-beer'>Beers</h5>
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

                <area shape='circle' coords={coordinates['happy-hour']} alt='happy-hour' href='#happy-hour' data-title='happy-hour' className='star' onMouseOver={ () => setToggleHappyHourStar(true) } onMouseOut={ () => setToggleHappyHourStar(false) } />
                { toggleHappyHourStar === false
                ?
                <h5 className='starnav-happy-hour'>Happy Hour</h5>
                :
                <h5 id='star-nav-happy-hour' className='starnav-happy-hour'>Happy Hour</h5>
                }

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
