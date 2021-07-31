import React from 'react'

export const Message = ({ text }) => {
    return (
        <div className="border-2 border-blue-500 p-4 rounded">
            <p className="animate__animated animate__bounce">
                { text }
            </p>
        </div>
    )
}
