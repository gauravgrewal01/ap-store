import Banner from '@/components/Banner'
import Donate from '@/components/Donate'
import EbookCombo from '@/components/EbookCombo'
import FeaturedBooks from '@/components/FeaturedBooks'
import Footer from '@/components/Footer'
import PaperBackCombo from '@/components/PaperBackCombo'
import React from 'react'

const home = () => {
  return (
    <>

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