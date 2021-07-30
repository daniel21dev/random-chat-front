import React from 'react'
import { Layout } from './layout/Layout'

export const Home = () => {
    return (
        <Layout>
          <h1>Clientes</h1>

          <div className="p-10 flex flex-col space-y-3">

            <input 
              className="p-4 shadow-md border border-gray-500 rounded-xl text-2xl font-semibold text-gray-700 focus:outline-none focus:border-purple-700 focus:border-2"
              type="text"
              placeholder="your message"
            />

            <input 
              className="p-4 shadow-md border-2 rounded-xl text-2xl font-semibold text-gray-700 focus:outline-none hover:bg-purple-700 border-purple-700 hover:text-white focus:border-2"
              type="button"
              placeholder="your message"
              value="Send"
            />
          </div>

        </Layout>
    )
}
