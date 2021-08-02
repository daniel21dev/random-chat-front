import React from 'react'
import { formatDate } from '../../helpers/formatDate'

export const Message = ({ message, own = false, setEdit=()=>{} }) => {
    // in this component only the prop message is obligatory, this is in order to reuse the component in edition
    return (
        <div className="p-4 my-2 rounded bg-white shadow border-l-4 border-blue-500 w-full">

            <div className="flex justify-between">
                <p className="text-sm"><span className="font-semibold">publicado: </span>{ formatDate( message.createdAt ) }</p>
                
                {
                    own &&(
                        <button 
                            className="flex items-center rounded-lg px-2 py-1 border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                            onClick={()=> setEdit( message )}
                        >
                            <span className="text-sm">Editar</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                            </svg>
                        </button>
                    )
                }
                
            </div>
            <p className="ml-4 h-auto overflow-x-auto text-justify">
                "{ message.text }"
            </p>
        </div>
    )
}
