import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home/Home";
import { Header } from "./components/Header/Header";
import { Navbar } from "./components/NavBar/Navbar";
import { AllReviews } from "./components/AllReviews/AllReviews";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reviews" element={<AllReviews />} />
      </Routes>
      <p>routes are home, reviews, users</p>
    </div>
  );
}

export default App;
