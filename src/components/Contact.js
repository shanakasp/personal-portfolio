
import emailjs from '@emailjs/browser';
import contactImg from '../assets/img/contact-img.svg';
import React, { useRef, useState } from 'react';

export const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    const name = form.current.user_name.value;
    const email = form.current.user_email.value;
    const message = form.current.message.value;

    const mergedMessage = `Name: ${name}\nEmail: ${email}\n\n${message}`;

    const emailParams = {
      user_name: name,
      user_email: email,
      message: mergedMessage
    };

    emailjs.send('service_u01hwjl', 'template_5zkjreb', emailParams, 'UE0eZNwSeq1erFdVZ')
      .then((result) => {
        console.log(result.text);
        setIsSent(true);
      })
      .catch((error) => {
        console.log(error.text);
        setIsSent(false);
      });
  };

  return (
    <section className="contact" id="connect">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <img src={contactImg} alt="Contact Us" />
          </div>
          <div className="col-md-6">
            <div className="contact-form">
              <h2>Get In Touch</h2>
              {isSent ? (
                <div className="success-message">Email sent successfully! <br />Want to submit again please refresh the page</div>
              ) : (
                <form ref={form} onSubmit={sendEmail}>
                  <div className="form-group">
                    <label htmlFor="user_name">Name</label>
                    <input type="text" className="form-control" id="user_name" name="user_name" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="user_email">Email</label>
                    <input type="email" className="form-control" id="user_email" name="user_email" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Phone Number and Message</label>
                    <textarea className="form-control" id="message" name="message" rows="6"></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary" style={{ background: 'lightblue' }}>Send</button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
