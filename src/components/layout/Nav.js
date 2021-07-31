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
          
          {/*Regular Link*/}
          <li className="hover:bg-blue-800 hover:text-white hidden md:block">
            <Link to='/nuevotrato' className="relative block py-6 px-2 lg:p-6 text-sm lg:text-base font-bold">Nuevo trato</Link>
          </li>
          <li className="hover:bg-blue-800 hover:text-white hidden md:block">
            <Link to='/tratos' className="relative block py-6 px-2 lg:p-6 text-sm lg:text-base font-bold">Tratos</Link>
          </li>
          {/*Toggleable Link*/}

          { data.getUser ? (
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
