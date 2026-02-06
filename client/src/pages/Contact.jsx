import React from 'react'
import FAQSection from '../components/contact/FAQSection'
import ContactSection from '../components/contact/ContactSection'
import BottomTag from '../components/contact/BottomTag'
import Overlay from '../components/shared/Overlay'

const Contact = () => {
  return (
    <>
    <Overlay />
    <ContactSection />
    <FAQSection />
    <BottomTag />
    </>
  )
}

export default Contact