import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import AuthLayout from './AuthLayout'
import { LoginForm } from './LoginForm'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { Alert } from '../utils/Alert'
import { gql, useMutation } from '@apollo/client'

const LOGIN = gql`
    mutation($input: LoginInput!){
        loginUser(input: $input)
    }
`

export const Login = () => {

    const [loginUser] = useMutation(LOGIN)
    const [error,setError] = useState(null)

    const formik = useFormik({
        initialValues:{
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email('el email no es valido')
                .required('El email no puede ir vacio'),
            password: Yup.string()
                .required('El password es obligatorio')
        }),
        onSubmit: async ({email,password}) =>{
            try {
                const {data} = await loginUser({
                    variables:{
                        input:{
                            email,
                            password
                        }
                    }
                })
                if( !data.loginUser ){
                    setError( 'Sucedio un error' )
                    return setTimeout(()=> setError(null), 3000)
                }
                localStorage.setItem('token', data.loginUser)
            } catch (err) {
                setError( 'Sucedio un error' )
                setTimeout(()=> setError(null), 3000)
            }
        }
    })

    return (
        <AuthLayout>
            <main className="bg-white max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl">
                <section>
                    <h3 className="font-bold text-2xl">Welcome to Startup</h3>
                    <p className="text-gray-600 pt-2">Sign in to your account.</p>
                </section>
                <section className="mt-10">
                { error && <Alert type="error" msg={ error }/>}

                <LoginForm formik={ formik }/>

                </section>

                <div className="max-w-lg mx-auto text-center mt-12 mb-6">
                    <p className="text-black">¿No tienes una cuenta? 
                        <Link to='/signup' className="underline"> Sign Up</Link>.
                    </p>
                </div>
            </main>

            
        </AuthLayout>
    )
}
