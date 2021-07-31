import React from 'react'

export const Message = ({ text }) => {
    return (
        <div className="border-2 border-blue-500 p-4 rounded">
            { text }
        </div>
    )
}
