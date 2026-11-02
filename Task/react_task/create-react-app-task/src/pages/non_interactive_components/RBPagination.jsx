import { useState } from "react";
import Pagination from "react-bootstrap/Pagination";

function RBPagination() {
  const [currentPage, setCurrentPage] = useState(1);

  // Change this number — pagination buttons will automatically change
  const totalPages = 9;

  const images = [
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800",
    "https://images.unsplash.com/photo-1500534623283-312aade485b7?w=800",
    "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?w=800",
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800",
    "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=800",
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800",
    "https://images.unsplash.com/photo-1500534623283-312aade485b7?w=800",
    "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?w=800",
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800",
  ];

  return (
    <div className="component-page">
      <h1 className="component-title">Pagination</h1>

      <div
        style={{
          width: "600px",
          maxWidth: "100%",
          margin: "30px auto",
          textAlign: "center",
        }}
      >
        <img
          src={images[currentPage - 1]}
          alt={`Page ${currentPage}`}
          style={{
            width: "100%",
            height: "350px",
            objectFit: "cover",
            borderRadius: "12px",
          }}
        />

        <h3>Image page {currentPage}</h3>
      </div>

      <div className="pagination-section">
        <Pagination>
          <Pagination.First
            onClick={() => setCurrentPage(Math.max(1, currentPage - 2))}
            disabled={currentPage === 1}
          />

          <Pagination.Prev
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
          />

          {Array.from({ length: totalPages }, (_, index) => {
            const pageNumber = index + 1;

            return (
              <Pagination.Item
                key={pageNumber}
                active={currentPage === pageNumber}
                onClick={() => setCurrentPage(pageNumber)}
              >
                {pageNumber}
              </Pagination.Item>
            );
          })}

          <Pagination.Next
            onClick={() =>
              setCurrentPage(Math.min(totalPages, currentPage + 1))
            }
            disabled={currentPage === totalPages}
          />

          <Pagination.Last
            onClick={() =>
              setCurrentPage(Math.min(totalPages, currentPage + 2))
            }
            disabled={currentPage === totalPages}
          />
        </Pagination>
      </div>
    </div>
  );
}

export default RBPagination;
