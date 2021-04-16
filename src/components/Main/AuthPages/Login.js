import { useState } from 'react';
import ErrorDiv from '../ErrorDiv/ErrorDiv';
import firebase from 'firebase/app';
import style from './Login.module.css';


const Login = ({
    history
}) => {

    const [emailErrorMessage, setEmailErrorMessage] = useState('');
    const [passwordErrorMessage, setPasswordErrorMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const onLoginHandler = (e) => {
        e.preventDefault();

        let isPassed = true;
        const email = e.target.email.value;
        const password = e.target.password.value;

        setEmailErrorMessage('');
        setPasswordErrorMessage('');

        if (email.length < 1) {
            isPassed = false;
            setEmailErrorMessage('Please insert email!')
        }

        if (email.length < 6) {
            isPassed = false;
            setEmailErrorMessage('Email is too short!')
        }

        if (password.length < 5) {
            isPassed = false;
            setPasswordErrorMessage('Password must be at least 6 characters long!')
        }

        if (password.length < 1) {
            isPassed = false;
            setPasswordErrorMessage('Please insert password!')
        }


        if (isPassed) {

            
            firebase.auth().signInWithEmailAndPassword(email, password)
            .then((res) => {
                console.log(res);
                history.push('/')
            })
            .catch(err => {
                setErrorMessage(err.message)
                console.log(err.message)
            })
        }
    }


    return (
        <form className={style.loginForm} onSubmit={onLoginHandler}>
            <h2 className={style.authH2}>Login</h2>
            <div className={style.authDiv}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Email" name="email" />
                <ErrorDiv>{emailErrorMessage}</ErrorDiv>

                <label htmlFor="password">Password</label>
                <input type="password" id="password" placeholder="Password" name="password" />
                <ErrorDiv>{passwordErrorMessage}</ErrorDiv>

            </div>
            <button type="submit" className={style.authBtn}>Login</button>
            <ErrorDiv>{errorMessage}</ErrorDiv>


        </form>
    );
}

export default Login;


