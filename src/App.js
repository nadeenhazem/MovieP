import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import Navbar from "./Pages/Layouts/Navbar";
import DetailsPage from "./Pages/DetailsPage/DetailsPage";
import SearchDetails from "./Pages/DetailsPage/components/SearchDetails";
import HomeData from "./Pages/HomePage/components/HomeData";
function App() {
  return (
    <div className="App themed-background h-100">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/details/:title" element={<DetailsPage />} />
        <Route path="/search/:title" element={<SearchDetails />} />
        <Route
          path="/Movies"
          element={
            <HomeData
              url="https://imdb236.p.rapidapi.com/api/imdb/top250-movies"
              title="Movies"
              pagination={true}
            />
          }
        />
        <Route
          path="/TVShows"
          element={
            <HomeData
              url="https://imdb236.p.rapidapi.com/api/imdb/most-popular-tv"
              title="TV Shows"
              pagination={true}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
