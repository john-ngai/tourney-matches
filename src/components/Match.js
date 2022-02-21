function Match(props) {
  const { players, winner, scoreDifference } = props;
  return (
    <article className="Match">
      <h1>
        {players[0]} <span>vs</span> {players[1]}
      </h1>
      {winner && <h2>Disguised Lizard is the winner by 1!</h2>}
      {!winner && <h2>No winners yet!</h2>}
    </article>
  );
}

export default Match;
