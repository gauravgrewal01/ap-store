import Banner from '@/components/Banner'
import Donate from '@/components/Donate'
import EbookCombo from '@/components/EbookCombo'
import FeaturedBooks from '@/components/FeaturedBooks'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import PaperBackCombo from '@/components/PaperBackCombo'
import React from 'react'

const home = () => {
  return (
    <>
      <Header />
      <Banner />
      <FeaturedBooks />
      <PaperBackCombo />
      <EbookCombo />
      <Donate />
      <Footer />
    </>
  )
}

export default home