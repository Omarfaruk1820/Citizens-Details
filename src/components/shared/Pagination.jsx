const Pagination = ({ page, totalPages, setPage }) => {
  return (
    <div className="join mt-5">

      <button
        className="join-item btn"
        onClick={() => setPage(page - 1)}
        disabled={page === 1}
      >
        Prev
      </button>

      <button className="join-item btn">
        {page}
      </button>

      <button
        className="join-item btn"
        onClick={() => setPage(page + 1)}
        disabled={page === totalPages}
      >
        Next
      </button>

    </div>
  );
};

export default Pagination;