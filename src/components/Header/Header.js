import UppperNav from './UpperNav';
import LowerNav from './LowerNav';

let Header = ({
    user
}) => {
    return (
        <div className="header">
           <UppperNav user={user} />
           <LowerNav />
        </div>
    );
}

export default Header;