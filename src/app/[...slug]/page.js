// src/app/[...slug]/page.js
"use client"; // Marks the file as a Client Component

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function RedirectPage({ params }) {
  const router = useRouter();
  const { slug } = params;
  const shortCode = slug?.[0];
  const [error, setError] = useState("");
  const apiEnd = "https://urlshortnerbackend-1rsb.onrender.com";

  useEffect(() => {
    const fetchOriginalUrl = async () => {
      try {
        const response = await fetch(`${apiEnd}/api/v1/${shortCode}`);
        if (!response.ok) throw new Error("URL not found");

        const data = await response.json();
        // Redirect directly without displaying a loading state
        window.location.replace(data.originalUrl);
      } catch (err) {
        console.error("Error fetching URL:", err);
        setError("URL not found or server error.");
      }
    };

    if (shortCode) {
      fetchOriginalUrl();
    }
  }, [shortCode]);

  return error ? (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="text-center text-red-600">
        <p className="text-lg font-semibold mb-2">{error}</p>
        <p>Please check the URL or try again later.</p>
      </div>
    </div>
  ) : null;
}
