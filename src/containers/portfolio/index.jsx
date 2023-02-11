import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsFillPersonBadgeFill } from "react-icons/bs";
import ImageOne from "../../images/codeforces.png";
import ImageTwo from "../../images/quora.jpg";
import ImageThree from "../../images/quiz.png";
import ImageFour from "../../images/weather.jpg";
import ImageFive from "../../images/moon.png";
import "./style.scss";
import { useState } from "react";

const portfolioData = [
  {
    id: 2,
    name: "CF Progress Observer",
    image: ImageOne,
    link: "https://github.com/divyaporwal-hub/Cf-Progress-Observer",
  },
  {
    id: 3,
    name: "Qwestwers",
    link: "https://github.com/divyaporwal-hub/Quora-clone",
    image: ImageTwo,
  },
  {
    id: 2,
    name: "DSA Quiz",
    image: ImageThree,
    link: "https://github.com/divyaporwal-hub/DSA-QUIZ-APPLICATION",
  },
  {
    id: 2,
    name: "Weather App",
    image: ImageFour,

    link: "https://github.com/divyaporwal-hub/Weather-Forecasting-App",
  },
  {
    id: 3,
    name: "A Ride To The Moon",
    image: ImageFive,
    link: "https://github.com/divyaporwal-hub/A-Ride-To-The-Moon",
  },
];


const Portfolio = () => {
  const [hoveredValue, setHoveredValue] = useState(null);


  function handleHover(index) {
    setHoveredValue(index);
  }




  return (
    <section id="portfolio" className="portfolio">
      <PageHeaderContent
        headerText="My Portfolio"
        icon={<BsFillPersonBadgeFill size={40} />}
      />
      <div className="portfolio__content">
        <div className="portfolio__content__cards">
          {portfolioData.map((item, index) => (
            <div
              className="portfolio__content__cards__item"
              key={`cardItem${item.name.trim()}`}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleHover(null)}
            >
              <div className="portfolio__content__cards__item__img-wrapper">
                <a>
                  <img alt="dummy data" src={item.image} />
                </a>
              </div>
              <div className="overlay">
                {index === hoveredValue && (
                  <div>
                    <p>{item.name}</p>
                    <a href={item.link} target="_blank">
                    <button>Visit</button>
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Portfolio;