import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between">
        <Link to="/" className="text-white">Home</Link>
        <div className="flex space-x-4">
          <Link to="/producers" className="text-white">Producers</Link>
          <Link to="/messaging" className="text-white">Messaging</Link>
          <Link to="/payment" className="text-white">Payment</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;