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

    const { data, loading } = useQuery( GET_USER )

    useEffect(()=>{
        client.resetStore()
    },[])
    
    return (
        <userContext.Provider value={{
            data
        }}>
            <div class="bg-gray-200 font-sans leading-normal tracking-normal w-screen">
                <Nav data={ data }/>
                    <div className=" bg-gray-200 sm:w-full md:w-3/4 lg:w-1/2 mx-auto p-4">
                        { children }
                    </div>

                <MovileNavigation />
            </div>
        </userContext.Provider>
    )
}
