import "./menu.css";
import { BsLinkedin, BsFillFilePersonFill } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <div className="menu">
      <a className="social" href="https://www.linkedin.com/in/arcorreiaa/">
        <BsLinkedin color="#FFF" size={24} />
      </a>
      <a className="social" href="https://arcorreiaa.github.io/portifolio">
        <BsFillFilePersonFill color="#FFF" size={24} />
      </a>
      <Link className="menu-item" to="/links">
        Meus Links
      </Link>
    </div>
  );
}
