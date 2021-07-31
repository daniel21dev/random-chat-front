import { gql, useMutation } from '@apollo/client'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

const CREATE_MESSAGE = gql`
    mutation createMessage($input: MessageInput!){
        createMessage(input: $input) {
            text
        }
    }
`

export const MessageForm = () => {

    const [ createMessage ] = useMutation( CREATE_MESSAGE )
    const [text,setText] = useState('')
    const history = useHistory()

    const handleSubmit = async(e) =>{
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
            
            <form
                onSubmit={ handleSubmit }
            >
                <textarea
                    className="border-2 p-2 border-gray-400 rounded w-full font-semibold focus:outline-none focus:border-blue-600"
                    placeholder="tú mensaje (logitud maxima 250 caracteres)"
                    value={ text }
                    onChange={ (e)=> setText( e.target.value ) }
                >

                </textarea>
                <div>
                    <button
                        className="bg-blue-600 text-white rounded p-2 mx-auto my-2 shadow hover:bg-blue-700"
                        type="submit"
                    >
                        Publicar mensaje
                    </button>
                </div>
            </form>
            
        </div>
    )
}
