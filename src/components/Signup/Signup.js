import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
    return (
        <div className='form-container'>
            <h2 className='form-title'>Signup</h2>
            <form>
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