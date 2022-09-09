import { Link } from "react-router-dom";
import Button from "./Button";
import Search from "./Search";

function Header({
  showLogo,
  showSearch,
  search,
  setSearch,
  showReturn,
  showButton,
}) {
  return (
    <header className="page-header">
      <div className="page-header__left">
        {showLogo && (
          <Link to="/">
            <img
              src="./assets/images/logo.png"
              alt="logo"
              className="page-header__logo"
            />
          </Link>
        )}

        {showSearch && <Search value={search} setValue={setSearch} />}
        {showReturn && (
          <Link to="/" className="page-header__return">
            <img src="./assets/icons/back.svg" alt="return" />
            <h5>Return to List Page</h5>
          </Link>
        )}
      </div>
      {showButton && (
        <div className="page-header__right">
          <Link to="/add-link">
            <Button>Add new record</Button>
          </Link>
        </div>
      )}
    </header>
  );
}

export default Header;
