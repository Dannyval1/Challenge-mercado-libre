import logoImg from "./../../assets/main-logo.png";
import searchingIcon from "./../../assets/search-icon.png";
import "./Header.scss";

export const Header = () => {

  return (
    <header className="searchBar pt-2 pb-2">
      <div className="d-flex justify-content-center">
        <div className="logo">
          <img
            src={logoImg} alt="Logo" width="60"
          />
        </div>
        <div className="inputSearch d-flex align-items-center">
            <input
              className="form-control search me-0 ms-4"
              type="search"
              placeholder="Nunca dejes de buscar"
            />
            <input
              className="btn btn-outline-secondary btn-search"
              type="image"
              name="submit"
              src={searchingIcon}
              alt="Submit"
              data-testid="search_button"
            />
        </div>
      </div>
    </header>
  );
};
