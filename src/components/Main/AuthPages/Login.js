
let Login = () => {
    return (
        <form className="login-form">
            <h2 className="auth-h2">Login</h2>
            <div className="auth-div">
                <label htmlFor="email">Email</label>
                <input type="email" placeholder="Email" name="email" />

                <label htmlFor="password">Password</label>
                <input type="password" placeholder="Password" name="password" />
            </div>
            <button type="submit" className="auth-btn">Login</button>


        </form>
    );
}

export default Login;


