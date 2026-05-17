import { useEffect, useState } from "react";

import API from "../api/axios";

function CreateTicket() {

  const [books, setBooks] = useState([]);

  const [form, setForm] = useState({
    book: "",
    subject: "",
    description: ""
  });

  const [success, setSuccess] = useState("");

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

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await API.post("/tickets", form);

      setSuccess("Ticket Created Successfully ✅");

      setForm({
        book: "",
        subject: "",
        description: ""
      });

    } catch (error) {

      console.log(error);

    }

  };

  return (

    <div style={styles.page}>

      <div className="container">

        <div className="row justify-content-center">

          <div className="col-lg-7">

            <div
              className="card border-0 shadow-lg"
              style={styles.card}
            >

              {/* Header */}

              <div className="text-center mb-5">

                <div style={styles.icon}>
                  🎫
                </div>

                <h1 className="fw-bold mt-4">
                  Raise Support Ticket
                </h1>

                <p className="text-muted">
                  Get help regarding your books,
                  royalties, or publishing issues.
                </p>

              </div>

              {/* Success Message */}

              {success && (

                <div className="alert alert-success">
                  {success}
                </div>

              )}

              {/* Form */}

              <form onSubmit={handleSubmit}>

                {/* Book Select */}

                <div className="mb-4">

                  <label className="form-label fw-semibold">
                    Select Book
                  </label>

                  <select
                    className="form-select form-select-lg"
                    value={form.book}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        book: e.target.value
                      })
                    }
                  >

                    <option value="">
                      Choose your book
                    </option>

                    {books.map((book) => (

                      <option
                        key={book._id}
                        value={book._id}
                      >
                        {book.title}
                      </option>

                    ))}

                  </select>

                </div>

                {/* Subject */}

                <div className="mb-4">

                  <label className="form-label fw-semibold">
                    Ticket Subject
                  </label>

                  <input
                    type="text"
                    placeholder="Enter ticket subject"
                    className="form-control form-control-lg"
                    value={form.subject}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        subject: e.target.value
                      })
                    }
                  />

                </div>

                {/* Description */}

                <div className="mb-4">

                  <label className="form-label fw-semibold">
                    Description
                  </label>

                  <textarea
                    placeholder="Describe your issue in detail..."
                    className="form-control"
                    rows="6"
                    value={form.description}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        description: e.target.value
                      })
                    }
                  />

                </div>

                {/* Submit Button */}

                <button
                  className="btn btn-primary w-100 py-3 fw-bold"
                  style={styles.button}
                >

                  Submit Ticket

                </button>

              </form>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

const styles = {

  page: {
    minHeight: "100vh",
    padding: "50px 20px",
    background: "linear-gradient(to right, #4f46e5, #9333ea)"
  },

  card: {
    borderRadius: "24px",
    padding: "40px",
    background: "#fff"
  },

  icon: {
    width: "90px",
    height: "90px",
    borderRadius: "24px",
    background: "linear-gradient(to right, #6366f1, #9333ea)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "40px",
    color: "white",
    margin: "0 auto"
  },

  button: {
    borderRadius: "14px",
    fontSize: "18px",
    background: "linear-gradient(to right, #6366f1, #9333ea)",
    border: "none"
  }

};

export default CreateTicket;