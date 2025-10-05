import React, { useEffect, useState } from "react";
import axios from "axios";
import "../style.css";
import CardDetails from "../../DetailsPage/components/CardDetails";
import Pagination from "../../DetailsPage/components/Pagination";
import PropTypes from "prop-types";

const HomeData = ({ url, title, pagination }) => {
  const [Data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = Data.slice(startIndex, endIndex);

  const totalPages = Math.ceil(Data?.length / itemsPerPage);

  const getData = async () => {
    try {
      const response = await axios.get(url, {
        headers: {
          "x-rapidapi-key":
            "6a6ef7f21bmsh1e6bd8c5913f1aap144ec8jsnfe6cd7f94c99",
          "x-rapidapi-host": "imdb236.p.rapidapi.com",
        },
      });
      setData(response.data);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    getData();
  }, [url]);

  return (
    <div className="row container my-3  mx-auto">
      <div className="col-md-12 col-sm-12 mb-4 fs-4 text-light d-flex justify-content-center">
        <h2>{title}</h2>
      </div>
      {currentItems.map((movie) => (
        <CardDetails data={movie} />
      ))}
      <div className="col-md-12 col-sm-12 mb-4 fs-4 text-light d-flex justify-content-center">
        {pagination && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        )}
      </div>
    </div>
  );
};
HomeData.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  pagination: PropTypes.bool,
};
export default HomeData;
