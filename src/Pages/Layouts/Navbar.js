import { Link } from "react-router-dom";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./style.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();
  const handleClick = async () => {
    if (!searchTerm) return;

    try {
      const response = await axios.get(
        "https://imdb236.p.rapidapi.com/api/imdb/autocomplete",
        {
          params: { query: searchTerm },
          headers: {
            "x-rapidapi-key":
              "6a6ef7f21bmsh1e6bd8c5913f1aap144ec8jsnfe6cd7f94c99",
            "x-rapidapi-host": "imdb236.p.rapidapi.com",
          },
        }
      );

      if (response.data) {
        setMovies(response.data);

        navigate(`/search/${searchTerm}`, {
          state: response.data,
        });
      } else {
        setMovies([]);
      }
    } catch (error) {
      console.error("Error fetching movies:", error);
      setMovies([]);
    }
  };
  return (
    <nav className="navbar navbar-expand-lg  text-light">
      <Link className="navbar-brand  text-light" to="/">
        MovieP
      </Link>
      <button
        className="navbar-toggler  text-light"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div
        className="collapse navbar-collapse  d-flex justify-content-between align-items-center"
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav ">
          <li className="nav-item active">
            <Link className="nav-link text-light" to="/">
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link text-light" to="/Movies">
              Movies
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-light" to="/TVShows">
              TV Shows
            </Link>
          </li>
        </ul>

        <div className="search-container align-items-end mt-2">
          <FaSearch onClick={handleClick} className="search-icon" />
          <input
            type="text"
            placeholder="Search…"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleClick()}
            className="search-input"
          />
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
