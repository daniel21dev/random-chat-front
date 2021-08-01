import React from 'react'
import { formatDate } from '../../helpers/formatDate'

export const Message = ({ message, own = false }) => {

    return (
        <div className="p-4 my-2 rounded bg-white shadow border-l-4 border-blue-500">

            <div className="flex justify-between">
                <p className="text-sm"><span className="font-semibold">publicado: </span>{ formatDate( message.createdAt ) }</p>
                
                {
                    own &&(
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                        </svg>
                    )
                }
            </div>
            <p className="ml-4">
                "{ message.text }"
            </p>
        </div>
    )
}
