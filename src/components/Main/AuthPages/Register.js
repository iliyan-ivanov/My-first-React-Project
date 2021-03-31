
let Register = () => {
    return (
        <form class="login-form">
            <h2 className="auth-h2">Register</h2>
            <div class="auth-div">
                <label for="email">Email</label>
                <input type="email" placeholder="Email" name="email" />

                <label for="password">Password</label>
                <input type="password" placeholder="Password" name="password" />

                <label for="repeatPassword">Repeat Password</label>
                <input type="password" placeholder="Repeat-Password" name="repeatPassword" />
            </div>

            <button type="submit" className="auth-btn">Register</button>
        </form>
    );
}

export default Register;