import "./Home.css";
import livingRoomImage from "../../assets/livingroom.png"; // Import your image

function Home() {
  return (
    <div className="home">
      <h1 className="galleryButton">View My Work</h1>
      <img
        src={livingRoomImage}
        alt="Living Room"
        className="backgroundImage"
      />
    </div>
  );
}

export default Home;
