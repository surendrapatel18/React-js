import React from 'react'
import HeroPage from '../heroPage/heroPage'
import Wallet from '../wallet/wallet'
import Work from '../work/work'
import Choose from '../choose/choose'
import Transfer from '../transfer/transfer'
import Faq from '../faq/faq'
import Support from '../support/support'
import BlogPage from '../blogPage/blogPage'
import Feedback from '../feedbackPage/feedback'


const HomePage = () => {
  return (
   <>
    <HeroPage/>
      <Wallet />
      <Work />
      <Choose />
      <Transfer />
      <Faq />
      <Feedback/>
      <BlogPage/>
      <Support />
   </>
  )
}

export default HomePage;