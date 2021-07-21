import React from 'react'

function ScrollBar(props) {

    let setVisible = props.setVisible
    let visible = props.visible
    
    let progress1 = document.getElementById('progressbar');
    let totalHeight = document.body.scrollHeight - window.innerHeight;

    let scrollBar = window.onscroll = () => {

        let progressHeight = (window.pageYOffset / totalHeight) * 100;
        progress1.style.height = progressHeight + "%";
        setVisible(true);
    };



    return (

        <div  >

            { visible === true

            ?
                
            <div>
                <div id="progressbar" onScroll={ scrollBar }>

                <div id="background-wrap-scrollbar">
                <div id="bubble-width">
                <div id="bubble" class="scroll-bubble-1"></div>
                <div id="bubble" class="scroll-bubble-2"></div>
                <div id="bubble" class="scroll-bubble-3"></div>
                <div id="bubble" class="scroll-bubble-4"></div>
                <div id="bubble" class="scroll-bubble-5"></div>
                <div id="bubble" class="scroll-bubble-6"></div>
                <div id="bubble" class="scroll-bubble-7"></div>
                <div id="bubble" class="scroll-bubble-8"></div>
                <div id="bubble" class="scroll-bubble-9"></div>
                <div id="bubble" class="scroll-bubble-10"></div>
                <div id="bubble" class="scroll-bubble-11"></div>
                <div id="bubble" class="scroll-bubble-12"></div>
                <div id="bubble" class="scroll-bubble-13"></div>
                <div id="bubble" class="scroll-bubble-14"></div>
                <div id="bubble" class="scroll-bubble-15"></div>
                <div id="bubble" class="scroll-bubble-16"></div>
                <div id="bubble" class="scroll-bubble-17"></div>
                <div id="bubble" class="scroll-bubble-18"></div>
                <div id="bubble" class="scroll-bubble-19"></div>
                <div id="bubble" class="scroll-bubble-20"></div>
                <div id="bubble" class="scroll-bubble-21"></div>
                <div id="bubble" class="scroll-bubble-21"></div>
                <div id="bubble" class="scroll-bubble-22"></div>
                <div id="bubble" class="scroll-bubble-23"></div>
                <div id="bubble" class="scroll-bubble-24"></div>
                <div id="bubble" class="scroll-bubble-25"></div>
                <div id="bubble" class="scroll-bubble-26"></div>
                <div id="bubble" class="scroll-bubble-27"></div>
                <div id="bubble" class="scroll-bubble-28"></div>
                <div id="bubble" class="scroll-bubble-29"></div>
                <div id="bubble" class="scroll-bubble-30"></div>
                </div>
                </div>
                </div>
            </div>

            :

            <div class="no-scroll-bar">
                <div id="progressbar"></div>
            </div>
            }
        </div>
    )
}

export default ScrollBar
