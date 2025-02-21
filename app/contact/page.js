'use client';
import React, { useState } from 'react';
import Head from 'next/head';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState('');


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus('');

    setTimeout(() => {
      setFormStatus('Your message has been sent!');
      setIsSubmitting(false);
      setFormData({ name: '', email: '', message: '' });
    }, 2000);
  };

  return (
    <>
      <Head>
        <title>Contact | Shorten URL</title>
        <meta name="description" content="Contact us for any queries regarding our URL shortening service." />
      </Head>

      <div className="h-[91vh] bg-purple-50 flex items-center justify-center py-10">
        <div className="max-w-2xl bg-purple-100 p-8 rounded-lg shadow-lg text-center">
          <h1 className="text-3xl font-bold text-gray-800">Contact Us</h1>
          <p className="text-gray-600 mt-2">
            Have questions? Reach out to us, and we'll get back to you as soon as possible!
          </p>

          <form className="mt-6" onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>
              <button
                type="submit"
                className={`w-full py-3 text-white bg-purple-600 rounded-lg ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </form>

          {formStatus && (
            <p className="mt-4 text-green-500 font-semibold">
              {formStatus}
            </p>
          )}

          
        </div>
      </div>
    </>
  );
};

export default Contact;
