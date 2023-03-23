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
      <h1>Send me a message</h1>
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
            type="text"
            name="reply_to"
            value={toSend.reply_to}
            onChange={handleChange}
          />
          <button id="contact-submit" type="submit" data-submit="...Skickar">
            Send
          </button>
        </form>
      </div>
    </section>
  );
};
