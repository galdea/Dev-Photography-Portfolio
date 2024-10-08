import React, { useState } from "react";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showModal, setShowModal] = useState(false);

  const { t } = useTranslation("global");

  async function handleSubmit(e) {
    e.preventDefault();

    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (!name.trim() || !message.trim()) {
      alert("Please fill in all fields.");
      return;
    }

    const formData = new FormData(e.target);
    formData.append("access_key", "f12fb2d3-f16a-41bc-8778-f148e3349578");

    const json = JSON.stringify(Object.fromEntries(formData.entries()));

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: json,
      });

      const result = await response.json();

      if (result.success) {
        setShowModal(true);
        setName("");
        setEmail("");
        setMessage("");
      } else {
        alert("Error: " + result.message);
      }
    } catch (error) {
      
      alert("Network error: " + error.message);
    }
  }

  return (
    <section id="contact" className="relative">
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            style={{ filter: "opacity(0.7)" }}
            src="https://www.google.com/maps/embed/v1/place?q=providencia+chile&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          />
          <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                {t("contact.address")}
              </h2>
              <p className="mt-1">
                Providencia, <br />
                Santiago, Chile
              </p>
            </div>
            <div className="lg:w-1/2 mt-4 pl-1 pr-9 lg:mt-0 info-map">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                EMAIL
              </h2>
              <a className="text-indigo-400 leading-relaxed">
                gabriel.aldea@gmail.com
              </a>
              <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                {t("contact.phone")}
              </h2>
              <p className="leading-relaxed">+56 993441532</p>
            </div>
          </div>
        </div>
        <form
          netlify
          name="contact"
          data-netlify="true"
          onSubmit={handleSubmit}
          className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
        >
          <input type="hidden" name="form-name" value="contact" />
          <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
            {t("contact.title")}
          </h2>
          <p className="leading-relaxed mb-5">{t("contact.description")}</p>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-400">
              {t("contact.name")}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-400">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-400"
            >
              {t("contact.message")}
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
              required
            />
          </div>
          <button
            type="submit"
            className="submit-button text-white border-0 py-2 px-6 rounded text-lg hover:bg-gray-700 focus:outline-none transition-colors duration-300"
          >
            {t("contact.submit")}
          </button>
        </form>
      </div>
      {showModal && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75"
          onClick={() => setShowModal(false)}
        >
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-xl font-semibold mb-4">
              Your message has been sent!
            </h2>
            <img
              src="./message-sent.gif"
              alt="Message sent gif"
              className="w-45 mx-auto mb-4"
            />
            <p className="mb-6">I will be contacting you soon.</p>
            <button
              onClick={() => setShowModal(false)}
              className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
