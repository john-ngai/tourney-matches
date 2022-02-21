import playerData from '../data/playerData';
import matchData from '../data/matchData';
import { preparePlayerData, addWinsToPlayers } from '../helpers/playerHelpers';
import Player from './Player';

function PlayerList() {
  const playerDataArray = preparePlayerData(playerData);
  const parsedPlayerData = addWinsToPlayers(playerDataArray, matchData);
  const onePlayer = parsedPlayerData[0];
  return (
    <section className ="PlayerList">
      <h1>Current participating players</h1>
      <Player {...onePlayer}/>
    </section>
  );
}

export default PlayerList;
