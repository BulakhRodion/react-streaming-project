import "./loginization.scss"
import {Link} from "react-router-dom";
import {useState} from "react";
import { useHistory } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

export default function Loginization() {

    const history = useHistory();
    const auth = getAuth();

    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const isInvalid = password === '' || emailAddress === '';

    const handleSignin = event => {
        event.preventDefault();

        signInWithEmailAndPassword(auth, emailAddress, password).then(() => {
            history.push('/browse')
        }).catch((error) => {
            setEmailAddress('');
            setPassword('');
            if (error.message === 'Firebase: Error (auth/user-not-found).') {
                setError('User not found :C')
            } else {
                setError(error.message)
            }
        });
    }

    return (
        <div className="loginization">
            <div className="loginization_head">
                <div className="loginization_head-wrapper">
                    <img className="loginization_head-logo"
                         src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/170px-Netflix_2015_logo.svg.png"
                         alt="Netflix logo"/>
                </div>
            </div>
            <div className="loginization_main">
                <form className="loginization_main-form" onSubmit={handleSignin} method="POST">
                    <h1>Sign in</h1>
                    {error && <div className='loginization_error'>{error}</div>}
                    <input type="email" placeholder="Email address"
                           value={emailAddress}
                           onChange={({ target }) => setEmailAddress(target.value)}
                    />
                    <input type="password" placeholder="Password"
                           value={password}
                           onChange={({ target }) => setPassword(target.value)}
                    />
                    <button className="loginization_main-btn"
                            disabled={isInvalid} type="submit"
                    >
                        Sign in
                    </button>
                    <span>New to Netflix?
                    <Link to={{pathname: "/"}}>
                        <b>Sign up now</b>
                    </Link>
                    </span>
                    <small>
                        This page is protected by Google reCAPTCHA to ensure you're not a bot. <b>Learn more</b>
                    </small>
                </form>
            </div>
        </div>
    )
}