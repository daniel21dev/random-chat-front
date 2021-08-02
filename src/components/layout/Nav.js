import React from 'react'
import './nav.css'
import { Link} from 'react-router-dom'
import { UserNavOptions } from './UserNavOptions'

export const Nav = ({ data }) => {

    return (
      <nav className="relative bg-white border-b-2 border-gray-300 text-gray-900">
        
      <div className="container mx-auto flex justify-between">
        <div className="relative block p-4 lg:p-6 text-xl text-blue-600 font-bold">Random Chat</div>
        <ul className="flex">
          
          {/*This options are only visible in large screens*/}
          <li className="hover:bg-blue-800 hover:text-white hidden md:block">
            <Link to='/' className="relative block py-6 px-2 lg:p-6 text-sm lg:text-base font-bold">Home</Link>
          </li>
          <li className="hover:bg-blue-800 hover:text-white hidden md:block">
            <Link to='/myMessages' className="relative block py-6 px-2 lg:p-6 text-sm lg:text-base font-bold">Mis mensajes</Link>
          </li>

          { data?.getUser ? (
              <UserNavOptions user={ data.getUser} />
          ):(
            <Link 
              to='/login'
              className="font-bold hover:underline my-auto mx-4"
              >Ingresa a tu cuenta</Link>
          )}
        
        </ul>
      </div>
    </nav>
    
    )
}
