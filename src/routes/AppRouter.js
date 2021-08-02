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
import { gql, useQuery } from '@apollo/client'

const GET_USER = gql`
  query getUser{
    getUser{
      id
      name
      email
    }
  }
`

export const AppRouter = () => {

    const { data, loading, error } = useQuery( GET_USER )

    useEffect(()=>{
      if( error ){
        localStorage.removeItem('token')
      }
    },[ data, error ])
    if ( loading ) {
        return (<h5>Espere...</h5>);
    }

    return (
        <Router>
              <Switch>
                  <Route exact path='/' component={ Home } />
                  <PrivateRoute exact path='/myMessages' component={ MyMessages } isAuthenticated={ !!data?.getUser } />
                
                  <PublicRoute path='/login' component={ Login } isAuthenticated={ !!data?.getUser  }/>
                  <PublicRoute path='/signup' component={ SignUp } isAuthenticated={ !!data?.getUser }/>
                  <Redirect to='/'/>
              </Switch>
        </Router>
    )
}
