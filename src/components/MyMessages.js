import { gql, useMutation, useQuery } from '@apollo/client'
import React, { useState } from 'react'
import { Layout } from './layout/Layout'
import { Message } from './messages/Message'
import Modal from 'react-modal';
import { MessageForm } from './messages/MessageForm';
import { ToastContainer, toast } from 'react-toastify';

const GET_USER_MESSAGES = gql`
    query getUserMessages{
        getUserMessages {
            id
            text
            createdAt
        }
    }
`
const UPDATE_MESSAGE = gql`
    mutation updateMessage($input: UpdateMessageInput!){
        updateMessage(input: $input) {
            id
            text
        }
  }
`
export const MyMessages = () => {

    const { data, loading, refetch } = useQuery( GET_USER_MESSAGES )
    const [ updateMessage ] = useMutation( UPDATE_MESSAGE )
    const [edit, setEdit] = useState( null )
    const messages = data?.getUserMessages || []

    const handleEdit = async(e, text) =>{
        e.preventDefault()
        try {
            console.log({text,id: edit.id });
            await updateMessage({
                 variables:{ input:{ text, id: edit.id }}
            })
            setEdit( null )
            refetch()
        } catch (error) {
            console.log( error.message );
        }
    }

    return (
        <>
            <ToastContainer />
        <Layout>

            <div className="p-10 flex flex-col space-y-3 mb-20">
            
                <h1 className="font-semibold text-2xl text-center text-gray-800">Mis mensajes</h1>

                <div className=" p-2 ">
                    { loading && 'Cargando...'}
                    { messages.length === 0 && 'Aun no tienes mensajes'}
                    {
                        messages.map( message =>(
                            <Message 
                                key={ message.id }
                                message={ message }
                                own={ true }
                                setEdit={ setEdit }
                            />
                        ))
                    }
                </div>

            </div>
            
            <Modal
                isOpen={ !!edit }
                //onAfterOpen={afterOpenModal}
                onRequestClose={()=> setEdit( null )}
                contentLabel="Editar"
                style={{
                    content:{
                        height: '300px',
                        width: '500px',
                        margin: 'auto'
                    }
                }}
            >
                <button
                    className="float-right"
                    onClick={ ()=> setEdit( null ) }
                >X</button>

                <h3 className="text-xl my-2 text-center">Editar mensaje</h3>
                <MessageForm 
                    initialText={ edit?.text }
                    handleSubmit={ handleEdit }
                />
            </Modal>
        </Layout>
        </>
    )
}
