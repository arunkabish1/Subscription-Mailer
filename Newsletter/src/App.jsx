import { Routes,Route,  BrowserRouter as Router } from "react-router-dom";
import Form from "./components/form";
import Thanks from "./components/thanks";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/thanks" element={<Thanks />} />
      </Routes>
    </Router>
  );
};

export default App;
