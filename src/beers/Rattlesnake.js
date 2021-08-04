import React from 'react'

function Rattlesnake(props) {

    const previousPage = event => {
            props.history.goBack()
        }

    return (
        <div>
        <button onClick={previousPage} className='btn btn-leave-login' id='home-button' >Back</button>
            <h2>HELLO WORLD</h2>
        </div>
    )
}

export default Rattlesnake
