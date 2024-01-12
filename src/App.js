import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Test } from "./pages/Test";
import { Home } from "./pages/Home";
import { About } from "./pages/About";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/test">Test</Link>
            </li>
          </ul>
        </nav>

        {/* Define Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/test" element={<Test></Test>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
