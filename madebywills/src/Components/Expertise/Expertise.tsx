import "./Expertise.css";
import handtools from "../../assets/HandTools.jpg";

function Expertise() {
  return (
    <div className="expertise">
      <h1 className="expertiseHeading">Expertise</h1>
      <div className="expertiseContainer">
        <img src={handtools} alt="handtools" className="handtools" />
        <p className="expertiseInfo">
          For the past four years, my unwavering commitment has been to craft
          high-quality woodworking projects that seamlessly blend quality and
          affordability. In a market saturated with poorly made products, I
          recognize the importance of delivering items that not only stand the
          test of time but also remain accessible to all. At Wills Edgar
          Woodworking, I pour my passion into each creation, ensuring that every
          piece reflects a dedication to craftsmanship without compromising on
          cost. In a world where quality is often sacrificed for profit, I take
          pride in offering well-crafted, reasonably priced woodworking
          solutions. Your satisfaction is at the heart of our mission, as we
          strive to redefine the standard for excellence in woodworking while
          making it accessible to everyone.
        </p>
      </div>
    </div>
  );
}

export default Expertise;
