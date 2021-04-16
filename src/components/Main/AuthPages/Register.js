import { useState } from 'react';
import ErrorDiv from '../ErrorDiv/ErrorDiv';
import firebase from 'firebase/app';
import style from './Register.module.css';

let Register = ({
    history
}) => {

    const [emailErrorMessage, setEmailErrorMessage] = useState('');
    const [passwordErrorMessage, setPasswordErrorMessage] = useState('');
    const [rePasswordErrorMessage, setRePasswordErrorMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const onRegisterHandler = (e) => {
        e.preventDefault();

        let isPassed = true;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const rePassword = e.target.repeatPassword.value;

        setEmailErrorMessage('');
        setPasswordErrorMessage('');
        setRePasswordErrorMessage('');

        if (email.length < 1) {
            isPassed = false;
            setEmailErrorMessage('Please insert email!')
        }

        if (email.length < 6) {
            isPassed = false;
            setEmailErrorMessage('Please insert email!')
        }

        if (password.length < 5) {
            isPassed = false;
            setPasswordErrorMessage('Password must be at least 6 characters long!')
        }

        if (password.length < 1) {
            isPassed = false;
            setPasswordErrorMessage('Please insert password!')
        }

        if (rePassword.length < 5) {
            isPassed = false;
            setRePasswordErrorMessage('Password must be at least 6 characters long!')
        }

        if (rePassword.length < 1) {
            isPassed = false;
            setRePasswordErrorMessage('Please insert password!')
        }

        if (password !== rePassword) {
            isPassed = false;
            setRePasswordErrorMessage('Password do not match!')
        }

        if (isPassed) {

        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(res => {
                console.log('Register')
                history.push('/')
            })
            .catch(err => {
                setErrorMessage(err.message)
                console.log(err)
            });
        }
    }

    return (
            <form className={style.registerForm} onSubmit={onRegisterHandler}>
            <h2 className={style.regH2}>Register</h2>
            <div className={style.regDiv}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Email" name="email" />
                <ErrorDiv>{emailErrorMessage}</ErrorDiv>

                <label htmlFor="password">Password</label>
                <input type="password" id="password" placeholder="Password" name="password" />
                <ErrorDiv>{passwordErrorMessage}</ErrorDiv>

                <label htmlFor="repeatPassword">Repeat Password</label>
                <input type="password" id="repeatPassword" placeholder="Repeat-Password" name="repeatPassword" />
                <ErrorDiv>{rePasswordErrorMessage}</ErrorDiv>
            </div>

            <button type="submit" className={style.regBtn}>Register</button>
            <ErrorDiv>{errorMessage}</ErrorDiv>
        </form>
    );
}

export default Register;