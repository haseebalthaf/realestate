import "../style/browse.css";
import { windowTitle } from "../components/windowTitle";
import SearchBar from "../components/searchBar";
import Cards from "../components/cardFunc";

const Browse = () => {
  windowTitle("Properties | Browse Feed");
  return (
    <>
      {/* Navigation Bar */}
      <div className="navBar">
        <img
          src="/images/logo.png"
          alt="Website logo"
          className="logoContainer"
          height="45"
        />
        <nav className="navContainer">
          <a className="navItem" href="/">
            Home
          </a>
          <a className="navItem active" href="/browse">
            Browse
          </a>
        </nav>
      </div>
      {/* Calling Functions */}
      <SearchBar />
      <Cards />
      {/* Adding a Spacer */}
      <div className="spacer" />
      {/* Footer */}
      <footer>
        <div className="footerContainer">
          <small>&copy; Haseeb Althaf, All rights reserved.</small>
        </div>
      </footer>
    </>
  );
};

export default Browse;
