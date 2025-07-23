import React, { useState } from "react";
import { SearchIcon, LoaderIcon } from "lucide-react";

interface InstagramFormProps {
  onSubmit: (url: string) => void;
  loading: boolean;
  error: string;
}

export function InstagramForm({
  onSubmit,
  loading,
  error,
}: InstagramFormProps) {
  const [link, setLink] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (link.trim()) {
      onSubmit(link);
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-colors duration-200"
      >
        <div className="mb-4">
          <label
            htmlFor="instagram-link"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
          >
            Paste Instagram Reel Link
          </label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <input
              type="text"
              id="instagram-link"
              className={`block w-full pr-10 py-3 px-4 rounded-md border ${
                error
                  ? "border-red-300"
                  : "border-gray-300 dark:border-gray-600"
              } focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 dark:bg-gray-700 dark:text-white`}
              placeholder="https://www.instagram.com/reel/..."
              value={link}
              onChange={(e) => setLink(e.target.value)}
              disabled={loading}
            />
          </div>
          {error && (
            <p className="mt-2 text-sm text-red-600 dark:text-red-400">
              {error}
            </p>
          )}
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            disabled={loading || !link.trim()}
            className="flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
          >
            {loading ? (
              <>
                <LoaderIcon className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" />
                Processing...
              </>
            ) : (
              <>
                <SearchIcon className="-ml-1 mr-2 h-5 w-5" />
                Get Reel Info
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
