import { gql, useQuery } from '@apollo/client'
import React from 'react'
import { Layout } from './layout/Layout'
import { GetMessage } from './messages/GetMessage'
import { PostMessage } from './messages/PostMessage'

const GET_USER = gql`
  query getUser{
    getUser{
      id
      name
    }
  }
`

export const Home = () => {
  
  // if user is in cache not send the query
  const { data } = useQuery( GET_USER )

    return (
        <Layout>
          <div className="p-10 flex flex-col space-y-3">
            
            <h1 className="font-semibold text-2xl text-center text-gray-800">Mensajes aleatorios</h1>

            <GetMessage />
            
            {
              data?.getUser &&
              <div>
                <h2 className="font-semibold text-2xl text-center text-gray-800">Publica un mensaje anonimo</h2>
                <PostMessage />
              </div>
            }
          </div>


        </Layout>
    )
}
