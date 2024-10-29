// src/app/[...slug]/page.js
"use client"; // Marks the file as a Client Component

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function RedirectPage({ params }) {
  const router = useRouter();
  const { slug } = params;
  const shortCode = slug?.[0];
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const apiEnd = "https://urlshortnerbackend-1rsb.onrender.com";

  useEffect(() => {
    const fetchOriginalUrl = async () => {
      try {
        const response = await fetch(
          `${apiEnd}/api/v1/${shortCode}`
        );
        if (!response.ok) throw new Error("URL not found");

        const data = await response.json();
        router.push(data.originalUrl);
      } catch (err) {
        console.error("Error fetching URL:", err);
        setError("URL not found or server error.");
      } finally {
        setLoading(false);
      }
    };

    if (shortCode) {
      fetchOriginalUrl();
    }
  }, [shortCode, router]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      {loading && !error ? (
        <div className="text-center">
          <p className="text-lg font-semibold mb-4">
            Redirecting you to the destination...
          </p>
          <div className="loader animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500 border-solid"></div>
        </div>
      ) : error ? (
        <div className="text-center text-red-600">
          <p className="text-lg font-semibold mb-2">{error}</p>
          <p>Please check the URL or try again later.</p>
        </div>
      ) : null}
    </div>
  );
}
