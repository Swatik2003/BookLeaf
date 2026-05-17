import { useEffect, useState } from "react";

import API from "../api/axios";

function Tickets() {

  const [tickets, setTickets] = useState([]);

  useEffect(() => {

    fetchTickets();

  }, []);

  const fetchTickets = async () => {

    try {

      const res = await API.get("/tickets/my");

      setTickets(res.data);

    } catch (error) {

      console.log(error);

    }

  };

  return (

    <div style={styles.page}>

      <div className="container">

        {/* Header */}

        <div className="mb-5">

          <h1 className="fw-bold text-white">
            🎫 My Support Tickets
          </h1>

          <p className="text-light">
            Track and manage your support requests
          </p>

        </div>

        {/* Tickets */}

        <div className="row">

          {tickets.length > 0 ? (

            tickets.map((ticket) => (

              <div
                key={ticket._id}
                className="col-lg-6 mb-4"
              >

                <div
                  className="card border-0 shadow-lg h-100"
                  style={styles.card}
                >

                  <div className="card-body">

                    {/* Top Section */}

                    <div className="d-flex justify-content-between align-items-start">

                      <div>

                        <h3 className="fw-bold">
                          {ticket.subject}
                        </h3>

                        <p className="text-muted mb-0">
                          {ticket.book?.title}
                        </p>

                      </div>

                      <div style={styles.icon}>
                        🎫
                      </div>

                    </div>

                    {/* Divider */}

                    <hr />

                    {/* Ticket Info */}

                    <div className="row">

                      <div className="col-6 mb-3">

                        <p className="text-muted mb-1">
                          Category
                        </p>

                        <span
                          className="badge bg-primary"
                        >
                          {ticket.category}
                        </span>

                      </div>

                      <div className="col-6 mb-3">

                        <p className="text-muted mb-1">
                          Priority
                        </p>

                        <span
                          className={
                            ticket.priority === "High"
                              ? "badge bg-danger"
                              : ticket.priority === "Medium"
                              ? "badge bg-warning text-dark"
                              : "badge bg-success"
                          }
                        >
                          {ticket.priority}
                        </span>

                      </div>

                      <div className="col-12">

                        <p className="text-muted mb-1">
                          Status
                        </p>

                        <span
                          className={
                            ticket.status === "Open"
                              ? "badge bg-warning text-dark"
                              : ticket.status === "Resolved"
                              ? "badge bg-success"
                              : "badge bg-secondary"
                          }
                        >
                          {ticket.status}
                        </span>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

            ))

          ) : (

            <div className="text-center text-white mt-5">

              <h3>No Tickets Found</h3>

              <p>
                Raise your first support ticket 🚀
              </p>

            </div>

          )}

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
    background: "#fff"
  },

  icon: {
    width: "65px",
    height: "65px",
    borderRadius: "18px",
    background: "linear-gradient(to right, #6366f1, #9333ea)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "28px",
    color: "white"
  }

};

export default Tickets;