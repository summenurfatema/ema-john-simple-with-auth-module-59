import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {

    const handleSubmit = event => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        const confirm = form.confirm.value
        console.log(email, password, confirm)
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
                </div>
                <input className='btn-submit' type='submit' value='Sign Up' />
                <p>Already have an account ? <Link to='/login'>Login here</Link> </p>

            </form>

        </div>
    );
};

export default Signup;