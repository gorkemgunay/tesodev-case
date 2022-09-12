import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Container from "../components/Container";
import Header from "../components/Header";
import RecordCard from "../components/RecordCard";
import OrderBy from "../components/OrderBy";
import { useDataContext } from "../contexts/DataContext";
import Pagination from "../components/Pagination";

function SearchResults() {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchParam = searchParams.get("search");
  const sortParam = searchParams.get("sort");
  const [search, setSearch] = useState(searchParam || "");
  const [filteredData, setFilteredData] = useState(null);
  const [orderBy, setOrderBy] = useState(sortParam || "");
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage] = useState(5);
  const { data } = useDataContext();

  useEffect(() => {
    setSearchParams({ search, sort: orderBy });
  }, [orderBy, search, setSearchParams]);

  useEffect(() => {
    if (!filteredData) {
      setFilteredData(data);
    }
  }, [data, filteredData, sortParam]);

  useEffect(() => {
    const trimSearch = search.trim();
    if (trimSearch.length >= 2) {
      const filter = data.filter(
        (item) =>
          item[0].toLowerCase().includes(trimSearch.toLowerCase()) ||
          item[1].toLowerCase().includes(trimSearch.toLowerCase())
      );
      if (filter.length) {
        setFilteredData(filter);
      }
    }
  }, [data, search]);

  useEffect(() => {
    if (searchParam === "") {
      setFilteredData(data);
    }
  }, [data, searchParam]);

  useEffect(() => {
    if (orderBy === "name-ascending") {
      setFilteredData((prev) => prev.sort((a, b) => a[1].localeCompare(b[1])));
    } else if (orderBy === "name-descending") {
      setFilteredData((prev) => prev.sort((a, b) => b[1].localeCompare(a[1])));
    } else if (orderBy === "year-ascending") {
      setFilteredData((prev) =>
        prev.sort((a, b) =>
          a[3]
            .split("/")
            .reverse()
            .join()
            .localeCompare(b[3].split("/").reverse().join())
        )
      );
    } else if (orderBy === "year-descending") {
      setFilteredData((prev) =>
        prev.sort((a, b) =>
          b[3]
            .split("/")
            .reverse()
            .join()
            .localeCompare(a[3].split("/").reverse().join())
        )
      );
    }
  }, [orderBy]);

  const indexOfLastData = currentPage * dataPerPage;
  const indexOfFirstData = indexOfLastData - dataPerPage;
  const currentData = filteredData?.slice(indexOfFirstData, indexOfLastData);

  return (
    <div className="search-results-page">
      <Header
        showLogo
        showSearch
        search={search}
        setSearch={setSearch}
        showButton
      />
      <Container>
        <div className="search-results-page__wrapper">
          {filteredData && (
            <div className="search-results-page__body">
              <div className="search-results-page__results">
                {currentData?.map((item, index) => (
                  <RecordCard
                    key={index}
                    company={item[1]}
                    fullName={item[0]}
                    date={item[3]}
                    country={item[4]}
                    city={item[5]}
                    left
                  />
                ))}
              </div>
              {Math.ceil(filteredData.length) > 3 && (
                <Pagination
                  dataPerPage={dataPerPage}
                  totalData={filteredData.length}
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                />
              )}
            </div>
          )}
          {filteredData && (
            <OrderBy orderBy={orderBy} setOrderBy={setOrderBy} />
          )}
        </div>
      </Container>
    </div>
  );
}

export default SearchResults;
