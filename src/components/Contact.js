"use client";
import { useState } from "react";
import Alert from "@/components/utils/Alert";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !message) {
      setAlertMessage("All fields are required.");
      setAlertType("error");
      return;
    }

    // Here you would typically send the message to your server
    setAlertMessage("Message sent successfully!");
    setAlertType("success");

    // Reset form fields
    setName("");
    setEmail("");
    setMessage("");
  };

  const closeAlert = () => {
    setAlertMessage("");
    setAlertType("");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-md p-8 max-w-md w-full">
        <h1 className="text-3xl font-semibold text-center mb-4">Contact Us</h1>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-gray-300 rounded-lg p-3 mb-4 h-12 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-300 rounded-lg p-3 mb-4 h-12 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <textarea
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="border border-gray-300 rounded-lg p-3 mb-4 h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button
            type="submit"
            className="bg-blue-500 text-white rounded-lg h-12 flex items-center justify-center hover:bg-blue-600 transition-all duration-200"
          >
            Send Message
          </button>
        </form>

        {alertMessage && (
          <Alert
            message={alertMessage}
            type={alertType}
            onClose={closeAlert} // Close alert callback
          />
        )}
      </div>
    </div>
  );
}
