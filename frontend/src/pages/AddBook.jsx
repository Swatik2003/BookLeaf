import { useState } from "react";
import API from "../api/axios";
import { useNavigate } from "react-router-dom";

function AddBook() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    isbn: "",
    genre: "",
    status: "",
    copiesSold: "",
    earned: "",
    paid: "",
    pending: ""
  });

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await API.post("/books", form);

      alert("Book Added");

      navigate("/books");

    } catch (error) {

      alert("Failed to add book");

    }

  };

  return (

    <div style={styles.container}>

      <div className="card shadow-lg border-0" style={styles.card}>

        <h2 className="text-center fw-bold mb-4">
          Add New Book
        </h2>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            placeholder="Book Title"
            className="form-control mb-3"
            onChange={(e) =>
              setForm({
                ...form,
                title: e.target.value
              })
            }
          />

          <input
            type="text"
            placeholder="ISBN"
            className="form-control mb-3"
            onChange={(e) =>
              setForm({
                ...form,
                isbn: e.target.value
              })
            }
          />

          <input
            type="text"
            placeholder="Genre"
            className="form-control mb-3"
            onChange={(e) =>
              setForm({
                ...form,
                genre: e.target.value
              })
            }
          />

          <input
            type="text"
            placeholder="Status"
            className="form-control mb-3"
            onChange={(e) =>
              setForm({
                ...form,
                status: e.target.value
              })
            }
          />

          <input
            type="number"
            placeholder="Copies Sold"
            className="form-control mb-3"
            onChange={(e) =>
              setForm({
                ...form,
                copiesSold: e.target.value
              })
            }
          />

          <input
            type="number"
            placeholder="Royalty Earned"
            className="form-control mb-3"
            onChange={(e) =>
              setForm({
                ...form,
                earned: e.target.value
              })
            }
          />

          <input
            type="number"
            placeholder="Royalty Paid"
            className="form-control mb-3"
            onChange={(e) =>
              setForm({
                ...form,
                paid: e.target.value
              })
            }
          />

          <input
            type="number"
            placeholder="Royalty Pending"
            className="form-control mb-4"
            onChange={(e) =>
              setForm({
                ...form,
                pending: e.target.value
              })
            }
          />

          <button
            className="btn btn-primary w-100 py-2"
          >
            Add Book
          </button>

        </form>

      </div>

    </div>
  );
}

const styles = {

  container: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(to right, #4f46e5, #9333ea)"
  },

  card: {
    width: "450px",
    padding: "30px",
    borderRadius: "20px"
  }

};

export default AddBook;