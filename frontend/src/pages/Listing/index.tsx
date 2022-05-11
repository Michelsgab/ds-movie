import MovieCard from "components/MovieCard";
import Pagination from "components/Pagination";

export default function Listing() {
  return (
    <>
      <Pagination />
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-lg-4 col-xl-4 col-md-4 mb-3">
            <MovieCard />
          </div>
          <div className="col-sm-6 col-xl-4 col-md-4 mb-3">
            <MovieCard />
          </div>
          <div className="col-sm-6 col-xl-4 col-md-4 mb-3">
            <MovieCard />
          </div>
          <div className="col-sm-6 col-xl-4 col-md-4 mb-3">
            <MovieCard />
          </div>
          <div className="col-sm-6 col-xl-4 col-md-4 mb-3">
            <MovieCard />
          </div>
          <div className="col-sm-6 col-xl-4 col-md-4 mb-3">
            <MovieCard />
          </div>
          <div className="col-sm-6 col-xl-4 col-md-4 mb-3">
            <MovieCard />
          </div>
          <div className="col-sm-6 col-xl-4 col-md-4 mb-3">
            <MovieCard />
          </div>
          <div className="col-sm-6 col-xl-4 col-md-4 mb-3">
            <MovieCard />
          </div>
        </div>
      </div>
    </>
  );
}
