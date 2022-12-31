import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styles from './ContactPage.module.css';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e:any) => {
    e.preventDefault();

    emailjs.sendForm('service_sqnc5is', 'template_8jse8mj', e.target, '6N4ZyHvzAdxIbNblb')
      .then((result) => {
          alert("message sent succesfully");
      }, (error) => {
        alert("failed to send message");
      });
  };

  return (
    <>
      <header className={styles.header}>Contact</header>
      <form className={styles.Container} onSubmit={sendEmail}>
        <label>Naam</label><br />
        <input type="text" name="user_name" /><br />
        <label>Email</label><br />
        <input type="email" name="user_email" /><br />
        <label>Bericht</label><br />
        <textarea name="message" /><br />
        <input type="submit" value="Send" />
      </form>
    </>
  );
  }
  export default Contact;


  