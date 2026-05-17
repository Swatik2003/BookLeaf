import { Link } from "react-router-dom";

function Dashboard() {

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  return (

    <div style={styles.page}>

      <div className="container">

        {/* Header */}

        <div className="mb-5 text-white">

          <h1 className="fw-bold display-5">
            Welcome,
            {" "}
            {user?.name || "Author"} 👋
          </h1>

          <p className="fs-5 opacity-75">

            Manage your books, tickets,
            and publishing activities.

          </p>

        </div>

        {/* Dashboard Cards */}

        <div className="row g-4">

          {/* Books */}

          <div className="col-md-6 col-lg-3">

            <Link
              to="/books"
              className="text-decoration-none"
            >

              <div
                className="card border-0 shadow-lg h-100"
                style={styles.card}
              >

                <div className="card-body text-center">

                  <div style={styles.iconPurple}>
                    📚
                  </div>

                  <h4 className="fw-bold mt-4">
                    My Books
                  </h4>

                  <p className="text-muted">
                    View and manage your books
                  </p>

                </div>

              </div>

            </Link>

          </div>

          {/* Tickets */}

          <div className="col-md-6 col-lg-3">

            <Link
              to="/tickets"
              className="text-decoration-none"
            >

              <div
                className="card border-0 shadow-lg h-100"
                style={styles.card}
              >

                <div className="card-body text-center">

                  <div style={styles.iconBlue}>
                    🎫
                  </div>

                  <h4 className="fw-bold mt-4">
                    My Tickets
                  </h4>

                  <p className="text-muted">
                    Track support tickets
                  </p>

                </div>

              </div>

            </Link>

          </div>

          {/* Raise Ticket */}

          <div className="col-md-6 col-lg-3">

            <Link
              to="/create-ticket"
              className="text-decoration-none"
            >

              <div
                className="card border-0 shadow-lg h-100"
                style={styles.card}
              >

                <div className="card-body text-center">

                  <div style={styles.iconPink}>
                    ➕
                  </div>

                  <h4 className="fw-bold mt-4">
                    Raise Ticket
                  </h4>

                  <p className="text-muted">
                    Get publishing support
                  </p>

                </div>

              </div>

            </Link>

          </div>

          {/* Add Book */}

          <div className="col-md-6 col-lg-3">

            <Link
              to="/add-book"
              className="text-decoration-none"
            >

              <div
                className="card border-0 shadow-lg h-100"
                style={styles.card}
              >

                <div className="card-body text-center">

                  <div style={styles.iconGreen}>
                    📖
                  </div>

                  <h4 className="fw-bold mt-4">
                    Add Book
                  </h4>

                  <p className="text-muted">
                    Publish a new book
                  </p>

                </div>

              </div>

            </Link>

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
    transition: "0.3s",
    cursor: "pointer"
  },

  iconPurple: {
    width: "80px",
    height: "80px",
    borderRadius: "20px",
    background: "linear-gradient(to right, #6366f1, #8b5cf6)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "35px",
    color: "white",
    margin: "0 auto"
  },

  iconBlue: {
    width: "80px",
    height: "80px",
    borderRadius: "20px",
    background: "linear-gradient(to right, #3b82f6, #06b6d4)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "35px",
    color: "white",
    margin: "0 auto"
  },

  iconPink: {
    width: "80px",
    height: "80px",
    borderRadius: "20px",
    background: "linear-gradient(to right, #ec4899, #f43f5e)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "35px",
    color: "white",
    margin: "0 auto"
  },

  iconGreen: {
    width: "80px",
    height: "80px",
    borderRadius: "20px",
    background: "linear-gradient(to right, #10b981, #22c55e)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "35px",
    color: "white",
    margin: "0 auto"
  }

};

export default Dashboard;