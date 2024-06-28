import React from 'react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div>
        <h1 className="text-3xl text-center">Welcome to Music Producers Hub</h1>
        <p className="text-center">Browse and connect with top music producers.</p>
        <div className="flex justify-center space-x-4 mt-4">
          <Link to="/producers" className="text-blue-500">Producers</Link>
          <Link to="/messaging" className="text-blue-500">Messaging</Link>
          <Link to="/payment" className="text-blue-500">Payment</Link>
        </div>
      </div>
    </div>
  );
};

export default Index;