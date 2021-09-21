import "./homepage.scss";
import Navbar from "../components/navbar/Navbar";
import Featured from "../components/featured/Featured";

const Homepage = () => {
    return (
        <div className="homepage">
            <Navbar />
            <Featured />
        </div>
    )
};

export default Homepage;