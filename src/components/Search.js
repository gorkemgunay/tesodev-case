import Form from "./Form";
import Input from "./Input";
import Button from "./Button";

function Search({ value, setValue, onSubmit }) {
  return (
    <Form onSubmit={onSubmit} className="search__form">
      <img src="./assets/icons/search.svg" alt="search-icon" />
      <Input placeholder="Search..." value={value} setValue={setValue} />
      <Button type="submit" disabled={!value}>
        Search
      </Button>
    </Form>
  );
}

export default Search;
