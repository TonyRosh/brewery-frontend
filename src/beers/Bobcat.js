import React from 'react'

function Bobcat(props) {

    const previousPage = event => {
            props.history.goBack()
        }

    return (
        <div>
        <button onClick={previousPage} className='btn btn-leave-login' id='home-button' >Back</button>
            <h2>Hello World!</h2>
        </div>
    )
}

export default Bobcat
