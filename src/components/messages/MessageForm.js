import React, { useState } from 'react'

export const MessageForm = ({ handleSubmit, initialText='' }) => {

    const [text,setText] = useState( initialText )

    return (
        <form
                onSubmit={(e)=> handleSubmit(e,text) }
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
    )
}
