import React from 'react';

const ListofPlayers = () => {
  const players = [
    { name: 'Virat Kohli', score: 90 },
    { name: 'Rohit Sharma', score: 60 },
    { name: 'KL Rahul', score: 85 },
    { name: 'Hardik Pandya', score: 40 },
    { name: 'Ravindra Jadeja', score: 75 },
    { name: 'Rishabh Pant', score: 55 },
    { name: 'Shubman Gill', score: 88 },
    { name: 'Bhuvneshwar Kumar', score: 66 },
    { name: 'Jasprit Bumrah', score: 45 },
    { name: 'Mohammed Shami', score: 74 },
    { name: 'Suryakumar Yadav', score: 82 }
  ];

  const filteredPlayers = players.filter(player => player.score < 70); // arrow function

  return (
    <div>
      <h2>All Players</h2>
      <ul>
        {players.map((player, index) => (
          <li key={index}>{player.name} - {player.score}</li>
        ))}
      </ul>

      <h2>Players with score below 70</h2>
      <ul>
        {filteredPlayers.map((player, index) => (
          <li key={index}>{player.name} - {player.score}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListofPlayers;
