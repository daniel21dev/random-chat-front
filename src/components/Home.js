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
  
  const {data,loading, error} = useQuery( GET_USER )

    return (
        <Layout>

          <div className="p-10 flex flex-col space-y-3">
            
            <h1 className="font-bold text-2xl text-center">Mensajes aleatorios</h1>

            <GetMessage />

            {
              data.getUser &&
              <MessageForm />
            }
          </div>

        </Layout>
    )
}
