import { useState } from "react";
import Form from "./Form";
import Input from "./Input";
import Button from "./Button";

function Search({ onSubmit }) {
  const [search, setSearch] = useState("");

  return (
    <Form onSubmit={onSubmit} className="search__form">
      <img src="./assets/icons/search.svg" alt="search-icon" />
      <Input placeholder="Search..." value={search} setValue={setSearch} />
      <Button>Search</Button>
    </Form>
  );
}

export default Search;
