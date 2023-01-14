import Card from "react-bootstrap/Card";
import "./card.css";

const PortfolioSlider = ({ item }) => {
  return (
    <Card
      style={{
        width: "18rem",
        borderRadius: "2rem",
        backgroundColor: "#170d41",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <div className="item-con" key={item.id}>
        <div className="item-container">
          <img src={item.image} alt="portfolio project image" />
          <h2>{item.title} </h2>
          <p className="desc">{item.description}</p>

          {/* new */}
          <div className="git-btn">
            <a
              href={item.github}
              className="gitbtn"
              target="_blank"
              rel="noreferrer noopener"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </Card>
  );
};
export default PortfolioSlider;
