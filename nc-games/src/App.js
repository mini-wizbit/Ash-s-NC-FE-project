import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home/Home";
import { Header } from "./components/Header/Header";
import { Navbar } from "./components/NavBar/Navbar";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/api/reviews" element={<p />} />
      </Routes>
      <p>routes are home, reviews, users</p>
    </div>
  );
}

export default App;
