import { ReactComponent as GitHubIcon } from "assets/img/Vector.svg";
import "./styles.css";

export default function NavBar() {
  return (
    <header>
      <nav className="container">
        <div className="dsmovie-nav-content">
          <h1>DSMovie</h1>
          <a
            href="https://github.com/Michelsgab"
            target="_blank"
            rel="noreferrer"
          >
            <div className="dsmovie-contact-container">
              <GitHubIcon />
              <p className="dsmovie-contact-link">/Michelsgab</p>
            </div>
          </a>
        </div>
      </nav>
    </header>
  );
}
