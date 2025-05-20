import profilePic from "./assets/peyton-brad.png";

function Card() {
  return (
    <div className="card">
      <img className="card-image" src={profilePic} alt="Profile Picture"></img>
      <h2 class="card-title">Brad Peyton</h2>
      <p className="card-text">Vice President</p>
    </div>
  );
}

export default Card;
