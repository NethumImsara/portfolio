import React from 'react';
import NavBar from '../Component/NavBar';
import Footer from '../Component/Footer';


export default function Home() {
  return (
    <div>
      <NavBar />
      <div className="h-screen flex items-center justify-center bg-red-500 text-white text-2xl">Home</div>
      <div className="h-screen flex items-center justify-center bg-blue-500 text-white text-2xl">About</div>
      <div className="h-screen flex items-center justify-center bg-green-500 text-white text-2xl">Projects</div>
      <div className="h-screen flex items-center justify-center bg-pink-500 text-white text-2xl">Experience</div>
      <div className="h-screen flex items-center justify-center bg-yellow-500 text-white text-2xl">Contact</div>
      <Footer />
    </div>
  );
}
