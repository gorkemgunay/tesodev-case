import { Link } from "react-router-dom";
import Button from "./Button";
import Search from "./Search";

function Header({ showLogo, showSearch, showReturn, showButton }) {
  return (
    <header className="page-header">
      <div className="page-header__left">
        {showLogo && <img src="./assets/images/logo.png" alt="logo" />}
        {showSearch && <Search />}
        {showReturn && (
          <Link to="/" className="page-header__return">
            <img src="./assets/icons/back.svg" alt="return" />
            <h5>Return to List Page</h5>
          </Link>
        )}
      </div>
      {showButton && (
        <div className="page-header__right">
          <Button>Add new record</Button>
        </div>
      )}
    </header>
  );
}

export default Header;
