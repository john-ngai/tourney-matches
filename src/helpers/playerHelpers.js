/*
const playerDataArray = [
  {
    gamerTag: "Disguised Lizard",
    firstName: "Daria ",
    lastName: "Stark",
  },
  {
    gamerTag: "DrSpiteful",
    firstName: "Terrell",
    lastName: "Hunter",
  }, ...
]

const matchData = [
  {
    matchNumber: 1,
    players: ["Disguised Lizard", "DrSpiteful"],
    winner: "DrSpiteful",
    scoreDifference: 1
  },
  {
    matchNumber: 2,
    players: ["Henrikarex", "Gamerhorse"],
    winner: "Henrikarex",
    scoreDifference: 2
  }, ...
*/


export const preparePlayerData = (playerData) => {
  // Return: [{player}, {player}, ...]
  return Object.values(playerData);
}

export const addWinsToPlayers = (playerDataArray, matchData) => {
  return playerDataArray.map(player => {
    // Calculating the number of wins in the matchData
    const currentWins = matchData.reduce((accumulator, match) => {
      // Adds a win if the gamerTag matches
      if (match.winner === player.gamerTag) {
        return accumulator += 1;
      } else {
        return accumulator;
      }
    }, 0);

    // Assigns the value to the wins key
    player.wins = currentWins;

    return player;
  });
}
// Return: [{player}, {player}] (each player having a win key and a numerical value)