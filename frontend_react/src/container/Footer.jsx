import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm sm:text-base">
          &copy; 2023 CodeFlix. All rights reserved.{' '}
          <a href="https://felix-jumason.netlify.app/" className="text-blue-500 hover:underline">
            Blackie
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
