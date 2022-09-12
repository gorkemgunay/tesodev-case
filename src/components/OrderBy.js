function OrderBy({ orderBy, setOrderBy }) {
  return (
    <div className="order-by">
      <img src="./assets/icons/sort.svg" alt="sort" />
      <select value={orderBy} onChange={(e) => setOrderBy(e.target.value)}>
        <option value="" disabled>
          Order By
        </option>
        <option value="name-ascending">Name ascending</option>
        <option value="name-descending">Name descending</option>
        <option value="year-ascending">Year ascending</option>
        <option value="year-descending">Year descending</option>
      </select>
    </div>
  );
}

export default OrderBy;
