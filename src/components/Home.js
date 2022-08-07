import React from 'react';
import Map from './Map'


function Home(props) {

    return (
        <div>
            <section className='home-section' id='home'>
                <div className='home-bg'></div>
                <div className='container'>
                    <div className='row min-vh-100 align-items-center'>
                    <h2 className='intro'>Welcome To Sky Bear Brewery!</h2>
                    <Map {...props} />
                    </div>
                </div>
            </section>
        </div>
        
    )
};

export default Home