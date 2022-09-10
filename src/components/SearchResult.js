import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDataContext } from "../contexts/DataContext";
import RecordCard from "./RecordCard";

function SearchResult({ search }) {
  const { data } = useDataContext();
  const [filteredData, setFilteredData] = useState(null);

  useEffect(() => {
    const trimSearch = search.trim();
    if (trimSearch.length >= 2) {
      const filter = data
        .filter((item) =>
          item[1].toLowerCase().startsWith(trimSearch.toLowerCase())
        )
        .slice(0, 3);
      if (filter.length) {
        setFilteredData(filter);
      }
    } else {
      setFilteredData(null);
    }
  }, [data, search]);

  return (
    <>
      {filteredData && (
        <div className="search-result">
          {filteredData?.map((item, index) => (
            <RecordCard
              key={index}
              company={item[1]}
              country={item[4]}
              city={item[5]}
            />
          ))}
          <Link to={`/search-results?search=${search}`}>Show more...</Link>
        </div>
      )}
    </>
  );
}

export default SearchResult;
