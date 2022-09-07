import { ToastContainer } from "react-toastify";
import "./App.css";
import DefaultLayout from "./layout/DefaultLayout";
import { EntryPage } from "./pages/entry-page/EntryPage";

const App = () => {
  return (
    <div>
      <DefaultLayout>
        <EntryPage />
        <ToastContainer />
      </DefaultLayout>
    </div>
  );
};

export default App;
