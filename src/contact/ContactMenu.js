import React from "react";

export default function ContactMenu() {
  return (
    <div className="contact-menu">
      <form>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" placeholder="Name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" placeholder="Email" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" placeholder="Message"></textarea>
        </div>
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
}
