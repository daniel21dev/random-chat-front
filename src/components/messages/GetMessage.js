import { useQuery, gql } from '@apollo/client'
import React, { useEffect, useState } from 'react'
import { Message } from './Message'

const GET_RANDOM_MESSAGE = gql`
  query getRandomMessage{
    getRandomMessage {
      text
    }
  }
`

export const GetMessage = () => {
  
  const { data, error, loading, refetch } = useQuery( GET_RANDOM_MESSAGE )
  const [text, setText] = useState( null )
  
  useEffect(()=>{
    setText( data?.getRandomMessage.text )
  },[ data ])

  if( loading ) return 'cargandoo'
  if( error ) return 'error'
  
  const handleRefetch = async() =>{
    refetch()
  }
  
    return (
        <div className="bg-white p-4 rounded shadow w-full flex-col justify-end">
            
            {
              text && <Message text={ text }/>
            }
      
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
