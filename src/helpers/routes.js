import {Route, Redirect} from 'react-router-dom';
import Homepage from "../pages/homepage/Homepage";
import Favorites from "../pages/favorites/Favorites";

export function IsUserRedirect({user, children, loggedInPath}) {

    return (
        <Route exact
               render={() => {
                   if (!user) {
                       return children;
                   }
                   if (user) {
                       return(
                           <Redirect to={{
                               pathname: loggedInPath
                           }}
                           />
                       )
                   }
                   return null;
               }}
        />
    )
}

export function ProtectedRoute({user, isFavorites}) {
    return (
        <Route
            exact
            render={({location}) => {
                if(user && !isFavorites) {
                    return <Homepage />
                }
                if(user && isFavorites) {
                    return <Favorites />
                }
                if(!user) {
                    return (
                        <Redirect to={{
                            pathname: "/login",
                            state: { from: location }
                        }} />
                    )
                }
                return null;
            }}
        />
    )
}