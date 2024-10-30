"use client";

import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import {
  CheckCircleIcon,
  XCircleIcon,
  InformationCircleIcon,
} from "@heroicons/react/solid";

export default function Alert({ message, type, onClose }) {
  const [isVisible, setIsVisible] = useState(true);

  const alertStyles = {
    error: "text-red-500 bg-red-100 border border-red-400",
    success: "text-green-500 bg-green-100 border border-green-400",
    info: "text-blue-500 bg-blue-100 border border-blue-400",
  };

  const alertIcons = {
    error: <XCircleIcon className="h-6 w-6" />,
    success: <CheckCircleIcon className="h-6 w-6" />,
    info: <InformationCircleIcon className="h-6 w-6" />,
  };

  // Set a timeout to close the alert after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false); // Hide alert
      setTimeout(onClose, 300); // Call onClose after fade-out
    }, 3000); // 3000 milliseconds = 3 seconds

    return () => clearTimeout(timer); // Cleanup on unmount
  }, [onClose]);

  return (
    <div
      className={`fixed bottom-4 right-4 z-40 p-4 rounded shadow-lg transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      } ${alertStyles[type]} flex items-center`}
    >
      {alertIcons[type]}
      <span className="ml-2">{message}</span>
    </div>
  );
}

Alert.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["error", "success", "info"]).isRequired,
  onClose: PropTypes.func.isRequired,
};
