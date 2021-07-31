import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import AuthLayout from './AuthLayout'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import SignUpForm from './SignUpForm'
import { Alert } from '../utils/Alert'
import { gql, useMutation } from '@apollo/client'

const CREATE_USER = gql`
    mutation($input: UserInput!){
        createUser(input: $input) {
            token
        }
    }
`

export const SignUp = () => {

    const [error,setError] = useState(null)
    const [ createUser ] = useMutation(CREATE_USER)
    const history = useHistory()

    const formik = useFormik({
        initialValues:{
            name: '',
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .required('El mombre es obligatorio'),
            email: Yup.string()
                .email('el email no es valido')
                .required('El email no puede ir vacio'),
            password: Yup.string()
                .required('El password es obligatorio')
        }),
        onSubmit: async ({name,email,password}) =>{
            try {
                const {data} = await createUser({
                    variables:{
                        input:{
                            name,
                            email,
                            password
                        }
                    }
                })
                localStorage.setItem('token', data.createUser.token )
                history.push('/')
            } catch (error) {
                setError( error.message )
            }
        }   
    })

    return (
        <AuthLayout>
            <main className="bg-white max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl">
                <section>
                    <h3 className="font-bold text-2xl">Bienvenido</h3>
                    <p className="text-gray-600 pt-2">Cree una cuenta nueva</p>
                </section>
                <section className="mt-10">

                    { error && <Alert type="error" msg={ error }/>}

                    <SignUpForm formik={ formik }/>

                </section>

                <div className="max-w-lg mx-auto text-center mt-12 mb-6">
                    <p className="text-black">¿Ya tienes una cuenta? 
                        <Link to='/login' className="underline"> Login</Link>.
                    </p>
                </div>
            </main>

            
        </AuthLayout>
    )
}
