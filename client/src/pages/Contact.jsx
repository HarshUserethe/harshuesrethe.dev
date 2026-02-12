import React, { useState } from 'react';
import FAQSection from '../components/contact/FAQSection';
import ContactSection from '../components/contact/ContactSection';
import BottomTag from '../components/contact/BottomTag';
import Overlay from '../components/shared/Overlay';
import SmartContact from '../components/contact/SmartContact';

const Contact = () => {
  const [activeStep, setActiveStep] = useState(false);
  const handleDiscussProjectButton = () => {
    setActiveStep(true);
  };

  return (
    <>
      <Overlay />
      {activeStep ? (
        <SmartContact />
      ) : (
        <ContactSection
          handleDiscussProjectButton={handleDiscussProjectButton}
        />
      )}
      <FAQSection />
      <BottomTag />
    </>
  );
};

export default Contact;
