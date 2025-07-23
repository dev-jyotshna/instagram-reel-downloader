import React from 'react';
import { InstagramIcon } from 'lucide-react';
export function Footer() {
  return <footer className="bg-gray-800 dark:bg-gray-900 text-white py-8 transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <InstagramIcon className="h-6 w-6 text-pink-400 mr-2" />
            <span className="font-bold text-lg">InstaReel Downloader</span>
          </div>
          <div className="flex flex-wrap justify-center gap-x-8">
            <a href="#" className="text-gray-300 hover:text-white mb-2 md:mb-0">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-300 hover:text-white mb-2 md:mb-0">
              Terms of Service
            </a>
            <a href="#" className="text-gray-300 hover:text-white mb-2 md:mb-0">
              Contact Us
            </a>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-gray-700 text-center text-gray-400 text-sm">
          <p>
            © {new Date().getFullYear()} InstaReel Downloader. This site is not
            affiliated with Instagram.
          </p>
          <p className="mt-2">
            For educational purposes only. Use responsibly and respect content
            creators.
          </p>
        </div>
      </div>
    </footer>;
}