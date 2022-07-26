import Head from 'next/head'
import Image from 'next/image'
import AboutUs from '../components/AboutUs/AboutUs'
import Hero from '../components/Hero/Hero'
import WhatWeDo from '../components/WhatWeDo/WhatWeDo'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Design Mania Limited</title>
        <meta name="description" content="Design Mania Limited is the parent company to both LIQUID id. and Musing Media (formerly Oculus Media). Find out more about our services." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
      <Hero />
      <AboutUs />
      <WhatWeDo />
      </main>
    </div>
  )
}
