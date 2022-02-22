import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBeer } from '@fortawesome/free-solid-svg-icons'

function Bobcat(props) {

    const previousPage = event => {
        props.history.goBack()
    }

    let beerName = props.beers[0].name
    let beerDescription = props.beers[0].description
    let beerAbv = props.beers[0].alcohol
    let beerStyle = props.beers[0].style
    let beerIbu = props.beers[0].ibu

    return (
        <>
            <div className='black-bear'>
                <button onClick={previousPage} className='btn btn-leave-login' id='home-button' >Back</button>
                <h2 className="beer-page-title">{beerName} Milk Stout</h2>
                <h5 className="black-bear-description">{beerDescription}</h5>
                <br />
                <br />
                <ul>
                    <FontAwesomeIcon icon={faBeer} className='happy-hour-icon' /><li className='beer-list'>{beerStyle}</li>
                    <li className='beer-list'>{beerAbv} - ABV</li>
                    <li className='beer-list'>{beerIbu} - IBU</li>
                </ul>
            </div>
        </>
    )
}

export default Bobcat
