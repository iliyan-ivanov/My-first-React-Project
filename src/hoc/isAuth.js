import {useContext} from 'react';
import {useHistory} from 'react-router-dom';
import AuthContext from '../AuthContext';

const isAuth = (WrappedComponent) => {

    const Component = (props) => {
        const user = useContext(AuthContext);
        const history = useHistory();

        if (!user) {
            history.push('/login')

            return null;
        }

        return <WrappedComponent {...props} />
    }

    return Component;
}

export default isAuth;