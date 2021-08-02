import React from 'react'
import { useHistory } from 'react-router-dom'
import client from '../../config/apollo'

export const UserNavOptions = ({ user }) => {

    const history = useHistory()

    const handleLogout = () =>{
        localStorage.removeItem('token')
        client.resetStore()
        history.go(0)
    }

    return (
        <li className="toggleable hover:bg-blue-800 hover:text-white">
            
            <input type="checkbox" defaultValue="selected" id="toggle-one" className="toggle-input" />
            <label htmlFor="toggle-one" className="block cursor-pointer py-6 px-4 lg:p-6 text-sm lg:text-base font-bold">{ user.name }</label>
  
            <div role="toggle" className="p-6 z-10 mega-menu mb-16 sm:mb-0 shadow-xl bg-blue-800 sm:w-full md:w-1/2 lg:w-1/3">
                <div className="container mx-auto w-full flex flex-wrap justify-between">
                  
                  <ul className="px-4 sm:w-full  pb-6 pt-6 lg:pt-3">
                    <h3 className="font-bold text-xl text-white text-bold mb-2">{ user.email }</h3>
                    
                    <li>
                      <button
                        className="block p-3 hover:bg-blue-600 text-gray-300 hover:text-white"
                        onClick={ handleLogout }
                        >Cerrar sesión</button>
                    </li>
                   
                  </ul>
                  
                </div>
            </div>
        </li>
    )
}
