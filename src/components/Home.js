import { gql, useQuery } from '@apollo/client'
import React from 'react'
import { Layout } from './layout/Layout'
import { GetMessage } from './messages/GetMessage'
import { MessageForm } from './messages/MessageForm'

const GET_USER = gql`
  query getUser{
    getUser{
      id
      name
    }
  }
`
export const Home = () => {
  
  const {data} = useQuery( GET_USER )

    return (
        <Layout>

          <div className="p-10 flex flex-col space-y-3">
            
            <h1 className="font-semibold text-2xl text-center text-gray-800">Mensajes aleatorios</h1>

            <GetMessage />

            <h2 className="font-semibold text-2xl text-center text-gray-800">Publica un mensaje anonimo</h2>
            {
              data?.getUser &&
              <MessageForm />
            }
          </div>

        </Layout>
    )
}
