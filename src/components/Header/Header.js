
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';

import logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
    const { user } = useContext(AuthContext)
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/about">About</Link>
                <Link to="/login">Log in</Link>
                <Link to="/signup">Sign up</Link>
                <span className='span'>{user?.email}</span>

            </div>
        </nav>
    );
};

export default Header;