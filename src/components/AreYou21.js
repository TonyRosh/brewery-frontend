import React from 'react'

function AreYou21(props) {

    const imJustABoy = 'https://www.youtube.com/watch?v=_GOR5gvQwDI'

    let areYou21 = !props.areYou21
    let setAreYou21 = props.setAreYou21

    return (


        <div id="top">
	    <div class="beer-foam-left">
	      <div class="foam-left-1"></div>
	      <div class="foam-left-2"></div>
	      <div class="foam-left-3"></div>
	      <div class="foam-left-4"></div>
	      <div class="foam-left-5"></div>
	      <div class="foam-left-6"></div>
	      <div class="foam-left-7"></div>
	      <div class="foam-left-8"></div>
	      <div class="foam-left-9"></div>
	      <div class="foam-left-10"></div>
	      <div class="foam-left-11"></div>
	      <div class="foam-left-12"></div>
	      <div class="foam-left-13"></div>
	      <div class="foam-left-14"></div>
	      <div class="foam-left-15"></div>
          <div class="foam-left-16"></div>
          <div class="foam-left-17"></div>
          <div class="foam-left-18"></div>
          <div class="foam-left-19"></div>
          <div class="foam-left-20"></div>
          <div class="foam-left-21"></div>
          <div class="foam-left-22"></div>
          <div class="foam-left-23"></div>
          <div class="foam-left-24"></div>
          <div class="foam-left-25"></div>
	    </div>
        <div class="beer-foam-right">
	      <div class="foam-right-1"></div>
	      <div class="foam-right-2"></div>
	      <div class="foam-right-3"></div>
	      <div class="foam-right-4"></div>
	      <div class="foam-right-5"></div>
	      <div class="foam-right-6"></div>
	      <div class="foam-right-7"></div>
	      <div class="foam-right-8"></div>
	      <div class="foam-right-9"></div>
	      <div class="foam-right-10"></div>
	      <div class="foam-right-11"></div>
	      <div class="foam-right-12"></div>
	      <div class="foam-right-13"></div>
	      <div class="foam-right-14"></div>
	      <div class="foam-right-15"></div>
          <div class="foam-right-16"></div>
          <div class="foam-right-17"></div>
          <div class="foam-right-18"></div>
          <div class="foam-right-19"></div>
          <div class="foam-right-20"></div>
          <div class="foam-right-21"></div>
          <div class="foam-right-22"></div>
          <div class="foam-right-23"></div>
          <div class="foam-right-24"></div>
          <div class="foam-right-25"></div>
	    </div>
        <div id="background-wrap">
    <div class="bubble x1"></div>
    <div class="bubble x2"></div>
    <div class="bubble x3"></div>
    <div class="bubble x4"></div>
    <div class="bubble x5"></div>
    <div class="bubble x6"></div>
    <div class="bubble x7"></div>
    <div class="bubble x8"></div>
    <div class="bubble x9"></div>
    <div class="bubble x10"></div>
    <div class="bubble x11"></div>
    <div class="bubble x12"></div>
    <div class="bubble x13"></div>
    <div class="bubble x14"></div>
    <div class="bubble x15"></div>
    <div class="bubble x16"></div>
    <div class="bubble x17"></div>
    <div class="bubble x18"></div>
    <div class="bubble x19"></div>
    <div class="bubble x20"></div>
    <div class="bubble x21"></div>
    <div class="bubble x21"></div>
    <div class="bubble x22"></div>
    <div class="bubble x23"></div>
    <div class="bubble x24"></div>
    <div class="bubble x25"></div>
    <div class="bubble x26"></div>
    <div class="bubble x27"></div>
    <div class="bubble x28"></div>
    <div class="bubble x29"></div>
    <div class="bubble x30"></div>


        <div class="no-scroll-bar">
            <div id="progressbar"></div>
            <h2>Are You 21?!</h2>
            <br />
            <button onClick={() => setAreYou21(areYou21)} className="btn-primary" > YEA BOOOIIIIIII </button>
            <br />
            <br />
            <button href={ imJustABoy } className="btn-primary" target="_blank" rel="noopener noreferrer"> NA </button>
        </div>
        </div>
        </div>
    )
}

export default AreYou21
