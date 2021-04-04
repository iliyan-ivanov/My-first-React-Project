import { Link } from 'react-router-dom';
import firebase from 'firebase/app';

let UppperNav = ({
    user
}) => {

    const onLogoutClick = (e) => {
        e.preventDefault();
        firebase.auth().signOut();
    }

    return (
        <nav className="upper-navigation">
            {user
                ? <ul>
                    <li className="listItem first-nav" onClick={onLogoutClick}><Link to="/">Logout</Link></li>
                    <li className="listItem first-nav"><Link to="/create">Create</Link></li>
                    <li className="listItem first-nav"><Link to="/">Welcome, {user.email}</Link></li>
                </ul>
                : <ul>
                    <li className="listItem first-nav"><Link to="/login">Login</Link></li>
                    <li className="listItem first-nav"><Link to="/register">Register</Link></li>
                </ul>
            }
            <p className="listItems"><Link to="/">Football Site</Link></p>
        </nav>
    );
};

export default UppperNav;