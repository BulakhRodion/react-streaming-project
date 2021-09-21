import "./navbar.scss";
import {ArrowDropDown, Notifications, Search} from "@material-ui/icons";
import {useState} from "react";

const Navbar = () => {
    const [isScrolled, setScrolled] = useState(false);

    window.onscroll = () => {
        setScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
    }
    return (
        <div className={ isScrolled ? "navbar scrolled" : "navbar"}>
            <div className="container">
                <div className="navbar_left">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/170px-Netflix_2015_logo.svg.png" alt="Netflix logo"/>
                    <span>Homepage</span>
                    <span>Series</span>
                    <span>Movies</span>
                    <span>New</span>
                    <span>Popular</span>
                    <span>My List</span>
                </div>
                <div className="navbar_right">
                    <Search className="navbar_icon"/>
                    <span>Kid</span>
                    <Notifications className="navbar_icon"/>
                    <img src="https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg" alt="profile icon"/>
                    <div className="navbar_profile">
                        <ArrowDropDown className="navbar_icon"/>
                        <div className="navbar_profile-options">
                            <span>Setting</span>
                            <span>Logout</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Navbar;