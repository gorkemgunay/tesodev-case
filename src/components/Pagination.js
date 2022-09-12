import Button from "./Button";

function Pagination({ dataPerPage, totalData, currentPage, setCurrentPage }) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalData / dataPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination">
      <Button
        className="pagination__button"
        onClick={() => {
          if (currentPage === 1) {
            setCurrentPage(Math.ceil(totalData / dataPerPage));
          } else {
            setCurrentPage(currentPage - 1);
          }
        }}
      >
        Previous
      </Button>
      {pageNumbers.map((pageNumber) => (
        <div key={pageNumber}>
          <Button
            className={`pagination__page ${
              currentPage === pageNumber && "pagination__active"
            }`}
            onClick={() => setCurrentPage(pageNumber)}
          >
            {pageNumber}
          </Button>
        </div>
      ))}
      <Button
        className="pagination__button"
        onClick={() => {
          if (currentPage === Math.ceil(totalData / dataPerPage)) {
            setCurrentPage(1);
          } else {
            setCurrentPage(currentPage + 1);
          }
        }}
      >
        Next
      </Button>
    </div>
  );
}

export default Pagination;
