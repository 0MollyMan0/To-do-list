import React from 'react';

type WelcomeCardProps = {
  nom: string;
};

const WelcomeCard = ({ nom }: WelcomeCardProps) => {
  return (
    <div className="card">
      <div>
        <div className="text-xl font-medium text-blue-600">Bienvenue, {nom} !</div>
        <p className="text-gray-500">On est content de te voir ici 🎉</p>
      </div>
    </div>
  );
};

export default WelcomeCard;

// 