import { gql, useMutation } from '@apollo/client'
import React from 'react'
import { useHistory } from 'react-router-dom'
import { MessageForm } from './MessageForm'

const CREATE_MESSAGE = gql`
    mutation createMessage($input: MessageInput!){
        createMessage(input: $input) {
            text
        }
    }
`

export const PostMessage = () => {

    const [ createMessage ] = useMutation( CREATE_MESSAGE )
    const history = useHistory()

    const handleSubmit = async(e, text) =>{
        e.preventDefault()

        if( text.length < 1) return

        try {
            await createMessage({ variables:{ input:{ text } }})
            history.push('/myMessages')
        } catch (error) {
            console.log( error );
        }
    }

    return (
        <div className="bg-white p-4 rounded shadow w-full flex-col justify-end">
            
            <MessageForm handleSubmit={ handleSubmit }/>
            
        </div>
    )
}
