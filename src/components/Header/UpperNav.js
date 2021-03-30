import { Link } from 'react-router-dom';

let UppperNav = () => {
    return (
        <nav className="upper-navigation">
            <ul>
                <li className="listItem first-nav first-child"><Link to="/login">Login</Link></li>
                <li className="listItem first-nav"><Link to="/register">Register</Link></li>
                <li className="listItem first-nav"><Link to="/create">Create</Link></li>
                <li className="listItem first-nav"><Link to="/logut">Logout</Link></li>
            </ul>
            <p className="listItems"><Link to="/">Football Site</Link></p>
        </nav>
    );
};

export default UppperNav;