import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_gd8s3ot",
        "template_4lxb8ix",
        form.current,
        "JbeRb-m2NbOhCWasA"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message.");
        }
      );
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <form
        ref={form}
        onSubmit={sendEmail}
        className="w-full max-w-md bg-white shadow-md rounded-2xl p-8 space-y-4"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Contact Us
        </h2>

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="text"
          name="title"
          placeholder="Subject"
          required
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <textarea
          name="message"
          placeholder="Your Message"
          required
          rows="5"
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition duration-300 cursor-pointer"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
