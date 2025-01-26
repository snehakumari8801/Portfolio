import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
  const [done, setDone] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    const hasEmptyFields = Array.from(formData.values()).some(
      (value) => !value.trim()
    );

    if (hasEmptyFields) {
      setError(true);
      setDone(false);
      return;
    }

    emailjs
      .sendForm("service_c1q1gzk", "template_a5w9xrk", form.current, {
        publicKey: "3OR-_RE4FVA3-mumx",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setDone(true);
          setError(false);
          form.current.reset(); 
        },
        (error) => {
          console.log("FAILED...", error);
          setError(true);
          setDone(false);
        }
      );
  };

  return (
    <div className="h-screen pt-20 sm:mt-pt8 flex flex-col items-center justify-center bg-gray-900">
      <h1 className="text-3xl sm:text-5xl font-medium text-red-400 ">
        Get In Touch With Me
      </h1>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col gap-8 mt-10 w-4/5 sm:w-1/2 justify-center items-center"
      >
        <input
          type="text"
          placeholder="Name"
          name="user_name"
          className="p-4 w-full rounded-lg text-black shadow-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500"
          required
        />

        <input
          type="email"
          placeholder="Email"
          name="user_email"
          className="p-4 w-full rounded-lg text-black shadow-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500"
          required
        />

        <textarea
          rows={4}
          placeholder="Write a message..."
          name="message"
          className="p-4 w-full rounded-lg text-black shadow-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500"
          required
        />

        <input
          type="submit"
          value="Send"
          className="w-36 bg-gray-400 h-12 rounded-lg cursor-pointer 
          flex justify-center transition duration-300 ease-in-out transform hover:bg-red-700 
          hover:scale-105"
        />

        {done && (
          <span className="mt-4 text-green-500 text-xl font-semibold">
            Thanks for contacting me!
          </span>
        )}
        {error && (
          <span className="mt-4 text-red-500 text-xl font-semibold">
            Please fill out all fields.
          </span>
        )}
      </form>
    </div>
  );
}

export default Contact;
