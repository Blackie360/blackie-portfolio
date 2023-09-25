import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AiFillMail } from 'react-icons/ai';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAIL_SERVICE_ID,
        process.env.REACT_APP_EMAIL_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAIL_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          // Show success notification
          toast.success('Email sent successfully');
        },
        (error) => {
          console.log(error.text);
          // Show error notification
          toast.error('Error sending email');
        }
      );
  };

  return (
    <div className="bg-gray-60 min-h-screen flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-md w-full md:w-2/3 lg:w-3/4">
        

        {/* Email Card */}
        <div className="bg-white p-4 rounded-lg shadow-md mb-4">
          <h3 className="text-3xl font-semibold flex justify-center">
            <AiFillMail />
          </h3>
          <p className="flex justify-center">
            <a href="mailto:felixkent360@gmail.com" className="underline-offset-auto">felixkent360@gmail.com</a>
          </p>
          <p className="text-black-600 flex justify-center">Email me</p>
        </div>

        {/* Form */}
        <form ref={form} onSubmit={sendEmail}>
          <label className="text-black text-lg">Name</label>
          <input type="text" name="user_name" className="w-full p-2 border border-black rounded mt-2" required />
          <label className="text-black text-lg mt-4" required>Email</label>
          <input type="email" name="user_email" className="w-full p-2 border border-black rounded mt-2" required />
          <label className="text-black text-lg mt-4" required>Message</label>
          <textarea name="message" className="w-full p-2 border border-black rounded mt-2" />
          <input
            type="submit"
            value="Send"
            className="bg-black text-white p-2 rounded mt-4 cursor-pointer hover:bg-gray-30 transition-colors duration-300"
          />
        </form>
      </div>

      <ToastContainer position="top-center" autoClose={3000} hideProgressBar />
    </div>
  );
};

export default Contact;
