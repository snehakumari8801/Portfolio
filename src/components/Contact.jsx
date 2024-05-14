import React, { useState } from "react";
import emailjs from '@emailjs/browser';
import { useRef } from "react";

function Contact() {
    const form = useRef();
    const[done, setDone] = useState(false);
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_c1q1gzk', 'template_a5w9xrk', form.current, '3OR-_RE4FVA3-mumx')
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };

  return (
    <div className="h-screen mt-10 pl-8 sm:pl-16 pr-0 sm:pr-16">
      <h1 className="  text-3xl sm:text-5xl font-medium text-amber-400">
        Get Touch With Me
      </h1>
      <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-10 mt-10 w-3/4">
        <input
          type="text"
          placeholder="Name"
          name="user_name"
          className="p-3 rounded-lg text-black shadow-lg shadow-orange-500/50 outline-none"
        />
        <input
          type="email"
          placeholder="Email"
          name="user_email"
          className="p-3 rounded-lg text-black shadow-lg shadow-orange-500/50 outline-none"
        />
        <textarea
          rows={4}
          placeholder="Write a message..."
          name="message"
          className="p-3 rounded-lg text-black shadow-lg shadow-orange-500/50 outline-none"
        />
        <input type='submit' value='send' placeholder='Send' className="w-36 bg-amber-600 h-10 rounded-lg ml-0 sm:ml-80"
          onClick={()=>setDone(true)}
        />
        {
          done && <span className="text-2xl ml-0 sm:ml-60">Thanks for contacting me!</span>
        }
      </form>
    </div>
  );
}

export default Contact;
