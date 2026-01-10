import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Todo from "./Todo.jsx";
import About from "./About.jsx";
import LandingPage from "./LandingPage.jsx";

function App() {
  return(
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/todos" element={<Todo />} />
              <Route path="/about" element={<About />} />
          </Routes>
      </BrowserRouter>
  );
}

export default App
