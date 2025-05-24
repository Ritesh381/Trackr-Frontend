// Currently in implementation by Ritesh

import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import emailjs from "@emailjs/browser";

function Contact() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone || "N/A",
          message: formData.message,
          to_email: "prajapatiritesh381@gmail.com",
          time: new Date().toLocaleString()
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        alert("Mail sent successfully!");
        setFormData({ name: "", phone: "", email: "", message: "" });
        navigate("/");
      })
      .catch((error) => {
        console.error("Email send error:", error);
        alert("Failed to send mail. Try again later.");
      });
  };

  return (
    <div>

    </div>
  );
}

export default Contact;