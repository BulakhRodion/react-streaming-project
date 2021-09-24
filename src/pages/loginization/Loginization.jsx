import "./loginization.scss"

export default function Loginization() {

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
                <form className="loginization_main-form">
                    <h1>Sign in</h1>
                    <input type="email" placeholder="Email or phone number"/>
                    <input type="password" placeholder="Password"/>
                    <button className="loginization_main-btn">Sign in</button>
                    <span>New to Netflix? <b>Sign up now</b></span>
                    <small>
                        This page is protected by Google reCAPTCHA to ensure you're not a bot. <b>Learn more</b>
                    </small>
                </form>
            </div>
        </div>
    )
}