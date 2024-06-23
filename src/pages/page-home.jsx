import "../style/home.css";
import "../style/navbar.css";
import { windowTitle } from "../components/windowTitle";

const Home = () => {
  windowTitle("Properties | Home");
  return (
    <>
      {/* Navigation bar */}
      <div className="navBar">
        <img
          src="/images/logo.png"
          alt="website-logo"
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
      {/* Website content */}
      <section className="homeSection">
        <h1 className="homeTitle">Welcome to the Real Estate Heaven!</h1>
        <p className="homeSub">Use the buttons above to navigate!</p>
      </section>
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
