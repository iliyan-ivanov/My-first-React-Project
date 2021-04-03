import { Link } from 'react-router-dom';

let LowerNav = () => {
    return (
        <nav className="lower-navigation">
            <ul>
                <li className="main-nav-item"><Link to="/">Home</Link></li>
                <li className="main-nav-item"><Link to="/europianfootball">Europian football</Link></li>
                <li className="main-nav-item"><Link to="/bulgarianfootball">Bulgarian football</Link></li>
                <li className="main-nav-item"><Link to="/nationalteams">National Teams</Link></li>
            </ul>
        </nav>
    );
};

export default LowerNav;