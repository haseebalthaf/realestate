import "../style/index.css";
import { windowTitle } from "../components/windowTitle";

const Home = () => {
  windowTitle("Properties | Home");
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
          <a className="navItem active" href="/">
            Home
          </a>
          <a className="navItem" href="/browse">
            Browse
          </a>
        </nav>
      </div>
      <div className="imageContainer">
        <img src="/images/background.jpg" alt="Cityscape" className="homeBg" />
        <div className="titleContainer">
          <h1>Welcome to the Real Estate Heaven!</h1>
          <p className="subContainer">Use the buttons above to navigate!</p>
        </div>
      </div>
      {/* Footer */}
      <footer>
        <div className="footerContainer">
          <small>&copy; Haseeb Althaf, All rights reserved.</small>
        </div>
      </footer>
    </>
  );
};

export default Home;
