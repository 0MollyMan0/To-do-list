import React from 'react';

type WelcomeCardProps = {
  nom: string;
};

const WelcomeCard: React.FC<WelcomeCardProps> = ({ nom }) => {
  return (
    <div className="p-4 max-w-md mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4 border border-blue-500 mt-6">
      <div>
        <div className="text-xl font-medium text-blue-600">Bienvenue, {nom} !</div>
        <p className="text-gray-500">On est content de te voir ici 🎉</p>
      </div>
    </div>
  );
};

export default WelcomeCard;