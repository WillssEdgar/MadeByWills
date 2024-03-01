import "./Nav.css";
import { Link as ScrollLink } from "react-scroll";
import logo from "../../assets/WillsEdgarWoodworking.png";

function Nav() {
  return (
    <div>
      <header>
        <img src={logo} alt="logo" className="logo" />
        <nav className="navBar">
          <ul className="nav_links">
            <li>
              <ScrollLink to="about" smooth={true} duration={500} offset={-100}>
                About Me
              </ScrollLink>
            </li>

            <li>
              <ScrollLink
                to="expertise"
                smooth={true}
                duration={500}
                offset={-200}
              >
                Expertise
              </ScrollLink>
            </li>

            <li>
              <ScrollLink
                to="gallery"
                smooth={true}
                duration={500}
                offset={-200}
              >
                Gallery
              </ScrollLink>
            </li>
          </ul>
        </nav>
        <ScrollLink to="contact">
          <button>Contact</button>
        </ScrollLink>
      </header>
    </div>
  );
}

export default Nav;
