import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'

function Header(props) {


    let setToggleBeer = props.setToggleBeer

    let scroll = props.scroll
    let windowHeight = props.windowHeight

    return (
        <div>
            { windowHeight < 725

            ?

            <header className='header' onScroll={scroll} >
            </header >

            :

            <header className='header sticky' style={{visibility: 'visible'}} >
                <Navbar collapseOnSelect expand='lg' variant='dark'>
                    <Navbar.Brand href='#home'><div className='logo'>
                        <a href='#home'><img src='https://i.imgur.com/YItS43P.png' alt='logo' height='50' width='50' /></a>
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
                                    <NavDropdown.Item href='#beers' onClick={() => setToggleBeer(true)} >Beers</NavDropdown.Item>
                                    <NavDropdown.Item href='#food' onClick={() => setToggleBeer(false)} >Food</NavDropdown.Item>
                                    <NavDropdown.Item href='#cocktails' onClick={() => setToggleBeer(true)} >Cocktails</NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link href='#happy-hour'>Happy Hour</Nav.Link>
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
