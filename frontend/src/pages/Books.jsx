import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import API from "../api/axios";

function Books() {

  const [books, setBooks] = useState([]);

  useEffect(() => {

    fetchBooks();

  }, []);

  const fetchBooks = async () => {

    try {

      const res = await API.get("/books");

      setBooks(res.data);

    } catch (error) {

      console.log(error);

    }

  };

  return (

    <div style={styles.page}>

      {/* Header */}

      <div className="d-flex justify-content-between align-items-center mb-5">

        <div>

          <h1 className="fw-bold text-white">
            📚 My Books
          </h1>

          <p className="text-light">
            Manage and track your published books
          </p>

        </div>

        <Link
          to="/add-book"
          className="btn btn-light fw-bold px-4 py-2"
          style={styles.addBtn}
        >
          + Add Book
        </Link>

      </div>

      {/* Books Grid */}

      <div className="row">

        {books.length > 0 ? (

          books.map((book) => (

            <div
              key={book._id}
              className="col-md-4 mb-4"
            >

              <div
                className="card border-0 shadow-lg h-100"
                style={styles.card}
              >

                <div className="card-body">

                  {/* Book Icon */}

                  <div style={styles.icon}>
                    📖
                  </div>

                  {/* Title */}

                  <h3 className="fw-bold mt-3">
                    {book.title}
                  </h3>

                  {/* Details */}

                  <div className="mt-4">

                    <p className="mb-2">
                      <strong>ISBN:</strong>
                      {" "}
                      {book.isbn}
                    </p>

                    <p className="mb-2">
                      <strong>Genre:</strong>
                      {" "}
                      {book.genre}
                    </p>

                    <p className="mb-2">
                      <strong>Status:</strong>

                      <span
                        className="badge bg-success ms-2"
                      >
                        {book.status}
                      </span>
                    </p>

                    <p className="mb-0">

                      <strong>Royalty Earned:</strong>

                      <span className="text-primary fw-bold ms-2">

                        ₹{book.royalty?.earned}

                      </span>

                    </p>

                  </div>

                </div>

              </div>

            </div>

          ))

        ) : (

          <div className="text-center text-white mt-5">

            <h3>No Books Found</h3>

            <p>Add your first book to get started 🚀</p>

          </div>

        )}

      </div>

    </div>
  );
}

const styles = {

  page: {
    minHeight: "100vh",
    padding: "40px",
    background: "linear-gradient(to right, #4f46e5, #9333ea)"
  },

  card: {
    borderRadius: "20px",
    background: "#fff",
    transition: "0.3s"
  },

  icon: {
    width: "70px",
    height: "70px",
    borderRadius: "18px",
    background: "linear-gradient(to right, #6366f1, #9333ea)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "30px",
    color: "white"
  },

  addBtn: {
    borderRadius: "12px"
  }

};

export default Books;