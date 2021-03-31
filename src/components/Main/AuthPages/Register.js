
let Register = () => {
    return (
        <form class="login-form">
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