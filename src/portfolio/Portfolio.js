import { useState, useEffect } from "react";
import Card from "../card/Card";
import Aos from "aos";
import "aos/dist/aos.css";

function Portfolio() {
  const [selectedOption, setSelectedOption] = useState("All");

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const renderCards = () => {
    if (selectedOption === "All") {
      return (
        <>
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
        </>
      );
    } else if (selectedOption === "Ruby on Rails") {
      return (
        <>
          <Card
            title="ii-Vent"
            image="../../daniela-mota-TxZXttbojmA-unsplash.jpeg"
          />
          <Card
            title="Books B'n'B"
            image="../../milena-trifonova-pHqt1DsHCx0-unsplash.jpeg"
          />
        </>
      );
    } else if (selectedOption === "ReactJS") {
      return (
        <Card
          title="MyReads"
          image="../../Cassette Tape - pexels-markus-spiske-92083.png"
        />
      );
    } else if (selectedOption === "Design Concepts") {
      return (
        <Card
          title="Design Concepts Project"
          image="../../design-concepts-project.jpg"
        />
      );
    }
  };

  return (
    <div className="portfolio">
      <h1 className="portfolio_title">Portfolio</h1>
      <div className="portfolio_nav" data-aos="fade-in">
        <ul>
          <li
            className={selectedOption === "All" ? "selected" : ""}
            onClick={() => handleOptionClick("All")}
          >
            All
          </li>
          <li
            className={selectedOption === "Ruby on Rails" ? "selected" : ""}
            onClick={() => handleOptionClick("Ruby on Rails")}
          >
            Ruby on Rails
          </li>
          <li
            className={selectedOption === "ReactJS" ? "selected" : ""}
            onClick={() => handleOptionClick("ReactJS")}
          >
            ReactJS
          </li>
          <li
            className={selectedOption === "Design Concepts" ? "selected" : ""}
            onClick={() => handleOptionClick("Design Concepts")}
          >
            Design Concepts
          </li>
        </ul>
      </div>
      <div className="cards" data-aos="fade-in">
        {renderCards()}
      </div>
    </div>
  );
}

export default Portfolio;
