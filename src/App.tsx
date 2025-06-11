import React from 'react';
import WelcomeCard from './components/WelcomeCard';

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <WelcomeCard nom="Test" />
    </div>
  );
}

export default App;