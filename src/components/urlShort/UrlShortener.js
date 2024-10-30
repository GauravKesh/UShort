"use client";
import { useState } from "react";
import axios from "axios";
import { ClipboardIcon } from "@heroicons/react/outline";
import Link from "next/link";
import Alert from "../utils/Alert";
import Benefits from "./Benefits"; // Import the Benefits component
import Zoomies from "../utils/loaders/Zoomies";

export default function UrlShortener() {
  const [url, setUrl] = useState("");
  const [shortenedUrl, setShortenedUrl] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState("");
    const apiEnd = "https://urlshortnerbackend-1rsb.onrender.com";

  const isValidUrl = (string) => {
    const res = string.match(/(http|https):\/\/[^\s/$.?#].[^\s]*/);
    return res !== null;
  };

  const handleShortenUrl = async () => {
    if (!url) {
      setError("Please enter a URL to shorten.");
      return;
    }

    if (!isValidUrl(url)) {
      setError("Please enter a valid URL.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await axios.post(
        `${apiEnd}/api/v1/shorten`,
        { originalUrl: url }
      );
      const shortCode = `https://gshort.vercel.app/${response.data.shortUrl}`;
      setShortenedUrl(shortCode);
      setAlertMessage("URL shortened successfully!");
      setAlertType("success");
      setUrl("")
    } catch (err) {
      setError("Failed to shorten the URL. Please try again.");
      setAlertMessage("Failed to shorten the URL.");
      setAlertType("error");
      console.error("Error shortening URL:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(shortenedUrl);
    setAlertMessage("URL copied to clipboard!");
    setAlertType("success");
  };

  const closeAlert = () => {
    setAlertMessage("");
    setAlertType("");
  };

  return (
    <div className="flex flex-col items-center  bg-gray-100">
      <div className="bg-white rounded-lg shadow-md p-8 max-w-md w-full">
        {/*   <h1 className="text-3xl font-semibold text-center mb-4">
          URL Shortener
        </h1>
        <p className="text-center text-gray-600 mb-6">
          Shorten your links quickly and easily!
        </p> */}
        <input
          type="text"
          placeholder="Enter your URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="border border-gray-300 rounded-lg p-3 h-12 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
        />
        <button
          onClick={handleShortenUrl}
          className="w-full bg-blue-500 text-white rounded-lg h-12 flex items-center justify-center hover:bg-blue-600 transition-all duration-200"
          disabled={loading}
        >
          {loading ? (
            <span><Zoomies/></span>
          ) : (
            "Shorten URL"
          )}
        </button>
        {shortenedUrl && (
          <div className="flex items-center mt-4 bg-gray-100 border border-gray-300 rounded-lg p-3 shadow-sm">
            <Link
              href={shortenedUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-semibold text-blue-500 hover:underline truncate w-full"
            >
              {shortenedUrl}
            </Link>
            <button
              onClick={handleCopy}
              className="ml-2 text-gray-600 hover:text-gray-800 transition-colors"
              aria-label="Copy URL"
            >
              <ClipboardIcon className="h-5 w-5" />
            </button>
          </div>
        )}
        {/* Benefits Section */}
        <Benefits /> {/* Include the Benefits component */}
        {(error || alertMessage) && (
          <Alert
            message={error || alertMessage}
            type={error ? "error" : alertType}
            onClose={closeAlert}
          />
        )}
      </div>
    </div>
  );
}
