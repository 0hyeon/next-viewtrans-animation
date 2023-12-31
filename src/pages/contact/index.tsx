import Inner from '@/components/Layout/Inner'
import Curve from '@/components/Layout/Curve'
import Head from 'next/head'
import React from 'react'

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact</title>
        <meta name="description" content="app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Curve>
        <h1>Contact</h1>
        <div className="body">
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit
            inventore distinctio quia. Quam necessitatibus delectus, incidunt
          </p>
        </div>
      </Curve>
    </>
  )
}

export default Contact
