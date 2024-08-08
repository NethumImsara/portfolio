import React from 'react';

export default function NavBar() {
  return (
    <nav className="bg-gray-800 p-7">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold">
          NethumDev
        </div>
        <div>
          <a href="#home" className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">Home</a>
          <a href="#about" className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">About</a>
          <a href="#projects" className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">Projects</a>
          <a href="#experience" className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">Experience</a>
          <a href="#contact" className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">Contact</a>
        </div>
      </div>
    </nav>
  );
}
