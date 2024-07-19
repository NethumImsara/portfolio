import React, { useState } from 'react';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold">
          My Portfolio
        </div>
        <div className="block lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={!isOpen ? "M4 6h16M4 12h16M4 18h16" : "M6 18L18 6M6 6l12 12"}></path>
            </svg>
          </button>
        </div>
        <div className={`w-full ${isOpen ? 'block' : 'hidden'} lg:flex lg:items-center lg:w-auto`}>
          <a href="#home" className="block lg:inline-block text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">Home</a>
          <a href="#about" className="block lg:inline-block text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">About</a>
          <a href="#projects" className="block lg:inline-block text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">Projects</a>
          <a href="#experience" className="block lg:inline-block text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">Experience</a>
          <a href="#contact" className="block lg:inline-block text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">Contact</a>
        </div>
      </div>
    </nav>
  );
}
