import React, { memo } from 'react'

const AuthLayout = ({ children }) => {

    return (
        <div className="body-bg min-h-screen pt-12 md:pt-20 pb-6 px-2 md:px-0" 
            style={{
                fontFamily: '"Lato",sans-serif',
                background: 'linear-gradient(315deg, #9921e8 0%, #5f72be 74%)'
            }}
            >
            <header className="max-w-lg mx-auto">
                <a href="#">
                <h1 className="text-4xl font-bold text-black text-center">Startup</h1>
                </a>
            </header>

            { children }

            <footer className="max-w-lg mx-auto flex justify-center text-white">
                <a href="#" className="hover:underline">Contact</a>
                <span className="mx-3">•</span>
                <a href="#" className="hover:underline">Privacy</a>
            </footer>
        </div>
    )
}

export default memo(AuthLayout)