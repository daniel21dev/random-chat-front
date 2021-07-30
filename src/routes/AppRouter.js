import React, { useEffect } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Redirect,
    Route
} from "react-router-dom";
import { Login } from '../components/auth/Login';
import { SignUp } from '../components/auth/SignUp';
import { Home } from '../components/Home';
import { MyMessages } from '../components/MyMessages';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';


export const AppRouter = () => {

    const token = localStorage.getItem('token')
    const user = false
    const loading = false

    useEffect(() => {
        if( token ){
            
        }
    }, [])

    if ( loading ) {
        return (<h5>Espere...</h5>);
    }


    return (
        <Router>
            <Switch>
                <Route exact path='/' component={ Home } />
                <PrivateRoute exact path='/myMessages' component={ MyMessages } isAuthenticated={ !!user } />

                <PublicRoute path='/login' component={ Login } isAuthenticated={ !!user  }/>
                <PublicRoute path='/signup' component={ SignUp } isAuthenticated={ !!user }/>
                <Redirect to='/'/>
            </Switch>
        </Router>
    )
}
