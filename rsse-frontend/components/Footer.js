import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark-gray text-white p-4">
      <p>&copy; {new Date().getFullYear()} RSSE. All rights reserved.</p>
    </footer>
  );
};

export default Footer;