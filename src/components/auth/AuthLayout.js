import React, { memo } from 'react'

const AuthLayout = ({ children }) => {

    return (
        <>
            <div className="body-bg min-h-screen pt-12 md:pt-20 pb-6 px-2 md:px-0" 
                style={{
                    fontFamily: '"Lato",sans-serif',
                    background: 'linear-gradient(to right, #00c6ff, #0072ff)'
                }}
                >
                <header className="max-w-lg mx-auto">
                    <p>
                    <h1 className="text-4xl font-bold text-white text-center">Random chat</h1>
                    </p>
                </header>

                { children }

                <footer className="max-w-lg mx-auto flex justify-center text-white">
                    <p className="hover:underline">Contacto</p>
                    <span className="mx-3">•</span>
                    <p className="hover:underline">Privacy</p>
                </footer>
            </div>
        </>
    )
}

export default memo(AuthLayout)