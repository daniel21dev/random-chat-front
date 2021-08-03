import { gql, useMutation } from '@apollo/client'
import React, { useEffect } from 'react'
import { MessageForm } from './MessageForm'
import { ToastContainer, toast } from 'react-toastify';

const CREATE_MESSAGE = gql`
    mutation createMessage($input: MessageInput!){
        createMessage(input: $input) {
            text
        }
    }
`

export const PostMessage = () => {

    const [ createMessage ] = useMutation( CREATE_MESSAGE )

    useEffect(() => {
        console.log( createMessage );
    }, [createMessage])

    const handleSubmit = async(e, text, setText) =>{
        e.preventDefault()
        e.target.reset()
        text = text.trim()
        if( text.length < 1 || text.length > 255){
            return toast.warning('El mensaje debe de tener entre 1 y 255 caracteres')
        }

        try {
            await createMessage({ variables:{ input:{ text } }})
            setText('')
            toast.success('Mensaje publicado')
        } catch (error) {
            toast.error('Hubo un error')
            console.log( error );
        }
    }

    return (
        <div className="bg-white p-4 rounded shadow w-full flex-col justify-end">
            <ToastContainer />
            <MessageForm handleSubmit={ handleSubmit } initialText=''/>
            
        </div>
    )
}
