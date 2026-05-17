import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../api/axios";

function Register() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [error, setError] = useState("");

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await API.post("/auth/register", form);

      alert("Registration Successful");

      navigate("/");

    } catch (error) {

      setError(
        error.response?.data?.message ||
        "Registration failed"
      );

    }

  };

  return (

    <div style={styles.page}>

      <div className="container">

        <div className="row justify-content-center">

          <div className="col-md-5">

            <div className="card shadow-lg border-0 rounded-4 p-4" style={styles.card}>

              <div className="text-center mb-4">

                <div style={styles.logo}>
                  📚
                </div>

                <h2 className="fw-bold mt-3 text-white">
                  Join BookLeaf
                </h2>

                <p className="text-light">
                  AI-Powered Author Portal
                </p>

              </div>

              {error && (
                <div className="alert alert-danger">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit}>

                <div className="mb-3">

                  <label className="form-label text-white">
                    Full Name
                  </label>

                  <input
                    type="text"
                    className="form-control form-control-lg rounded-3"
                    placeholder="Enter your name"
                    onChange={(e) =>
                      setForm({
                        ...form,
                        name: e.target.value
                      })
                    }
                  />

                </div>

                <div className="mb-3">

                  <label className="form-label text-white">
                    Email Address
                  </label>

                  <input
                    type="email"
                    className="form-control form-control-lg rounded-3"
                    placeholder="Enter your email"
                    onChange={(e) =>
                      setForm({
                        ...form,
                        email: e.target.value
                      })
                    }
                  />

                </div>

                <div className="mb-4">

                  <label className="form-label text-white">
                    Password
                  </label>

                  <input
                    type="password"
                    className="form-control form-control-lg rounded-3"
                    placeholder="Create password"
                    onChange={(e) =>
                      setForm({
                        ...form,
                        password: e.target.value
                      })
                    }
                  />

                </div>

                <button
                  className="btn btn-light w-100 py-3 fw-bold rounded-3"
                >
                  Create Account
                </button>

              </form>

              <p className="text-center text-light mt-4">

                Already have an account?

                <Link
                  to="/"
                  className="text-warning text-decoration-none fw-bold ms-1"
                >
                  Login
                </Link>

              </p>

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
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(135deg, #4f46e5, #7c3aed, #db2777)"
  },

  card: {
    background: "rgba(255,255,255,0.1)",
    backdropFilter: "blur(15px)"
  },

  logo: {
    width: "80px",
    height: "80px",
    margin: "0 auto",
    borderRadius: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "35px",
    background: "linear-gradient(135deg, #6366f1, #ec4899)",
    color: "white"
  }

};

export default Register;