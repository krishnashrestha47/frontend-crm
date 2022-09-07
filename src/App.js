import { ToastContainer } from "react-toastify";
import "./App.css";
import { EntryPage } from "./pages/entry-page/EntryPage";

const App = () => {
  return (
    <div>
      <EntryPage />
      <ToastContainer />
    </div>
  );
};

export default App;
