import React, { useState } from "react";
import { Header } from "./components/Header";
import { InstagramForm } from "./components/InstagramForm";
import { ResultsDisplay } from "./components/ResultsDisplay";
import { Instructions } from "./components/Instructions";
import { Footer } from "./components/Footer";
import { ThemeProvider } from "./contexts/ThemeContext";
export function App() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{
    caption: string;
    videoUrl: string;
    username?: string;
  } | null>(null);
  const [error, setError] = useState("");
  const handleSubmit = async (url: string) => {
    setLoading(true);
    setError("");
    setResult(null);

    try {
      const res = await fetch("/api/scrape-reel", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      });

      if (!res.ok) {
        const errText = await res.text(); // capture raw error response
        throw new Error(`Error ${res.status}: ${errText}`);
      }

      const data = await res.json();

      setResult(data);
    } catch (err: any) {
      console.error(err);
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <ThemeProvider>
      <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
        <Header />
        <main className="flex-grow w-full">
          <div className="max-w-6xl mx-auto px-4 py-8">
            <section className="mb-12">
              <div className="text-center mb-8">
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  Instagram Reel Downloader
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300">
                  Download Instagram reels and view captions with just a link
                </p>
              </div>
              <InstagramForm
                onSubmit={handleSubmit}
                loading={loading}
                error={error}
              />
            </section>
            {result && <ResultsDisplay result={result} />}
            <Instructions />
          </div>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
