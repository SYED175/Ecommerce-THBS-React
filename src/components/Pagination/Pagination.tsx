interface Props {
  totalPages: number;
  currentPage: number;
  handlePageChange: (pageNumber: number) => void;
}
const Pagination = ({ totalPages, currentPage, handlePageChange }: Props) => {
  return (
    <div className="sd-pagination">
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item">
            <a
              className="page-link"
              href="#"
              onClick={() => {
                if (currentPage > 1) handlePageChange(currentPage - 1);
              }}
            >
              Previous
            </a>
          </li>
          {Array.from({ length: totalPages }).map((_, index) => (
            <li
              key={index}
              className={`page-item ${
                currentPage == index + 1 ? "active" : ""
              }`}
            >
              <a
                className="page-link"
                href="#"
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </a>
            </li>
          ))}

          <li className="page-item">
            <a
              className="page-link"
              href="#"
              onClick={() => {
                if (currentPage < totalPages) handlePageChange(currentPage + 1);
              }}
            >
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
