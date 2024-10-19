import React from 'react'
import ContactForm from '../contactPage/contactPage';
import Accordian from '../accordianPage/accordian';
import Support from '../support/support';
import HelpBanner from '../helpBanner/helpBanner';


const HelpPage = () => {
  return (
   <>
   <HelpBanner/>
   <Accordian/>
   <ContactForm/>
   <Support/>
   </>
  )
}

export default HelpPage;