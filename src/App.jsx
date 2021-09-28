import './app.scss';
import Homepage from './pages/homepage/Homepage';
import Registration from "./pages/registration/Registration";
import Loginization from "./pages/loginization/Loginization";
import {
    BrowserRouter as Router, Switch
} from "react-router-dom";
import {IsUserRedirect, ProtectedRoute} from "./helpers/routes"

const App = () => {
    const user = null;

    return (
        <Router>
            <Switch>
                <IsUserRedirect user={user} exact loggedInPath="/browse" path="/">
                    <Registration/>
                </IsUserRedirect>
                {/*<Route path="/movies">*/}
                {/*    <Homepage/>*/}
                {/*</Route>*/}
                {/*<Route path="/series">*/}
                {/*    <Homepage/>*/}
                {/*</Route>*/}
                <ProtectedRoute user={user} exact path="/browse">
                    <Homepage/>
                </ProtectedRoute>
                <IsUserRedirect user={user} exact loggedInPath="/browse" path="/login">
                    <Loginization/>
                </IsUserRedirect>
            </Switch>
        </Router>
    );
};

export default App;