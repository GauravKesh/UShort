"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Redirect from "@/components/utils/Redirect";
import RedirectError from "@/components/utils/RedirectError";

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
        const response = await fetch(`${apiEnd}/api/v1/${shortCode}`);
        if (!response.ok) throw new Error("URL not found");
        const data = await response.json();
        window.location.replace(data.originalUrl);
      } catch (err) {
        console.error("Error fetching URL:", err);
        setError("URL not found or server error.");
      } finally {
        // setLoading(false);
      }
    };

    if (shortCode) {
      fetchOriginalUrl();
    }
  }, [shortCode]);

  return (
    <div className="relative flex items-center justify-center h-screen bg-gray-100">
      {loading && !error ? (
        // Modal overlay with blur effect
        <div className="fixed inset-0 bg-gray-100 bg-opacity-80 backdrop-blur-lg flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <Redirect />
          </div>
        </div>
      ) : error ? (
        <div className="fixed inset-0 bg-gray-100 bg-opacity-80 backdrop-blur-lg flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <RedirectError
              errorMessage={error}
              clearMessage={"Please check the URL or try again later."}
            />
            {/*  <p className="text-lg font-semibold mb-2">{error}</p>
          <p>Please check the URL or try again later.</p> */}
          </div>
        </div>
      ) : null}
    </div>
  );
}
