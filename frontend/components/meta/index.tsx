import React from 'react'
import Head from 'next/head'

interface MetaProps {
  title: string
}

const Meta: React.FC<MetaProps> = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name='description'
        content='Welcome to my profile, I am a web developer'
      />
      <meta property='og:title' content='My Portfolio' />
      <meta
        property='og:description'
        content='Welcome to my profile, I am a web developer'
      />
      <meta property='og:url' content='https://tranduy020900dev.vercel/' />
      <meta property='og:type' content='website' />
      <link rel='icon' href='/favicon.ico' />
    </Head>
  )
}

export default Meta
