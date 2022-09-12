import { ToastContainer } from "react-toastify";
import "./App.css";
import DefaultLayout from "./layout/DefaultLayout";
import DashboardPage from "./pages/dashboard/DashboardPage";
import { EntryPage } from "./pages/entry-page/EntryPage";
import { AddTicketPage } from "./pages/new-ticket/AddTicketPage";
import { TicketListPage } from "./pages/ticket-listing/TicketListPage";
import { TicketPage } from "./pages/ticket/TicketPage";

import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <DefaultLayout>
        <Routes>
          <Route path="/" element={<EntryPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/add-ticket" element={<AddTicketPage />} />
          <Route path="/tickets" element={<TicketListPage />} />
          <Route path="/ticket:id" element={<TicketPage />} />
        </Routes>
        <ToastContainer />
      </DefaultLayout>
    </BrowserRouter>
  );
};

export default App;
