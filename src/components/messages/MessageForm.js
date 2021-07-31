import React from 'react'

export const MessageForm = () => {

    return (
        <div className="bg-white p-4 rounded shadow w-full flex-col justify-end">
            
            <form>
                <textarea
                    className="border-2 border-gray-400 rounded w-full focus:outline-none focus:border-blue-600"
                >

                </textarea>
                <div>
                    <button
                        className="bg-blue-600 text-white rounded p-2 mx-auto my-2 shadow hover:bg-blue-700"
                
                    >
                        post message
                    </button>
                </div>
            </form>
            
        </div>
    )
}
