import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Books from "./pages/Books";
import Tickets from "./pages/Tickets";
import CreateTicket from "./pages/CreateTicket";
import AddBook from "./pages/AddBook";
function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        <Route
          path="/books"
          element={<Books />}
        />

        <Route
          path="/tickets"
          element={<Tickets />}
        />

        <Route
          path="/create-ticket"
          element={<CreateTicket />}
        />
        <Route path="/add-book" element={<AddBook />} />
      </Routes>

    </BrowserRouter>

  );
}

export default App;