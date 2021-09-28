import {Route, Redirect} from 'react-router-dom';
import Homepage from "../pages/homepage/Homepage";

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

export function ProtectedRoute({user}) {
    return (
        <Route
            exact
            render={({location}) => {
                if(user) {
                    return <Homepage />
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