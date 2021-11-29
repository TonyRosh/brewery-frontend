import React from 'react'
import Map from './Map'

function LogInHome(props) {
    return (
        <div>
            <section className='home-section' id='home'>
                <div className='home-bg'></div>
                <div className='container'>
                    <div className='row min-vh-100 align-items-center'>
                    <h2 className='intro'>Welcome Back!</h2>
                    <Map {...props} />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default LogInHome



