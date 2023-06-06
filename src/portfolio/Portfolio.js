import Card from "../card/Card";

function Portfolio() {
  return (
    <div className="portfolio">
      <h1 className="portfolio_title">Portfolio</h1>
      <div className="portfolio_nav">
        <ul>
          <li>All</li>
          <li>Ruby on Rails</li>
          <li>ReactJS</li>
          <li>Design Concepts</li>
        </ul>
      </div>
      <Card
        title="ii-Vent"
        image="../../daniela-mota-TxZXttbojmA-unsplash.jpeg"
      />
      <Card
        title="MyReads"
        image="../../Cassette Tape - pexels-markus-spiske-92083.png"
      />
      <Card
        title="Books B'n'B"
        image="../../milena-trifonova-pHqt1DsHCx0-unsplash.jpeg"
      />
    </div>
  );
}

export default Portfolio;
