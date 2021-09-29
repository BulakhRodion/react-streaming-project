import "./navbar.scss";
import {ArrowDropDown, Notifications, Search} from "@material-ui/icons";
import {useState} from "react";
import { getAuth, signOut } from 'firebase/auth';

const Navbar = () => {
    const [isScrolled, setScrolled] = useState(false);

    window.onscroll = () => {
        setScrolled(window.pageYOffset !== 0);
        return () => (window.onscroll = null);
    }

    const handleLogout = (event) => {
        event.preventDefault();
        const auth = getAuth();
        signOut(auth).then(() => {
            console.log('Logout successful')
        }).catch((error) => {
            console.log(error)
        });
    }

    return (
        <div className={ isScrolled ? "navbar scrolled" : "navbar"}>
            <div className="container">
                <div className="navbar_left">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/170px-Netflix_2015_logo.svg.png" alt="Netflix logo"/>
                    <span>Series</span>
                    <span>Movies</span>
                </div>
                <div className="navbar_right">
                    <Search className="navbar_icon"/>
                    <Notifications className="navbar_icon"/>
                    <img src="https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg" alt="profile icon"/>
                    <div className="navbar_profile">
                        <ArrowDropDown className="navbar_icon"/>
                        <div className="navbar_profile-options">
                            <span>Setting</span>
                            <span className="navbar_profile-logout" onClick={handleLogout}>Logout</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Navbar;