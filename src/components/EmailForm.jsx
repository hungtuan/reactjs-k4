import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { useAuth0 } from "@auth0/auth0-react";
import "./css/EmailForm.css";

const EmailForm = () => {
  const { user, isAuthenticated } = useAuth0();
  const [email, setEmail] = useState("");
  const form = useRef();

  useEffect(() => {
    if (user && user.email) {
      setEmail(user.email);
    }
  }, [user]);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_wvkiguu",
        "template_nuxdf6q",
        form.current,
        "hXTSX4fTds6ZN7VAh"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Gửi email thành công");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    isAuthenticated && (
      <form ref={form} onSubmit={sendEmail}>
        <label>Xin Chào {user.name}</label>

        <label>Email</label>
        <input type="email" name="user_email" value={email} readOnly />
        <label>Message</label>
        <textarea name="message" />
        <button type="submit">Send</button>
      </form>
    )
  );
};

export default EmailForm;
