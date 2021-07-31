import { useQuery, gql } from '@apollo/client'
import React from 'react'
import { Message } from './Message'

const GET_RANDOM_MESSAGE = gql`
  query{
    getRandomMessage {
      text
    }
  }
`

export const GetMessage = () => {

    const { data, error, loading, refetch } = useQuery( GET_RANDOM_MESSAGE )

    if( loading ) return 'cargandoo'
    if( error ) return 'error'

    const handleRefetch = async() =>{
       refetch()
    }

    const { text } = data.getRandomMessage
    
    return (
        <div className="bg-white p-4 rounded shadow w-full flex-col justify-end">
            
            <Message text={ text }/>

            <div>
                <button
                    className="bg-blue-600 text-white rounded p-2 mx-auto my-2 shadow hover:bg-blue-700"
                    onClick={ handleRefetch }
                >
                    Get another message
                </button>
            </div>
        </div>
    )
}
