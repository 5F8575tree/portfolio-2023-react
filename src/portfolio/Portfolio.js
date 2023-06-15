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
            image="../../ii-vent.png"
            about="Music-event-themed task management app. I was the frontend engineer in a small team of four."
            gitLink="https://github.com/5F8575tree/ii-vent-ruby-rails"
          />
          <Card
            title="MyReads"
            image="../../my-reads.png"
            link="https://rainbow-hotteok-58686d.netlify.app"
            about="React app using API-powered search to store books in various categories."
            gitLink="https://github.com/5F8575tree/my-reads-app-react"
          />
          <Card
            title="Books B'n'B"
            image="../../books-bnb.png"
            about="Ruby on Rails marketplace app that allows users to search and upload books, or borrow books from other users."
            gitLink="https://github.com/5F8575tree/books-bnb-ruby-rails"
          />
        </>
      );
    } else if (selectedOption === "Ruby on Rails") {
      return (
        <>
          <Card
            title="ii-Vent"
            image="../../ii-vent.png"
            about="A music-event-themed task management app. I was the frontend engineer in a small team of four."
            gitLink="https://github.com/5F8575tree/ii-vent-ruby-rails"
          />
          <Card
            title="Books B'n'B"
            image="../../books-bnb.png"
            about="Ruby on Rails marketplace app that allows users to search and upload books, or borrow books from other users."
            gitLink="https://github.com/5F8575tree/books-bnb-ruby-rails"
          />
        </>
      );
    } else if (selectedOption === "ReactJS") {
      return (
        <Card
          title="MyReads"
          image="../../my-reads.png"
          link="https://rainbow-hotteok-58686d.netlify.app"
          about="React app using API-powered search to store books in various categories."
          gitLink="https://github.com/5F8575tree/my-reads-app-react"
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
          {/* <li
            className={selectedOption === "Design Concepts" ? "selected" : ""}
            onClick={() => handleOptionClick("Design Concepts")}
          >
            Design Concepts
          </li> */}
        </ul>
      </div>
      <div className="cards" data-aos="fade-in">
        {renderCards()}
      </div>
      <div id="contact"></div>
    </div>
  );
}

export default Portfolio;
