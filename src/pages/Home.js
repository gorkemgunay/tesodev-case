import { useState } from "react";
import Container from "../components/Container";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Search from "../components/Search";
import SearchResult from "../components/SearchResult";
import Slider from "../components/Slider";

function Home() {
  const [search, setSearch] = useState("");
  return (
    <div className="home-page">
      <Container>
        <Header showButton />
        <div className="home-page__logo">
          <img
            src="./assets/images/logo.png"
            alt="logo"
            className="home-page"
          />
          <p>Search app</p>
        </div>

        <div className="home-page__search">
          <h2>Find in records</h2>
          <Search value={search} setValue={setSearch} />
          <SearchResult search={search} />
        </div>
        <div className="home-page__news">
          <h2>Top News</h2>
          <Slider />
        </div>
      </Container>
      <Footer />
    </div>
  );
}

export default Home;
