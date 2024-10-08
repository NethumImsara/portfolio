import React from 'react'

function Footer() {
  return (
    <div>
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo and Name */}
          <div className="mb-4 md:mb-0">
            <a href="/" className="text-xl font-bold text-white">
              nethumDev
            </a>
          </div>

          {/* Navigation Links */}
          <div className="mb-4 md:mb-0">
            <nav className="flex flex-wrap justify-center space-x-4">
              <a href="#about" className="hover:text-white transition-colors">
                About
              </a>
              <a href="#projects" className="hover:text-white transition-colors">
                Projects
              </a>
              <a href="#services" className="hover:text-white transition-colors">
                Services
              </a>
              <a href="#contact" className="hover:text-white transition-colors">
                Contact
              </a>
            </nav>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a href="https://twitter.com/yourprofile" className="hover:text-white transition-colors">
              <svg className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M24 4.557a9.826 9.826 0 01-2.828.775A4.917 4.917 0 0023.337 3.1a9.85 9.85 0 01-3.127 1.2 4.924 4.924 0 00-8.384 4.482 13.965 13.965 0 01-10.13-5.144 4.828 4.828 0 00-.665 2.475 4.923 4.923 0 002.188 4.1 4.905 4.905 0 01-2.229-.615v.062a4.924 4.924 0 003.946 4.83 4.964 4.964 0 01-2.223.085 4.926 4.926 0 004.602 3.419A9.868 9.868 0 010 20.54a13.913 13.913 0 007.548 2.211c9.055 0 14.004-7.5 14.004-14 0-.213-.005-.425-.014-.636A10.012 10.012 0 0024 4.557z" />
              </svg>
            </a>
            <a href="https://linkedin.com/in/yourprofile" className="hover:text-white transition-colors">
              <svg className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.762 0-5 2.238-5 5v14c0 2.762 2.238 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.762-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.797-1.75-1.732s.784-1.732 1.75-1.732 1.75.797 1.75 1.732-.784 1.732-1.75 1.732zm13.5 11.268h-3v-5.5c0-1.103-.897-2-2-2s-2 .897-2 2v5.5h-3v-10h3v1.268c.637-.944 1.739-1.268 3-1.268 2.206 0 4 1.794 4 4v6z" />
              </svg>
            </a>
            <a href="https://github.com/yourprofile" className="hover:text-white transition-colors">
              <svg className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M12 .5c-6.625 0-12 5.375-12 12 0 5.3 3.438 9.8 8.205 11.385.6.111.82-.26.82-.58v-2.3c-3.338.726-4.04-1.647-4.04-1.647-.546-1.385-1.335-1.754-1.335-1.754-1.093-.746.08-.726.08-.726 1.207.08 1.838 1.24 1.838 1.24 1.08 1.8 2.838 1.285 3.54.98.108-.78.42-1.285.76-1.585-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.47-2.385 1.238-3.23-.126-.305-.536-1.536.126-3.205 0 0 1.01-.326 3.3 1.23.955-.266 1.98-.396 3-.405 1.02.01 2.045.14 3 .405 2.29-1.556 3.3-1.23 3.3-1.23.666 1.67.256 2.9.126 3.205.765.845 1.23 1.92 1.23 3.23 0 4.61-2.805 5.625-5.475 5.92.435.38.82 1.11.82 2.23v3.3c0 .325.22.7.825.58 4.765-1.585 8.2-6.085 8.2-11.385 0-6.625-5.375-12-12-12z" />
              </svg>
            </a>
            <a href="https://dribbble.com/yourprofile" className="hover:text-white transition-colors">
              <svg className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12c6.628 0 12-5.373 12-12s-5.372-12-12-12zm7.042 5.579c2.137 2.476 2.972 5.82 2.433 8.979-.284-.067-2.621-.606-5.042-.242-.119-.296-.224-.588-.335-.877 2.482-1.421 3.994-3.634 4.033-3.696.065-.103.118-.203.175-.305.622-1.078.945-2.273.953-3.534-.717.001-2.032.15-3.652.531-.041-.072-.081-.143-.122-.216-1.05-1.828-2.214-3.548-3.471-5.143 2.599.391 4.922 1.696 6.031 2.503zm-9.555 4.546c1.429-2.801 2.774-5.456 4.032-8.155 1.47.961 2.812 2.161 3.996 3.57-1.487.369-3.535.953-5.68 1.902-.964-1.395-1.987-2.74-3.063-4.033-.418.755-.822 1.527-1.21 2.319.728 1.105 1.492 2.178 2.257 3.397-.105.192-.207.384-.311.573-.352.648-.702 1.293-1.056 1.932-1.313-.486-2.507-1.046-3.55-1.678.435-1.094 1.014-2.109 1.728-3.032zm-.491 5.678c1.06.598 2.27 1.092 3.632 1.458-1.246 2.269-2.27 4.585-3.066 6.947-2.859-1.169-5.017-3.507-6.104-6.351 1.448.676 3.136 1.198 4.978 1.531.152-.318.312-.636.478-.965 1.051-2.065 2.137-3.968 3.082-5.8.466.931.903 1.863 1.313 2.793-1.26 2.306-2.332 4.571-3.157 6.783zm1.337-7.827c1.068 1.421 2.132 2.849 3.158 4.282-.155.101-.309.203-.464.307-1.282.852-2.553 1.762-3.829 2.72-.07-.129-.145-.253-.215-.382-.823-1.482-1.627-3.005-2.429-4.542.944-.135 1.881-.239 2.779-.324zm.156 7.82c.729-.476 1.457-.957 2.188-1.434-.785 1.91-1.516 3.84-2.177 5.78-.916-.285-1.8-.645-2.66-1.09 1.112-1.892 2.216-3.745 2.649-5.208zm1.897 6.108c.603-1.747 1.256-3.494 1.984-5.228 1.54.195 3.151.238 4.828.155-.066 2.553-1.054 5.063-2.787 6.931-1.381.143-2.768.078-4.025-.068zm5.371-.814c1.376-1.502 2.338-3.411 2.81-5.532 1.767-.064 3.095.232 3.365.299-1.231 2.689-3.659 4.79-6.175 5.233z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-sm">
          © {new Date().getFullYear()} Nethum Imsara Hewwarachchi. All rights reserved.
        </div>
      </div>
    </footer>
    </div>
  )
}

export default Footer
