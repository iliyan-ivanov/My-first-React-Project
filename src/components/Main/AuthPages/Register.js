import firebase from 'firebase/app';

let Register = ({
    history
}) => {

    const onRegisterHandler = (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;
        
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(res => {
                console.log('Register')
                history.push('/')
            })
            .catch(err => {console.log(err)
            // email.value = '';
            // password.value = '';)
            });
    }

    return (
        <form className="login-form" onSubmit={onRegisterHandler}>
            <h2 className="auth-h2">Register</h2>
            <div className="auth-div">
                <label htmlFor="email">Email</label>
                <input type="email" placeholder="Email" name="email" />

                <label htmlFor="password">Password</label>
                <input type="password" placeholder="Password" name="password" />

                <label htmlFor="repeatPassword">Repeat Password</label>
                <input type="password" placeholder="Repeat-Password" name="repeatPassword" />
            </div>

            <button type="submit" className="auth-btn">Register</button>
        </form>
    );
}

export default Register;