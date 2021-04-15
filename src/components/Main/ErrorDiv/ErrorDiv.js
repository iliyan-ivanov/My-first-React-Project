import style from './ErrorDiv.module.css';

const ErrorDiv = ({children}) => {

    if (!children) {
        return null;
    }

    return (
        <div className={style.errorDiv}>{children}</div>
    )

}

export default ErrorDiv;