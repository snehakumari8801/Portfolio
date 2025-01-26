// import React, { useState, useRef } from "react";
// import emailjs from "@emailjs/browser";

// function Contact() {
//   const form = useRef();
//   const [done, setDone] = useState(false);
//   const [error, setError] = useState(false);

//   const sendEmail = (e) => {
//     e.preventDefault();

//     // Check for empty fields
//     const formData = new FormData(form.current);
//     const hasEmptyFields = Array.from(formData.values()).some(
//       (value) => !value.trim()
//     );

//     if (hasEmptyFields) {
//       setError(true);
//       setDone(false);
//       return;
//     }

//     emailjs
//       .sendForm('service_c1q1gzk', 'template_a5w9xrk', form.current, {
//         publicKey: '3OR-_RE4FVA3-mumx',
//       })
//       .then(
//         () => {
//           console.log("SUCCESS!");
//           setDone(true);
//           setError(false);
//           form.current.reset(); // Reset the form
//         },
//         (error) => {
//           console.log("FAILED...", error);
//           setError(true);
//           setDone(false);
//         }
//       );
//   };

//   return (
//     <div className="h-screen mt-20 sm:mt-28 flex flex-col items-center">
//       <h1 className="text-3xl sm:text-5xl font-medium text-red-400">
//         Get In Touch With Me
//       </h1>
//       <form
//         ref={form}
//         onSubmit={sendEmail}
//         className="flex flex-col gap-10 mt-10 w-3/4 sm:w-1/2 justify-center"
//       >
//         <input
//           type="text"
//           placeholder="Name"
//           name="user_name"
//           className="p-3 rounded-lg text-black shadow-lg shadow-red-500/50 outline-none"
//           required
//         />
//         <input
//           type="email"
//           placeholder="Email"
//           name="user_email"
//           className="p-3 rounded-lg text-black shadow-lg shadow-red-500/50 outline-none"
//           required
//         />
//         <textarea
//           rows={4}
//           placeholder="Write a message..."
//           name="message"
//           className="p-3 rounded-lg text-black shadow-lg shadow-red-500/50 outline-none"
//           required
//         />
//         <input
//           type="submit"
//           value="Send"
//           className="w-36 bg-custom-gradient text-white h-10 rounded-lg cursor-pointer flex justify-center"
//         />
//         {done && <span className="text-green-500">Thanks for contacting me!</span>}
//         {error && (
//           <span className="text-red-500 text-2xl flex justify-center">
//             Please fill out all fields.
//           </span>
//         )}
//       </form>
//     </div>
//   );
// }

// export default Contact;



import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
  const [done, setDone] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    // Check for empty fields
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
      .sendForm('service_c1q1gzk', 'template_a5w9xrk', form.current, {
        publicKey: '3OR-_RE4FVA3-mumx',
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setDone(true);
          setError(false);
          form.current.reset(); // Reset the form
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
        {/* Name Input */}
        <input
          type="text"
          placeholder="Name"
          name="user_name"
          className="p-4 w-full rounded-lg text-black shadow-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500"
          required
        />

        {/* Email Input */}
        <input
          type="email"
          placeholder="Email"
          name="user_email"
          className="p-4 w-full rounded-lg text-black shadow-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500"
          required
        />

        {/* Message Textarea */}
        <textarea
          rows={4}
          placeholder="Write a message..."
          name="message"
          className="p-4 w-full rounded-lg text-black shadow-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500"
          required
        />

        {/* Submit Button */}
        <input
          type="submit"
          value="Send"
          className="w-36 bg-gray-400 h-12 rounded-lg cursor-pointer 
          flex justify-center transition duration-300 ease-in-out transform hover:bg-red-700 
          hover:scale-105"
        />

        {/* Success/Error Messages */}
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
