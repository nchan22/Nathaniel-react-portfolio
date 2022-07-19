import React, { useState } from "react";

function ContactForm() {
    const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
    const [formMessage, setFormMessage] = useState('');
  
    // adds error messages to the form
    function handleChange(e) {
      if (e.target.name === 'email') {
        const isValid = validateEmail(e.target.value);
        if (!isValid) {
            setFormMessage('Your email is invalid.');
          } else {
            setFormMessage('');
          }
      } else {
        if (!e.target.value.length) {
          const name =  e.target.name;
          setFormMessage(`${name.charAt(0).toUpperCase() + name.slice(1)} is required.`);
        } else {
          setFormMessage('');
        }
      }

       // sends the email or surfaces an error on submission
  function sendEmail(e) {
    e.preventDefault();
    // https://medium.com/@shrivastavasucheta/sending-an-email-using-emailjs-gmail-service-to-be-used-in-javascript-d6eb92ed0c7c
    // emailjs.sendForm(serviceID, templateID, templateParams, publicKey);

    emailjs.sendForm('gmail', 'template_t4xztml', '#contactForm', '2uz138zu8oKKleFyQ')
    .then(function(response) {
      console.log(response.text);
      setFormMessage("Message sent!");
    }, function(error) {
      console.log(error.text);
      setFormMessage("Your message couldn't be sent. Please email Nathaniel directly at nhchan22@gmail.com");
    });