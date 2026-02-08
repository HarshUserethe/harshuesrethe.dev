import React from 'react';
import FAQSection from '../components/contact/FAQSection';
import ContactSection from '../components/contact/ContactSection';
import BottomTag from '../components/contact/BottomTag';
import Overlay from '../components/shared/Overlay';
import { Helmet } from 'react-helmet-async';

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact | Harsh Userethe</title>

        <meta
          name="description"
          content="Get in touch with Harsh Userethe, a Full Stack MERN Developer. Contact via email or LinkedIn for projects, collaborations, or job opportunities."
        />

        <link rel="canonical" href="https://harshuserethe.in/contact" />
      </Helmet>

      <Overlay />
      <ContactSection />
      <FAQSection />
      <BottomTag />
    </>
  );
};

export default Contact;
