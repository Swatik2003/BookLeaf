import { useState } from "react";
import API from "../api/axios";
import { useNavigate, Link } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const [error, setError] = useState("");

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const res = await API.post("/auth/login", form);

      localStorage.setItem("token", res.data.token);

      localStorage.setItem(
        "user",
        JSON.stringify(res.data.user)
      );

      navigate("/dashboard");

    } catch (error) {

      setError(
        error.response?.data?.message ||
        "Login failed"
      );

    }

  };

  return (

    <div style={styles.container}>

      <div className="card shadow-lg border-0" style={styles.card}>

        <div className="text-center mb-4">

          <div style={styles.logo}>
            📚
          </div>

          <h2 className="fw-bold mt-3">
            Welcome Back
          </h2>

          <p className="text-muted">
            Login to BookLeaf Portal
          </p>

        </div>

        {error && (
          <div className="alert alert-danger">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>

          <div className="mb-3">

            <label className="form-label fw-semibold">
              Email Address
            </label>

            <input
              type="email"
              className="form-control form-control-lg"
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

            <label className="form-label fw-semibold">
              Password
            </label>

            <input
              type="password"
              className="form-control form-control-lg"
              placeholder="Enter password"
              onChange={(e) =>
                setForm({
                  ...form,
                  password: e.target.value
                })
              }
            />

          </div>

          <button
            className="btn btn-primary w-100 py-3 fw-bold"
            style={styles.button}
          >
            Login
          </button>

        </form>

        <p className="text-center mt-4">

          Don't have an account?

          <Link
            to="/register"
            className="text-decoration-none fw-bold ms-1"
          >
            Register
          </Link>

        </p>

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
    width: "420px",
    padding: "40px",
    borderRadius: "20px",
    background: "#fff"
  },

  logo: {
    width: "80px",
    height: "80px",
    borderRadius: "20px",
    background: "linear-gradient(to right, #6366f1, #9333ea)",
    color: "white",
    fontSize: "35px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0 auto"
  },

  button: {
    borderRadius: "12px",
    fontSize: "18px",
    background: "linear-gradient(to right, #6366f1, #9333ea)",
    border: "none"
  }

};

export default Login;