import Match from './Match';

function MatchList(props) {
  const { matchData } = props;
  const parsedMatches = matchData.map(match => <Match {...match}/>);
  return (
    <section className="PlayerList MatchList">
      <h1>Match List</h1>
      { parsedMatches }
    </section>
  );
}

export default MatchList;
