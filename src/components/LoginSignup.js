import React, { useState } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form'

function LoginSignup(props) {

    let [toggleSignup, setToggleSignup] = useState(true)

    const previousPage = event => {
            props.history.goBack()
        }

        const userLogin = event => {
            props.history.push('/welcome-back')
        }

    const [signupUserName, setSignupUserName] = useState('')
    const [signupPassword, setSignupPassword] = useState('')

    const [loginUserName, setLoginUserName] = useState('')
    const [loginPassword, setLoginPassword] = useState('')

    const handleSignup = event => {
        event.preventDefault();
        fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user: {
                    username: signupUserName,
                    password: signupPassword
                }
            })
        })
        .then(response => response.json())
        .then(newUser => console.log(newUser))

        setSignupUserName('');
        setSignupPassword('');
    }

    const handleLogin = event => {
        event.preventDefault();
        fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user: {
                    username: loginUserName,
                    password: loginPassword
                }
            })
        })
        .then(response => response.json())
        .then(result => {
            if (result.error) {
                console.error(result.error)
            } else {
                console.log('token', result.token)
                localStorage.setItem('token', result.token)
                userLogin()
            }
        })

        setLoginUserName('');
        setLoginPassword('');
    }



    return (

        <>

        
            <button onClick={previousPage} className='btn btn-leave-login' id='home-button' >Back</button>
            <button className='btn btn-leave-login' id='logout-button' >Log Out</button>

        { toggleSignup === true
        
        ?

            <Form className='login-signup-form' onSubmit={handleSignup}>
            <h2>Give us your feedback!</h2>
                <Form.Group className='mb-3' controlId='formGroupUsername'>
                    <Form.Label>User Name</Form.Label>
                    <Form.Control 
                    type='username' 
                    value={signupUserName} 
                    onChange={event => setSignupUserName(event.target.value)} 
                    placeholder='Enter Username' 
                    />
                </Form.Group>
                <Form.Group className='mb-3' controlId='formGroupPassword'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                    type='password' 
                    name='password' 
                    value={signupPassword} 
                    onChange={event => setSignupPassword(event.target.value)} 
                    placeholder='Password'
                    />
                </Form.Group>
            <br />
            <input type='submit' value='signup' className='btn btn-default' />
            <br />
            <br />
            <button className='btn btn-login' onClick={setToggleSignup}>Already a member? Log in here!</button>
            </Form>

        :

            <Form className='login-signup-form' onSubmit={handleLogin}>
            <h2>Welcome Back!</h2>
                <Form.Group className='mb-3' controlId='formGroupUsername'>
                    <Form.Label>User Name</Form.Label>
                    <Form.Control 
                    type='username' 
                    value={loginUserName} 
                    onChange={event => setLoginUserName(event.target.value)} 
                    placeholder='Enter Username' 
                    />
                </Form.Group>
                <Form.Group className='mb-3' controlId='formGroupPassword'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                    type='password' 
                    name='password' 
                    value={loginPassword} 
                    onChange={event => setLoginPassword(event.target.value)} 
                    placeholder='Password'
                    />
                </Form.Group>
            <br />
            <input type='submit' value='login' className='btn btn-default' />
            </Form>

        }

        </>
    )
}

export default LoginSignup