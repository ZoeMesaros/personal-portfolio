import React from "react";
import { useState } from "react";
import { send } from "emailjs-com";
import "./contact.scss";

export const Contact = () => {
  const [toSend, setToSend] = useState({
    from_name: "",
    message: "",
    reply_to: "",
  });

  const onSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    send("service_436coyf", "template_t1h9n1h", toSend, "6EjXbd1gFDjKfjaGs")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Message sent");
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };

  const handleChange = (e: { target: { name: any; value: any } }) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };
  return (
    <section id="contact">
      <h1 className="contactHeader">Send me a message</h1>
      <ul className="links">
        <li className="links-li">
          <a
            href="https://docs.google.com/document/d/1NjCYVMQfduoGCQ_GD-19v7oJkVxnZqK18x-jojlRQjc/export?format=pdf"
            target="_blank"
          >
            Download my CV
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/zoe-km/" target="_blank">
            LinkedIn
          </a>
        </li>
        <li>
          <a href="https://github.com/ZoeMesaros" target="_blank">
            Github
          </a>
        </li>
      </ul>
      <div className="container">
        <form id="formContact" onSubmit={onSubmit}>
          <label htmlFor="from_name">Name</label>
          <input
            type="text"
            name="from_name"
            value={toSend.from_name}
            onChange={handleChange}
          />
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={toSend.message}
            onChange={handleChange}
          />
          <label htmlFor="reply_to">Email</label>
          <input
            type="email"
            name="reply_to"
            value={toSend.reply_to}
            onChange={handleChange}
            required
          />
          <button id="contact-submit" type="submit">
            Send
          </button>
        </form>
      </div>
    </section>
  );
};
