import './app.scss';
import Homepage from './pages/homepage/Homepage';
import Registration from "./pages/registration/Registration";
import Loginization from "./pages/loginization/Loginization";
import {
    BrowserRouter as Router, Switch
} from "react-router-dom";
import {IsUserRedirect, ProtectedRoute} from "./helpers/routes"
import {useAuthListener} from "./hooks";

const App = () => {
    const {user} = useAuthListener();

    return (
        <Router>
            <Switch>
                <IsUserRedirect user={user} exact loggedInPath="/browse" path="/">
                    <Registration/>
                </IsUserRedirect>
                <ProtectedRoute user={user} exact path="/browse">
                    <Homepage />
                </ProtectedRoute>
                <IsUserRedirect user={user} exact loggedInPath="/browse" path="/login">
                    <Loginization/>
                </IsUserRedirect>
            </Switch>
        </Router>
    );
};

export default App;