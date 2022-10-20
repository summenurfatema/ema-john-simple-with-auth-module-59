import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';
import './Signup.css'


const Signup = () => {

    const [error, SetError] = useState(null)
    const { createUser } = useContext(AuthContext)

    const handleSubmit = event => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        const confirm = form.confirm.value
        //console.log(email, password, confirm)

        if (password.length < 6) {
            SetError('Please enter at least 6 characters !!')
            return;
        }
        if (password !== confirm) {
            SetError('Please enter correct password !!')
            return;
        }
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => console.error(error))
    }


    return (
        <div className='form-container'>
            <h2 className='form-title'>Signup</h2>
            <form onSubmit={handleSubmit}>
                <div className='form-control'>
                    <label htmlFor='email'>Email</label>
                    <input type='email' name="email" />
                </div>
                <div className='form-control'>
                    <label htmlFor='password'>Password</label>
                    <input type='password' name="password" />
                </div>
                <div className='form-control'>
                    <label htmlFor='confirm'>Confirm Password</label>
                    <input type='password' name="confirm" />
                    <p className='error'>{error}</p>
                </div>
                <input className='btn-submit' type='submit' value='Sign Up' />
                <p>Already have an account ? <Link to='/login'>Login here</Link> </p>

            </form>

        </div>
    );
};

export default Signup;