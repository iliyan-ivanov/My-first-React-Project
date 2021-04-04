import firebase from 'firebase/app';

let Login = ({
    history
}) => {

    const onLoginHandler = (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((res) => {
                console.log(res);
                history.push('/')
            })
            .catch(err => {
                console.log(err)
            })

    }

    return (
        <form className="login-form" onSubmit={onLoginHandler}>
            <h2 className="auth-h2">Login</h2>
            <div className="auth-div">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Email" name="email" />

                <label htmlFor="password">Password</label>
                <input type="password" id="password" placeholder="Password" name="password" />
            </div>
            <button type="submit" className="auth-btn">Login</button>


        </form>
    );
}

export default Login;


