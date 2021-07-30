import React from 'react'
import { MovileNavigation } from './MovileNavigation'
import { Nav } from './Nav'
//import { SideBar } from './SideBar'

export const Layout = ({ children }) => {
    return (
        <div class="bg-gray-200 font-sans leading-normal tracking-normal w-screen h-screen">
            <Nav />
                <div className=" bg-gray-200 sm:w-full md:w-9/12 mx-auto p-4">
                    { children }
                </div>

            <MovileNavigation />
        </div>
    )
}
