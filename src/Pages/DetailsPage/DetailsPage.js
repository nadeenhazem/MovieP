import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./DetailsStyle.css";
const DetailsPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <div className="container movie-details my-5 ">
      <button className="btn-back mb-5" onClick={goBack}>
        &larr;
      </button>

      <div className="row">
        <div className="col-md-4">
          <div className="poster-wrapper shadow-lg">
            <img
              src={state?.primaryImage}
              alt={state?.originalTitle}
              className="img-fluid rounded-4"
            />
          </div>
        </div>

        <div className="col-md-8">
          <h2 className="movie-title mb-3">{state?.originalTitle}</h2>
          <p className="movie-meta">
            <span>⭐ {state?.averageRating || "N/A"}</span> |
            <span>{state?.releaseDate || "Unknown Year"}</span> |{" "}
            <span className="d-block">
              Genre:{state?.genres || "Genre not available"}
            </span>
            <span className="d-block">
              Type:{state?.type || "Type not available"}
            </span>
            <span className="d-block">
              Description:
              {state?.description || "Description not available"}
            </span>
          </p>

          <div className="extra-details mt-4">
            <p>
              <strong>Trailer:</strong>{" "}
              {state?.trailer ? (
                <a href={state?.trailer} target="_blank">
                  Watch on YouTube
                </a>
              ) : (
                "Unknown"
              )}{" "}
            </p>
            <p>
              <strong>Language:</strong> {state?.data?.spokenLanguages || "N/A"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DetailsPage;
