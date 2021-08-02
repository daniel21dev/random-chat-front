import { gql, useMutation, useQuery } from '@apollo/client'
import React, { useState } from 'react'
import { Layout } from './layout/Layout'
import { Message } from './messages/Message'
import Modal from 'react-modal';
import { MessageForm } from './messages/MessageForm';
import { ToastContainer, toast } from 'react-toastify';
import LoadingMessage from './messages/LoadingMessage';

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
    // manage what message will be updated and if modal is open
    const [edit, setEdit] = useState( null )
    const messages = data?.getUserMessages || []

    const handleEdit = async(e, text) =>{
        e.preventDefault()
        text = text.trim()
        if( text.length < 1 || text.length > 255){
            return toast.warn('El mensaje debe de tener entre 1 y 255 caracteres')
        }

        try {
            await updateMessage({
                 variables:{ input:{ text, id: edit.id }}
            })
            setEdit( null )
            // update the list of messages
            refetch()
            toast.success('Mensaje actualizado')
        } catch (error) {
            toast.error('Hubo un error')
        }
    }

    return (
        <>
            <ToastContainer />
        <Layout>

            <div className="p-10 flex flex-col space-y-3 mb-20">
            
                <h1 className="font-semibold text-2xl text-center text-gray-800">Mis mensajes</h1>

                <div className=" p-2 ">
                    { loading && <LoadingMessage />}
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
            
            {/* modal for edit a meesage of the list */}
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
