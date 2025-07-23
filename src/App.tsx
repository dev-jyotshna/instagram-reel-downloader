import React, { useState } from 'react';
import { Header } from './components/Header';
import { InstagramForm } from './components/InstagramForm';
import { ResultsDisplay } from './components/ResultsDisplay';
import { Instructions } from './components/Instructions';
import { Footer } from './components/Footer';
import { ThemeProvider } from './contexts/ThemeContext';
export function App() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');
  const handleSubmit = link => {
    setLoading(true);
    setError('');
    // In a real application, this would call a backend API
    // For demo purposes, we'll simulate a response after a delay
    setTimeout(() => {
      if (!link.includes('instagram.com')) {
        setError('Please enter a valid Instagram reel link');
        setResult(null);
      } else {
        setResult({
          videoUrl: 'https://images.pexels.com/videos/3045163/free-video-3045163.mp4',
          caption: 'This is an example caption for the Instagram reel! #trending #viral #instagram',
          likes: '245K',
          username: 'instagram_user',
          date: '2023-05-15',
          // Additional video information
          duration: '00:42',
          resolution: '1080x1920',
          size: '8.4 MB',
          format: 'MP4',
          frameRate: '30 fps',
          audioCodec: 'AAC',
          videoCodec: 'H.264'
        });
      }
      setLoading(false);
    }, 1500);
  };
  return <ThemeProvider>
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
              <InstagramForm onSubmit={handleSubmit} loading={loading} error={error} />
            </section>
            {result && <ResultsDisplay result={result} />}
            <Instructions />
          </div>
        </main>
        <Footer />
      </div>
    </ThemeProvider>;
}