import React from 'react';
import { LinkIcon, FileTextIcon, DownloadIcon } from 'lucide-react';
export function Instructions() {
  return <section id="how-it-works" className="py-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
          How It Works
        </h2>
        <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
          Download Instagram reels in three simple steps
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center transition-colors duration-200">
          <div className="inline-flex items-center justify-center p-3 bg-pink-100 dark:bg-pink-900 rounded-full text-pink-600 dark:text-pink-300 mb-4">
            <LinkIcon className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">
            1. Paste Link
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Copy the link of any Instagram reel and paste it in the input field
            above
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center transition-colors duration-200">
          <div className="inline-flex items-center justify-center p-3 bg-pink-100 dark:bg-pink-900 rounded-full text-pink-600 dark:text-pink-300 mb-4">
            <FileTextIcon className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">
            2. Get Info
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Our system will process the link and extract the video and caption
            information
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center transition-colors duration-200">
          <div className="inline-flex items-center justify-center p-3 bg-pink-100 dark:bg-pink-900 rounded-full text-pink-600 dark:text-pink-300 mb-4">
            <DownloadIcon className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">
            3. Download
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Download the video or copy the caption text with just one click
          </p>
        </div>
      </div>
      <div className="mt-10 bg-pink-50 dark:bg-pink-900/20 border border-pink-100 dark:border-pink-900 p-4 rounded-lg max-w-3xl mx-auto transition-colors duration-200">
        <h3 className="font-medium text-pink-800 dark:text-pink-300 mb-2">
          Important Note
        </h3>
        <p className="text-pink-700 dark:text-pink-400 text-sm">
          This tool is for personal use only. Please respect Instagram's terms
          of service and copyright laws. Do not use downloaded content for
          commercial purposes without permission from the content creator.
        </p>
      </div>
    </section>;
}