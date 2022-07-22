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
