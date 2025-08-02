import React from 'react';

const IndianPlayers = () => {
  const T20Players = ['Virat', 'Rohit', 'Pant', 'Bumrah', 'Gill'];
  const RanjiPlayers = ['Rahane', 'Pujara', 'Saha', 'Iyer', 'Karun'];

  const allPlayers = [...T20Players, ...RanjiPlayers]; // merging arrays

  const oddPlayers = allPlayers.filter((_, index) => index % 2 !== 0);
  const evenPlayers = allPlayers.filter((_, index) => index % 2 === 0);

  return (
    <div>
      <h2>Odd Team Players</h2>
      <ul>
        {oddPlayers.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>

      <h2>Even Team Players</h2>
      <ul>
        {evenPlayers.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default IndianPlayers;
