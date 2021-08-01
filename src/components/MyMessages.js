import { gql, useQuery } from '@apollo/client'
import React from 'react'
import { Layout } from './layout/Layout'
import { Message } from './messages/Message'

const GET_USER_MESSAGES = gql`
    query getUserMessages{
        getUserMessages {
            id
            text
            createdAt
        }
    }
`
export const MyMessages = () => {

    const { data, loading, error } = useQuery( GET_USER_MESSAGES )

    const messages = data?.getUserMessages || []

    return (
        <Layout>
            <div className="p-10 flex flex-col space-y-3 mb-20">
            
                <h1 className="font-semibold text-2xl text-center text-gray-800">My messages</h1>

                <div className=" p-2 ">
                    { loading && 'Cargando...'}
                    { messages.length === 0 && 'Aun no tienes mensajes'}
                    {
                        messages.map( message =>(
                            <Message 
                                key={ message.id }
                                message={ message }
                                own={ true }
                            />
                        ))
                    }
                </div>

            </div>
            
        </Layout>
    )
}
