import { useQuery, gql } from '@apollo/client'
import React, { useEffect, useState } from 'react'
import LoadingMessage from './LoadingMessage'
import { Message } from './Message'

const GET_RANDOM_MESSAGE = gql`
  query getRandomMessage{
    getRandomMessage {
      id
      text
      createdAt
    }
  }
`

export const GetMessage = () => {
  
  const { data, error, loading, refetch } = useQuery( GET_RANDOM_MESSAGE )
  const [message, setMessage] = useState( null )
  
  // this effect ensures that the message is always new, is necesary because apollo client cache results
  useEffect(()=>{
    if( data?.getRandomMessage ){
      setMessage( data.getRandomMessage );
    }
  },[ data ])
  // if the query is loading display a void component
  if( loading ) return <LoadingMessage />
  if( error ) return 'error'
  // this func brings a new random message 
  const handleRefetch = async() =>{
    refetch()
  }
  
    return (
        <div className="bg-white p-4 rounded shadow w-full flex-col justify-end">
            
            {
              message && <Message message={ message }/>
            }
      
            <div>
                <button
                    className="bg-blue-600 text-white rounded p-2 mx-auto my-2 shadow hover:bg-blue-700"
                    onClick={ handleRefetch }
                >
                    Traer otro mensaje
                </button>
            </div>
        </div>
    )
}
