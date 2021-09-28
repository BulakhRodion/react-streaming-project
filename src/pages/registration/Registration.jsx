import "./registration.scss"
import { useState} from "react";
import Jumbotron from "../../components/jumbotron/Jumbotron";
import Accordion from "../../components/accordion/Accordion";
import {Link, useHistory} from "react-router-dom";
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";

export default function Registration() {

    const history = useHistory();
    const auth = getAuth();

    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const isInvalid = emailAddress === '' || password === '';


    const handleFinish = event => {
        event.preventDefault()

        createUserWithEmailAndPassword(auth, emailAddress, password)
            .then((userCredential) => {
                const user = userCredential.user;
            })
            .then(() => {
                history.push('/login')
            })
            .catch((error) => {
                setEmailAddress('');
                setPassword('');
                setError(error.message);
            });
    }
    return (
        <div className="registration">
            <div className="registration_header">
                <div className="registration_head">
                    <div className="registration_head-wrapper">
                        <img className="registration_head-logo"
                             src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/170px-Netflix_2015_logo.svg.png"
                             alt="Netflix logo"/>
                        <Link to={{pathname: "/login"}}>
                            <button className="registration_head-login">Sign in</button>
                        </Link>
                    </div>
                </div>
                <div className="registration_main">
                    <h1>Unlimited movies, TV shows, and more.</h1>
                    <h2>Watch anywhere. Cancel anytime.</h2>
                    <p>Ready to watch? Enter your email to create or restart your membership.</p>
                    {error && <div className='registration_error'>{error}</div>}
                    <form className="registration_main-form" onSubmit={handleFinish} method="POST">
                        <div className="registration_main-input">
                            <input type="email" placeholder="email address" value={emailAddress}
                                   onChange={({target}) => setEmailAddress(target.value)}/>
                            <input type="password" placeholder="password" value={password}
                                   onChange={({target}) => setPassword(target.value)}/>
                        </div>
                        <div className="registration_main-input">
                            <button className="registration_main-button" type="submit" >Start
                                Membership
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <Jumbotron direction={"row"} index={0} videoF={true}/>
            <Jumbotron direction={"row-reverse"} index={1}/>
            <Jumbotron direction={"row"} index={2} videoS={true}/>
            <Jumbotron direction={"row-reverse"} index={3}/>
            <Accordion/>
        </div>
    )
}