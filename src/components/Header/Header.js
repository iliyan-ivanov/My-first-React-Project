import UppperNav from './UpperNav';
import LowerNav from './LowerNav';

let Header = () => {
    return (
        <div className="header">
           <UppperNav />
           <LowerNav />
        </div>
    );
}

export default Header;