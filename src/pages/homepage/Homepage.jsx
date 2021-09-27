import "./homepage.scss";
import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import Suggestions from "../../components/suggestions/Suggestions";

const Homepage = ({type}) => {

    return (
        <div className="homepage">
            <Navbar />
            <Featured type={type}/>
            <Suggestions query={'action'}/>
            <Suggestions query={'crime'}/>
            <Suggestions query={'horror'}/>
            <Suggestions query={'fantasy'}/>
        </div>
    )
};

export default Homepage;