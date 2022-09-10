import { ToastContainer } from "react-toastify";
import "./App.css";
import DefaultLayout from "./layout/DefaultLayout";
import DashboardPage from "./pages/dashboard/DashboardPage";
import { EntryPage } from "./pages/entry-page/EntryPage";
import { AddTicketPage } from "./pages/new-ticket/AddTicketPage";

const App = () => {
  return (
    <div>
      <DefaultLayout>
        {/* <DashboardPage /> */}
        <AddTicketPage />
        {/* <EntryPage /> */}
        <ToastContainer />
      </DefaultLayout>
    </div>
  );
};

export default App;
