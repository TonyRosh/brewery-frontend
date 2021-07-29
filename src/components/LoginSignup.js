import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form'

function LoginSignup(props) {

    const goHome = (event) => {
            props.history.push('/')
        }

    return (
        <div>
            <button onClick={goHome} className='btn-primary' id='home-button' >Back</button>
            <Form className='login-signup-form'>
                <Form.Group className='mb-3' controlId='formGroupUsername'>
                    <Form.Label>User Name</Form.Label>
                    <Form.Control type='username' placeholder='Enter Username' />
                </Form.Group>
                <Form.Group className='mb-3' controlId='formGroupPassword'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type='password' placeholder='Password' />
                </Form.Group>
            </Form>
        </div>
    )
}

export default LoginSignup
