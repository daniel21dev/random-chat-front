import React from 'react'
import { Alert } from '../utils/Alert'

export const LoginForm = ({ formik }) => {

    return (
        <form className="flex flex-col" 
                onSubmit={ formik.handleSubmit }
            >
            { formik.touched.email && formik.errors.email ?(
                    <Alert type="error" msg={ formik.errors.email }/>
            ): null }
            <div className="mb-6 pt-3 rounded bg-gray-200">
                <label className="block text-gray-700 text-sm font-bold mb-2 ml-3" htmlFor="email">Email</label>
                <input 
                    className={`bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-blue-600 transition duration-500 px-3 pb-3 ${ formik.touched.email && formik.errors.email && 'border-red-600' }`}  
                    type="text" 
                    id="email"
                    name="email"
                    onChange={ formik.handleChange }
                    onBlur={ formik.handleBlur }
                    value={ formik.values.email }
                />
            </div>
                    
            { formik.touched.password && formik.errors.password ?(
                <Alert type="error" msg={ formik.errors.password }/>
            ): null }
            <div className="mb-6 pt-3 rounded bg-gray-200">
                <label className="block text-gray-700 text-sm font-bold mb-2 ml-3" htmlFor="password">Password</label>
                <input 
                    className={`bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-blue-600 transition duration-500 px-3 pb-3 ${ formik.touched.password && formik.errors.password && 'border-red-600' }`} 
                    type="password" 
                    id="password"
                    onChange={ formik.handleChange }
                    onBlur={ formik.handleBlur }
                    value={ formik.values.password } 
                />
            </div>

            <div className="flex justify-end">
                <p className="text-sm text-blue-600 hover:text-blue-700 hover:underline mb-6">olvidaste tu contrase??a?</p>
            </div>

            <button 
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200" 
                type="submit"
                >Login</button>
        </form>
    )
}
