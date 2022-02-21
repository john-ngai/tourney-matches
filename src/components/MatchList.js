import Match from './Match';

function MatchList(props) {
  const oneMatch = props[0];
  return (
    <section className="PlayerList MatchList">
      <h1>Match List</h1>
      <Match {...oneMatch} />
    </section>
  );
}

export default MatchList;
