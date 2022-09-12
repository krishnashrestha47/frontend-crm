import { ToastContainer } from "react-toastify";
import "./App.css";
import DefaultLayout from "./layout/DefaultLayout";
import DashboardPage from "./pages/dashboard/DashboardPage";
import { EntryPage } from "./pages/entry-page/EntryPage";
import { AddTicketPage } from "./pages/new-ticket/AddTicketPage";
import { TicketListPage } from "./pages/ticket-listing/TicketListPage";
import { TicketPage } from "./pages/ticket/TicketPage";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PrivateRoute } from "./components/private-route/PrivateRoute";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<EntryPage />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <DashboardPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/add-ticket"
          element={
            <PrivateRoute>
              <AddTicketPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/tickets"
          element={
            <PrivateRoute>
              <TicketListPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/ticket:id"
          element={
            <PrivateRoute>
              <TicketPage />
            </PrivateRoute>
          }
        />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
};

export default App;
