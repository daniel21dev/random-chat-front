import React from 'react'
//import { useDispatch, useSelector } from 'react-redux'
import './nav.css'
//import { logoutAction } from '../../actions/authActions'
import { Link, useHistory } from 'react-router-dom'

export const Nav = () => {

  //const dispatch = useDispatch()
  const history = useHistory()
  //const { user } = useSelector( state => state.auth )
  const user = false

  const handleLogout = () =>{
    //dispatch( logoutAction() )
    history.push('/login')
  }

    return (
      <nav className="relative bg-white border-b-2 border-gray-300 text-gray-900">
        
      <div className="container mx-auto flex justify-between">
        <div className="relative block p-4 lg:p-6 text-xl text-blue-600 font-bold">Trato</div>
        <ul className="flex">
          
          {/*Regular Link*/}
          <li className="hover:bg-blue-800 hover:text-white hidden md:block">
            <Link to='/nuevotrato' className="relative block py-6 px-2 lg:p-6 text-sm lg:text-base font-bold">Nuevo trato</Link>
          </li>
          <li className="hover:bg-blue-800 hover:text-white hidden md:block">
            <Link to='/tratos' className="relative block py-6 px-2 lg:p-6 text-sm lg:text-base font-bold">Tratos</Link>
          </li>
          {/*Toggleable Link*/}

          { user ? (
              <li className="toggleable hover:bg-blue-800 hover:text-white">
            
              <input type="checkbox" defaultValue="selected" id="toggle-one" className="toggle-input" />
              <label htmlFor="toggle-one" className="block cursor-pointer py-6 px-4 lg:p-6 text-sm lg:text-base font-bold">{ user.name }</label>
  
              <div role="toggle" className="p-6 mega-menu mb-16 sm:mb-0 shadow-xl bg-blue-800 sm:w-full md:w-1/2 lg:w-1/3">
                <div className="container mx-auto w-full flex flex-wrap justify-between">
                  
                  <ul className="px-4 sm:w-full  pb-6 pt-6 lg:pt-3">
                    <h3 className="font-bold text-xl text-white text-bold mb-2">{ user.email }</h3>
                    <li>
                      <button
                        className="block p-3 hover:bg-blue-600 text-gray-300 hover:text-white"
                        >Configuración</button>
                    </li>
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
          ): null}
        
        </ul>
      </div>
    </nav>
    
    )
}
