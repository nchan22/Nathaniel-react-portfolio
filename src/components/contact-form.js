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