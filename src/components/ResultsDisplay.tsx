import React, { useState, createElement } from 'react';
import { DownloadIcon, CopyIcon, CheckIcon, UserIcon, CalendarIcon, HeartIcon, ClockIcon, MonitorIcon, FileIcon, VideoIcon, VolumeIcon } from 'lucide-react';
export function ResultsDisplay({
  result
}) {
  const [copied, setCopied] = useState(false);
  const [downloading, setDownloading] = useState(false);
  const copyToClipboard = () => {
    navigator.clipboard.writeText(result.caption);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  const downloadVideo = () => {
    setDownloading(true);
    // In a real application, this would call a backend API
    // For demo purposes, we'll simulate downloading with a direct link
    const link = document.createElement('a');
    link.href = result.videoUrl;
    link.download = `instagram_reel_${result.username}.mp4`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(() => setDownloading(false), 1500);
  };
  const downloadCaption = () => {
    const element = document.createElement('a');
    const file = new Blob([result.caption], {
      type: 'text/plain'
    });
    element.href = URL.createObjectURL(file);
    element.download = `instagram_caption_${result.username}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };
  return <section className="mb-16 bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-colors duration-200">
      <h2 className="sr-only">Results</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="p-6">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
            Video Preview
          </h3>
          <div className="relative pt-[177.77%] bg-black rounded-md overflow-hidden">
            <video className="absolute inset-0 w-full h-full object-contain" src={result.videoUrl} controls poster="https://images.pexels.com/videos/3045163/pictures/preview-0.jpg" />
          </div>
          <div className="mt-4">
            <button onClick={downloadVideo} disabled={downloading} className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200">
              {downloading ? <>
                  <DownloadIcon className="animate-pulse mr-2 h-5 w-5" />
                  Downloading...
                </> : <>
                  <DownloadIcon className="mr-2 h-5 w-5" />
                  Download Video
                </>}
            </button>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-md transition-colors duration-200">
              <h4 className="text-xs uppercase text-gray-500 dark:text-gray-400 font-medium mb-2">
                Video Information
              </h4>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                  <ClockIcon className="mr-2 h-4 w-4 text-gray-500" />
                  <span className="font-medium mr-1">Duration:</span>{' '}
                  {result.duration}
                </li>
                <li className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                  <MonitorIcon className="mr-2 h-4 w-4 text-gray-500" />
                  <span className="font-medium mr-1">Resolution:</span>{' '}
                  {result.resolution}
                </li>
                <li className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                  <FileIcon className="mr-2 h-4 w-4 text-gray-500" />
                  <span className="font-medium mr-1">Size:</span> {result.size}
                </li>
                <li className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                  <VideoIcon className="mr-2 h-4 w-4 text-gray-500" />
                  <span className="font-medium mr-1">Format:</span>{' '}
                  {result.format}
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-md transition-colors duration-200">
              <h4 className="text-xs uppercase text-gray-500 dark:text-gray-400 font-medium mb-2">
                Technical Details
              </h4>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                  <VideoIcon className="mr-2 h-4 w-4 text-gray-500" />
                  <span className="font-medium mr-1">Frame Rate:</span>{' '}
                  {result.frameRate}
                </li>
                <li className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                  <VolumeIcon className="mr-2 h-4 w-4 text-gray-500" />
                  <span className="font-medium mr-1">Audio:</span>{' '}
                  {result.audioCodec}
                </li>
                <li className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                  <VideoIcon className="mr-2 h-4 w-4 text-gray-500" />
                  <span className="font-medium mr-1">Video:</span>{' '}
                  {result.videoCodec}
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm text-gray-500 dark:text-gray-400 justify-between">
            <div className="flex items-center">
              <UserIcon className="mr-1 h-4 w-4" />
              <span>{result.username}</span>
            </div>
            <div className="flex items-center">
              <HeartIcon className="mr-1 h-4 w-4 text-red-500 fill-current" />
              <span>{result.likes}</span>
            </div>
            <div className="flex items-center">
              <CalendarIcon className="mr-1 h-4 w-4" />
              <span>{result.date}</span>
            </div>
          </div>
        </div>
        <div className="p-6 bg-gray-50 dark:bg-gray-700 transition-colors duration-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">
              Caption
            </h3>
            <button onClick={copyToClipboard} className="inline-flex items-center px-3 py-1 border border-gray-300 dark:border-gray-600 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 transition-colors duration-200">
              {copied ? <>
                  <CheckIcon className="mr-2 h-4 w-4 text-green-500" />
                  Copied!
                </> : <>
                  <CopyIcon className="mr-2 h-4 w-4" />
                  Copy
                </>}
            </button>
          </div>
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-md p-4 h-64 overflow-y-auto transition-colors duration-200">
            <p className="text-gray-800 dark:text-gray-200 whitespace-pre-wrap">
              {result.caption}
            </p>
          </div>
          <div className="mt-4">
            <button onClick={downloadCaption} className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 transition-colors duration-200">
              <DownloadIcon className="mr-2 h-5 w-5" />
              Download Caption as Text
            </button>
          </div>
        </div>
      </div>
    </section>;
}