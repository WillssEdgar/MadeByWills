import "./Home.css";
import livingRoomImage from "../../assets/livingroom.png"; // Import your image
import { ScrollLink } from "react-scroll";

function Home() {
  return (
    <div className="home">
      <img
        src={livingRoomImage}
        alt="Living Room"
        className="backgroundImage"
      />
    </div>
  );
}

export default Home;
