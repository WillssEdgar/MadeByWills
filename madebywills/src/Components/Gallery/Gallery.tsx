import "./Gallery.css";
import farmhouseCoffeeTable from "../../assets/Coffee_Table.png";
import farmohouseSideTable from "../../assets/Farmhouse_SideTable.png";
import modernSideTable from "../../assets/Side_Table.png";
import sideTable from "../../assets/modernSideTableWShelves.png";
import modernCoffeeTable from "../../assets/modernCoffeeTable.png";
import coasters from "../../assets/coaster.png";
import jewleryBox1 from "../../assets/jewleryBox1.png";
function Gallery() {
  return (
    <div>
      <div className="gallery">
        <h1>Gallery</h1>
        <div className="images">
          <img
            src={farmhouseCoffeeTable}
            alt="farmhouseCoffeeTable"
            className="farmhouseCoffeeTable img"
          />
          <img
            src={farmohouseSideTable}
            alt="farmhouseSideTable"
            className="farmhouseSideTable img"
          />
          <img
            src={modernSideTable}
            alt="modernSideTable"
            className="modernSideTable img"
          />
          <img src={sideTable} alt="sideTable" className="sideTable img" />
          <img src={jewleryBox1} alt="jewleryBox" className="jewleryBox1 img" />
          <img
            src={modernCoffeeTable}
            alt="modernCoffeeTable"
            className="modernCoffeeTable img"
          />
          <img src={coasters} alt="coasters" className="coasters img" />
        </div>
      </div>
    </div>
  );
}

export default Gallery;
