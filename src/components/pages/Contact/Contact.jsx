import React from "react";
import "./contact.css";

import { useState } from "react";
import { Send } from "../../svg/SVG";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);

  const handleName = (e) => setName(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handleMessage = (e) => setMessage(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    setName("");
    setEmail("");
    setMessage("");
    setIsSubmit(true);
  };

  if (isSubmit) {
    setInterval(() => {
      setIsSubmit(false);
    }, 2000);
  }

  return (
    <div className="contact" id="contact">
      <div className="contact__header">
        <h1>Contact</h1>
      </div>

      <form className="contact__form" onSubmit={handleSubmit}>
        <div className="contact__form-nameField">
          <label htmlFor="name">
            <input
              id="name"
              name="name"
              className="name"
              type="text"
              placeholder="Name"
              value={name}
              onChange={handleName}
            />
          </label>
        </div>

        <div className="contact__form-emailField">
          <label htmlFor="email">
            <input
              autoComplete="email"
              id="email"
              name="email"
              className="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={handleEmail}
            />
          </label>
        </div>

        <div className="contact__form-messageField">
          <label htmlFor="message">
            <textarea
              name="message"
              id="message"
              cols="50"
              rows="10"
              placeholder="message"
              value={message}
              onChange={handleMessage}
              spellCheck
            ></textarea>
          </label>
        </div>

        <button
          disabled={!name || !email || !message}
          type="submit"
          className="contact__form-submit"
        >
          <div className="contact__form-value">
            {isSubmit ? (
              <p style={{ color: "green" }}>Message Sent</p>
            ) : (
              <p style={{ color: "white" }}>Send</p>
            )}
          </div>
          <div className="contact__form-icon">
            <Send />
          </div>
        </button>
      </form>
    </div>
  );
};

export default Contact;
