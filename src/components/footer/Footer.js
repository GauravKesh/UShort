"use client";
export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-10 sticky bottom-0 z-30">
      <div className="max-w-6xl mx-auto px-4 py-4 text-center">
        <p className="text-gray-600">
          © {new Date().getFullYear()} GShort. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
