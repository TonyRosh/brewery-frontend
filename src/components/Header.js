import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'


// window.addEventListener('scroll', function () {
//     if (this.pageYOffset > 725) {
//         document.querySelector('.header').classList.add('sticky');
//         document.querySelector('.header').style.visibility = 'visible';
//     }
//     else {
//         document.querySelector('.header').classList.remove('sticky');
//         document.querySelector('.header').style.visibility = 'hidden';
//     }
// });

function Header(props) {


    let toggleBeer = props.toggleBeer
    let setToggleBeer = props.setToggleBeer

    let scroll = props.scroll
    let windowHeight = props.windowHeight

    return (
        <div>
            { windowHeight < 725

            ?

            <header className='header' onScroll={scroll} >
                <Navbar collapseOnSelect expand='lg' variant='dark'>
                    <Navbar.Brand href='#home'><div className='logo'>
                        <a href='#home'><img src='https://i.imgur.com/g1PwnZq.png' alt='logo' height='50' width='50' /></a>
                    </div>
                    </Navbar.Brand>
                    <div className='nav-toggle'>
                        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                        <Navbar.Collapse id='responsive-navbar-nav'>
                            <Nav
                                className='mr-auto my-2 my-lg-0'
                            >
                                <Nav.Link href='#about'>About</Nav.Link>
                                <NavDropdown title='Menu' id='collasible-nav-dropdown'>
                                    <NavDropdown.Item href='#beers' onClick={() => setToggleBeer(toggleBeer = true)} >Beers</NavDropdown.Item>
                                    <NavDropdown.Item href='#food' onClick={() => setToggleBeer(toggleBeer = false)} >Food</NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link href='#testimonials'>Feedback</Nav.Link>
                                <Nav.Link href='#team'>Team</Nav.Link>
                                <Nav.Link href='#contact'>Contact</Nav.Link>

                            </Nav>
                        </Navbar.Collapse>
                    </div>
                </Navbar>
            </header >

            :

            <header className='header sticky' style={{visibility: 'visible'}} >
                <Navbar collapseOnSelect expand='lg' variant='dark'>
                    <Navbar.Brand href='#home'><div className='logo'>
                        <a href='#home'><img src='https://i.imgur.com/g1PwnZq.png' alt='logo' height='50' width='50' /></a>
                    </div>
                    </Navbar.Brand>
                    <div className='nav-toggle'>
                        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                        <Navbar.Collapse id='responsive-navbar-nav'>
                            <Nav
                                className='mr-auto my-2 my-lg-0'
                            >
                                <Nav.Link href='#about'>About</Nav.Link>
                                <NavDropdown title='Menu' id='collasible-nav-dropdown'>
                                    <NavDropdown.Item href='#beers' onClick={() => setToggleBeer(toggleBeer = true)} >Beers</NavDropdown.Item>
                                    <NavDropdown.Item href='#food' onClick={() => setToggleBeer(toggleBeer = false)} >Food</NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link href='#testimonials'>Feedback</Nav.Link>
                                <Nav.Link href='#team'>Team</Nav.Link>
                                <Nav.Link href='#contact'>Contact</Nav.Link>

                            </Nav>
                        </Navbar.Collapse>
                    </div>
                </Navbar>
            </header >

            }

        </div>
    )
}

export default Header
