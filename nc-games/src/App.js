import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home/Home";
import { Header } from "./components/Header/Header";
import { Navbar } from "./components/NavBar/Navbar";
import { AllReviews } from "./components/AllReviews/AllReviews";
import { ReviewById } from "./components/ReviewById/ReviewById";
import "./fonts.css";
import { Users } from "./components/Users/Users";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reviews" element={<AllReviews />} />
        <Route path="/reviews/:review_id" element={<ReviewById />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </div>
  );
}

export default App;
