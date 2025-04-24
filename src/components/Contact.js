import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="map-container">
        <div className="map-overlay">
          <h1 className="map-title">Find Us in the Sands of Time</h1>
          <p className="map-description">
            Step into the past and locate our headquarters in the ancient realm. Feel free to send us a message or follow the map to uncover our secret hideout.
          </p>
        </div>
      </div>
      <div className="contact-form-container">
        <form className="contact-form">
          <h2 className="form-title">Send a Message</h2>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Enter your name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" placeholder="Write your message here..." required></textarea>
          </div>
          <button type="submit" className="submit-button">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
