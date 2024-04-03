import { Link } from "react-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <div className="navbar-sec">
          <a className="navbar-brand" href="/">
            <img src="netflix-logo.png" alt="Netflix Logo" className="logo" />
          </a>
          <ul className="nav-items">
            <li className="nav-link">
              {/* <Link to="/others">Other Links</Link> */}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
