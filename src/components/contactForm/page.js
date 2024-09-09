'use client'
import emailjs from '@emailjs/browser';
import { Button, Input, Textarea } from '@nextui-org/react';
import { useState } from 'react';
const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState(null);
  const sendEmail = (e) => {
    e.persist();
    e.preventDefault();
    setIsSubmitting(true);
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          setStateMessage('Message sent!');
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000); // hide message after 5 seconds
        },
        (error) => {
          setStateMessage('Something went wrong, please try again later');
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000); // hide message after 5 seconds
        }
      );
    
    // Clears the form after sending the email
    e.target.reset();
  };
  return (
    <form onSubmit={sendEmail} className='flex flex-col'>
  <label className='mb-4'>Name</label>
  <Input type="text" name="user_name" className='w-full text-lg mb-4' />
  <label className='mb-4'>Email</label>
  <Input type="email" name="user_email" className='w-full text-lg mb-4' />
  <label className='mb-4'>Message</label>
  <Textarea name="message" className='w-full text-lg mb-4' />
  <Button type="submit" value="Send" disabled={isSubmitting} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-[40%] mx-auto' >Submit</Button>
  {stateMessage && <p className='text-lg text-red-600'>{stateMessage}</p>}
</form>
  );
};
export default ContactForm;