import "./Contact.css";
import gmailLogo from "../../assets/gmail-logo.png";
import facebookLogo from "../../assets/facebooklogo.png";
import instagramLogo from "../../assets/instagram-logo.png";

function Contact() {
  return (
    <div className="contact">
      <h1>Contact</h1>
      <div className="logos">
        <img src={gmailLogo} alt="img" className="gmailLogo" />
        <img src={facebookLogo} alt="img" className="facebookLogo" />
        <img src={instagramLogo} alt="img" className="instagramLogo" />
      </div>
    </div>
  );
}

export default Contact;
