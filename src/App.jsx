import './app.scss';
import Homepage from './pages/homepage/Homepage';
import Registration from "./pages/registration/Registration";
import Loginization from "./pages/loginization/Loginization";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Homepage/>
                </Route>
                {/*<Route path="/movies">*/}
                {/*    <Homepage/>*/}
                {/*</Route>*/}
                {/*<Route path="/series">*/}
                {/*    <Homepage/>*/}
                {/*</Route>*/}
                <Route path="/register">
                    <Registration/>
                </Route>
                <Route path="/login">
                    <Loginization/>
                </Route>
            </Switch>
        </Router>
    );
};

export default App;