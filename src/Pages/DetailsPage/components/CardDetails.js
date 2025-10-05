import { useNavigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

const CardDetails = ({ data }) => {
  const navigate = useNavigate();

  const openDetailsPage = (movie) => {
    navigate(`/details/${movie?.primaryTitle}`, {
      state: movie,
    });
  };
  return (
    <div className="col-md-4 col-sm-12 mb-4" key={data?.id}>
      <div
        className="card movie-card h-100 shadow-sm"
        onClick={() => openDetailsPage(data)}
      >
        <img
          className="card-img-top h-100 shadow-sm"
          src={data?.primaryImage}
          alt={data?.primaryTitle}
        />
        <div className="card-overlay">
          <h5 className="card-title">{data?.primaryTitle}</h5>
          <p className="card-text">
            <small className="text-light">
              Year: {data?.startYear || "N/A"}
            </small>
            <br />
            <small className="text-light">
              Genres: {data?.genres?.join(" / ") || "Unknown"}
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};
CardDetails.propTypes = {
  data: PropTypes.object,
};

export default CardDetails;
