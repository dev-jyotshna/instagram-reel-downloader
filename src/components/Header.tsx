import React from 'react';
import { InstagramIcon, HelpCircleIcon, SunIcon, MoonIcon, MonitorIcon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
export function Header() {
  const {
    theme,
    setTheme
  } = useTheme();
  return <header className="bg-white dark:bg-gray-800 shadow-sm transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <InstagramIcon className="h-8 w-8 text-pink-600" />
          <span className="font-bold text-xl dark:text-white">
            InstaReel Downloader
          </span>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center border border-gray-200 dark:border-gray-700 rounded-md p-1">
            <button onClick={() => setTheme('light')} className={`p-1.5 rounded-sm ${theme === 'light' ? 'bg-gray-100 dark:bg-gray-700' : ''}`} title="Light Mode">
              <SunIcon className="h-4 w-4 text-gray-600 dark:text-gray-300" />
            </button>
            <button onClick={() => setTheme('system')} className={`p-1.5 rounded-sm ${theme === 'system' ? 'bg-gray-100 dark:bg-gray-700' : ''}`} title="System Theme">
              <MonitorIcon className="h-4 w-4 text-gray-600 dark:text-gray-300" />
            </button>
            <button onClick={() => setTheme('dark')} className={`p-1.5 rounded-sm ${theme === 'dark' ? 'bg-gray-100 dark:bg-gray-700' : ''}`} title="Dark Mode">
              <MoonIcon className="h-4 w-4 text-gray-600 dark:text-gray-300" />
            </button>
          </div>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                  How it works
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white flex items-center">
                  <HelpCircleIcon className="h-4 w-4 mr-1" />
                  Help
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>;
}