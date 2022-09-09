import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import SearchResults from "./pages/SearchResults";
import AddLink from "./pages/AddLink";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search-results" element={<SearchResults />} />
      <Route path="/add-link" element={<AddLink />} />
    </Routes>
  );
}

export default App;
