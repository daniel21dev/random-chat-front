import React from 'react'
import { Layout } from './layout/Layout'
import { GetMessage } from './messages/GetMessage'

export const Home = () => {

    return (
        <Layout>

          <div className="p-10 flex flex-col space-y-3">
            
            <h1 className="font-bold text-2xl text-center">Mensajes aleatorios</h1>

            <GetMessage />
           
          </div>

        </Layout>
    )
}
