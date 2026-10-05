import { Link } from "react-router-dom";
import ghIcon from "../assets/gh.png";

export default function Footer() {
  return (
    <footer>
      <main>
        <p>© 2026 Tomáš Vlasák</p>
        <div id="social-networks">
          <Link to="https://github.com/tomasvlasakdev">
            <img id="gh" src={ghIcon}></img>
          </Link>
        </div>
      </main>
    </footer>
  );
}
