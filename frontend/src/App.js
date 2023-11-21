// import "./App.css";
import "./styles/tailwind.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Main from "./pages/Main";
import CreatePaper from "./pages/CreatePaper";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/main" element={<Main />} />
        <Route exact path="/createpaper" element={<CreatePaper />} />
      </Routes>
    </Router>
  );
}

export default App;
