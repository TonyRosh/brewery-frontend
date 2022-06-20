import React from 'react'

function AreYou21(props) {

    let imJustABoy = 'https://www.youtube.com/watch?v=_GOR5gvQwDI'

    let areYou21 = !props.areYou21
    let setAreYou21 = props.setAreYou21

    return (


        <div id='top'>
        <div id='background-wrap'>
    <div className='bubble x1'></div>
    <div className='bubble x2'></div>
    <div className='bubble x3'></div>
    <div className='bubble x4'></div>
    <div className='bubble x5'></div>
    <div className='bubble x6'></div>
    <div className='bubble x7'></div>
    <div className='bubble x8'></div>
    <div className='bubble x9'></div>
    <div className='bubble x10'></div>
    <div className='bubble x11'></div>
    <div className='bubble x12'></div>
    <div className='bubble x13'></div>
    <div className='bubble x14'></div>
    <div className='bubble x15'></div>
    <div className='bubble x16'></div>
    <div className='bubble x17'></div>
    <div className='bubble x18'></div>
    <div className='bubble x19'></div>
    <div className='bubble x20'></div>
    <div className='bubble x21'></div>
    <div className='bubble x21'></div>
    <div className='bubble x22'></div>
    <div className='bubble x23'></div>
    <div className='bubble x24'></div>
    <div className='bubble x25'></div>
    <div className='bubble x26'></div>
    <div className='bubble x27'></div>
    <div className='bubble x28'></div>
    <div className='bubble x29'></div>
    <div className='bubble x30'></div>


        <div className='no-scroll-bar'>
            <div id='progressbar'></div>
            <div className='are-you-21'>
            <h2>Are You 21?!</h2>
            <button onClick={() => setAreYou21(areYou21)} className='btn-primary' > Yes! </button>
            <br />
            <br />
            <a href={ imJustABoy } className='btn-primary' target='_blank' rel='noopener noreferrer' id='not-21'> no :( </a>
            </div>
            <br />
        </div>
        </div>
            <h2>Sky Bear Brewery Will Be Opening Soon!</h2>
        </div>
    )
}

export default AreYou21
