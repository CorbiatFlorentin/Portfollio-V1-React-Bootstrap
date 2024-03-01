import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = "service_ut0iuop";
    const templateId = "template_uds1cem";
    const userId = "JIANVvCbaPUEkd98t"; // à changer dès que vous le trouvez

    emailjs
      .sendForm(serviceId, templateId, formData, userId)
      .then(
        (response) => {
          console.log("Email envoyé avec succès", response);
        },
        (error) => {
          console.log("Erreur lors de l'envoi", error);
        }
      );
  };

  return (
    <section className="container container section" id="contact">
      <h2 className="section__title">Prendre contact</h2>
      <div className="contact__container grid">
        <div className="contact__info">
          <h3 className="contact__title">Vous souhaitez prendre contact? </h3>
          <p className="contact__details">Envoyez moi un mail.</p>
        </div>

        <form onSubmit={handleSubmit} className="contact__form">
          <div className="contact__form-group">
            <div className="contact__form-div">
              <input
                type="text"
                className="contact__form-input"
                placeholder="Nom"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="contact__form-div">
              <input
                type="email"
                className="contact__form-input"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="contact__form-div">
            <input
              type="text"
              className="contact__form-input"
              placeholder="Objet"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
            />
          </div>

          <div className="contact__form-div">
            <textarea
              name="message"
              cols="80"
              rows="4"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
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
