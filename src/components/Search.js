import Form from "./Form";
import Input from "./Input";
import Button from "./Button";
import { Link } from "react-router-dom";

function Search({ value, setValue, onSubmit }) {
  return (
    <Form onSubmit={onSubmit} className="search__form">
      <img src="./assets/icons/search.svg" alt="search-icon" />
      <Input placeholder="Search..." value={value} setValue={setValue} />
      <Link to={`/search-results?search=${value}`}>
        <Button type="submit" disabled={!value}>
          Search
        </Button>
      </Link>
    </Form>
  );
}

export default Search;
