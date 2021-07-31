import React from 'react'

export const Message = ({ text }) => {
    return (
        <div className="p-4 my-2 rounded bg-white shadow border-l-4 border-blue-500">
            <p className="animate__animated animate__bounce">
                { text }
            </p>
        </div>
    )
}
