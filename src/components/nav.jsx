import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <a
        className="link dim pink b f1 f-headline-ns tc db mb3 mb4-ns"
        href="/"
        title="Home"
      >
        NC News
      </a>
      <nav className="bt bb blue tc mw7 center mt4">
        <h2>News from all over the internet</h2>
        <div className="tc pb3">
          <Link
            className="f6 f5-l link bg-animate black-80 hover-bg-light-green dib pa3 ph4-l"
            to="/"
          >
            Coding
          </Link>
          <Link
            className="f6 f5-l link bg-animate black-80 hover-bg-light-yellow dib pa3 ph4-l"
            to="/coding"
          >
            Cooking
          </Link>
          <Link
            className="f6 f5-l link bg-animate black-80 hover-bg-light-pink dib pa3 ph4-l"
            to="/cooking"
          >
            Football
          </Link>
          <Link
            className="f6 f5-l link bg-animate black-80 hover-bg-light-blue dib pa3 ph4-l"
            to="/football"
          >
            Users
          </Link>
        </div>{" "}
      </nav>
    </div>
  );
};

export default Nav;
