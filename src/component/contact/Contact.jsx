import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css'; // Import CSS file

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_ut0iuop',
         'template_uds1cem',
          form.current, {
        publicKey: 'JIANVvCbaPUEkd98t',
      })
      .then(
        () => {
          alert('Email envoyé avec succés');
          clearForm();
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  const clearForm = () => {
    form.current.reset();
  }

  return (
    <section className="container section" id="contact"> 
      <h2 className="section__title">Prendre contact</h2>
      <div className="contact__container grid"> 
        <div className="contact__info">
          <h3 className="contact__title">Vous souhaitez prendre contact? </h3>
          <p className="contact__details">Envoyez moi un mail.</p>
        </div>

        <form ref={form} onSubmit={sendEmail} className="contact__form"> 
          <div className="contact__form-group">
            <div className="contact__form-div">
              <input
                type="text"
                className="contact__form-input" 
                placeholder="Nom"
                name="user_name" 
              />
            </div>

            <div className="contact__form-div">
              <input
                type="email"
                className="contact__form-input"
                placeholder="Email"
                name="user_email" 
              />
            </div>
          </div>

          <div className="contact__form-div">
            <input
              type="text"
              className="contact__form-input" 
              placeholder="Objet"
              name="subject" 
            />
          </div>

          <div className="contact__form-div">
            <textarea
              name="message"
              className="contact__form-input" 
              cols="80"
              rows="4"
              placeholder="Message"
            ></textarea>
          </div>

          <button type="submit" className="btn"> 
            Envoyer mon mail
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
