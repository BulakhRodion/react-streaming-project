import "./homepage.scss";
import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import Suggestions from "../../components/suggestions/Suggestions";

const Homepage = () => {

    return (
        <div className="homepage">
            <Navbar />
            <Featured />
            <Suggestions query={'batman'} isFav={false} title={'Action'}/>
            <Suggestions query={'matrix'} isFav={false} title={'Drama'}/>
            <Suggestions query={'Rick'} isFav={false} title={'Comedy'}/>
            <Suggestions query={'Killer'} isFav={false} title={'Crime'}/>
        </div>
    )
};

export default Homepage;