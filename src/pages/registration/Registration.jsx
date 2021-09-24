import "./registration.scss"
import {useRef, useState} from "react";
import Jumbotron from "../../components/jumbotron/Jumbotron";

export default function Registration() {

    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    const emailRef = useRef();
    const passRef = useRef();

    const handleStart = () => {
        setEmail(emailRef.current.value);
    }
    const handleFinish = () => {
        setPass(passRef.current.value);
    }
    return (
        <div className="registration">
            <div className="registration_header">
                <div className="registration_head">
                    <div className="registration_head-wrapper">
                        <img className="registration_head-logo"
                             src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/170px-Netflix_2015_logo.svg.png"
                             alt="Netflix logo"/>
                        <button className="registration_head-login">Sign in</button>
                    </div>
                </div>
                <div className="registration_main">
                    <h1>Unlimited movies, TV shows, and more.</h1>
                    <h2>Watch anywhere. Cancel anytime.</h2>
                    <p>Ready to watch? Enter your email to create or restart your membership.</p>{
                    !email ? (
                        <div className="registration_main-input">
                            <input type="email" placeholder="email address" ref={emailRef}/>
                            <button className="registration_main-button" onClick={handleStart}>Get Started</button>
                        </div>
                    ) : (<form className="registration_main-input">
                        <input type="password" placeholder="password" ref={passRef}/>
                        <button className="registration_main-button" onClick={handleFinish}>Start Membership</button>
                    </form>)
                }
                </div>
            </div>
            <Jumbotron direction={"row"} index={0} videoF={true}/>
            <Jumbotron direction={"row-reverse"} index={1}/>
            <Jumbotron direction={"row"} index={2} videoS={true}/>
            <Jumbotron direction={"row-reverse"} index={3}/>
        </div>
    )
}