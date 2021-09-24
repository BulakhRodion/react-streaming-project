import "./homepage.scss";
import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import Suggestions from "../../components/suggestions/Suggestions";

const Homepage = () => {
    return (
        <div className="homepage">
            <Navbar />
            <Featured />
            <Suggestions />
            <Suggestions />
            <Suggestions />
            <Suggestions />
        </div>
    )
};

export default Homepage;