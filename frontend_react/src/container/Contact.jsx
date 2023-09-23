import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'; // Import axios for making HTTP requests

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send email using SendGrid API over HTTP
      const apiKey = process.env.SENDGRID_API_KEY;
      const apiUrl = 'https://api.sendgrid.com/v3/mail/send';

      const emailData = {
        personalizations: [
          {
            to: [{ email: 'codedblood22@gmail.com' }],
            subject: formData.subject,
          },
        ],
        from: { email: formData.email },
        content: [
          {
            type: 'text/plain',
            value: formData.message,
          },
        ],
      };

      const response = await axios.post(apiUrl, emailData, {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 202) {
        console.log('Email sent successfully.');
        // Show success toast notification
        toast.success('Message sent successfully!', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
        });
      } else {
        console.error('Failed to send email.');
        // Show error toast notification
        toast.error('Message sending failed. Please try again later.', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
        });
      }
    } catch (error) {
      console.error('Error sending email:', error);
      // Show error toast notification
      toast.error('Message sending failed. Please try again later.', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
      });
    }
  };

  return (
    <div className="bg-white text-black p-4">
      <h2 className="text-2xl font-bold mb-4">Send me a message</h2>
      <form onSubmit={handleSubmit} className="max-w-lg">
        {/* Input fields */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium">
            Your name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="border border-gray-300 rounded-md p-2 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="e.g johndoe@example.com"
            className="border border-gray-300 rounded-md p-2 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="subject" className="block text-sm font-medium">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject"
            className="border border-gray-300 rounded-md p-2 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-medium">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter your message..."
            rows="4"
            className="border border-gray-300 rounded-md p-2 w-full"
            required
          ></textarea>
        </div>

        {/* Submit button */}
        <button
          type="submit"
          className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800 transition duration-300"
        >
          Send
        </button>
      </form>

      {/* Toast notifications */}
      <ToastContainer />
    </div>
  );
};

export default Contact;
