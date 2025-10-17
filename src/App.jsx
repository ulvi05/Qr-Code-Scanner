import { Bounce, ToastContainer } from "react-toastify";
import QrScanner from "./components/QrScanner";

const App = () => {
  return (
    <div>
      <QrScanner />
      <ToastContainer
        position="top-center"
        autoClose={3000}
        theme="dark"
        transition={Bounce}
      />
    </div>
  );
};

export default App;
