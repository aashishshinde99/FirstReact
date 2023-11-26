
function Card(props) {
    return (
      <>
      <div className="netflix-card">
          <img src={props.img}/>
          <div className="netflixCardDetails">
              <h3>{props.name}</h3>
              <p>{props.desc}</p>
              <a  href={props.link} className="cardBtn">Click Here</a>
          </div>
      </div>
      </>
    );
  }
  
  export default Card;
  