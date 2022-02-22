import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBeer } from '@fortawesome/free-solid-svg-icons'

function BlackBear(props) {

    const previousPage = event => {
            props.history.goBack()
        }

    console.log(props)

    let beerName = props.beers[1].name
    let beerDescription = props.beers[1].description
    let beerAbv = props.beers[1].alcohol
    let beerStyle = props.beers[1].style
    let beerIbu = props.beers[1].ibu

    return (
        <>
        <div className='black-bear'>
        <button onClick={previousPage} className='btn btn-leave-login' id='home-button' >Back</button>
            <h2 className="beer-page-title">{beerName} Milk Stout</h2>
            <h5 className="black-bear-description">Just enough sweetness to keep the dark roast in check. Rich and robust, our Black Bear Milk Stout exhibits notes of dark chocolate, freshly brewed coffee, caramelized sugar and roasted malt.</h5>
            <br/>
            <br/>
            <ul>
            <FontAwesomeIcon icon={faBeer} className='happy-hour-icon' /><li className='beer-list'>{beerStyle}</li>
                <li className='beer-list'>{beerAbv} - ABV</li>
                <li className='beer-list'>{beerIbu} - IBU</li>
            </ul>
        </div>
        </>
    )
}

export default BlackBear
