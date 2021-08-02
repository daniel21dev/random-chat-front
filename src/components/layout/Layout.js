import { gql, useQuery } from '@apollo/client'
import React, { useEffect } from 'react'
import client from '../../config/apollo'
import { userContext } from '../context/userContext'
import { MovileNavigation } from './MovileNavigation'
import { Nav } from './Nav'

const GET_USER = gql`
  query getUser{
    getUser{
      id
      name
      email
    }
  }
`

export const Layout = ({ children }) => {

    const { data } = useQuery( GET_USER )

    // reset the apollo cache in order to have the current token and current data
    useEffect(()=>{
        client.resetStore()
    },[])
    // using a context in order to provide data to child components and scale in future
    return (
        <userContext.Provider value={{
            data
        }}>
            <div class="bg-gray-200 font-sans leading-normal tracking-normal w-screen min-w-full">
                <Nav data={ data }/>
                    <div className=" bg-gray-200 sm:w-full md:w-3/4 lg:w-1/2 mx-auto p-4">
                        { children }
                    </div>

                <MovileNavigation />
            </div>
        </userContext.Provider>
    )
}
