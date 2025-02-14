import UrlShortener from "../components/urlShort/UrlShortener"; // Adjust the path as necessary

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center  p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-gray-100 text-black">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <p className="text-sm text-center sm:text-left">
          Easily shorten your URLs for sharing!
        </p>
        <UrlShortener />
      </main>
    </div>
  );
}
