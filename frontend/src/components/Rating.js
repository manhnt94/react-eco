import React from "react";

export default function Rating(props) {
  const { rating, numReviews } = props;
  return (
    <div className="text-yellow-300">
      <span>
        <i
          className={`fa ${
            rating > 1
              ? "fa-star"
              : rating >= 0.5
              ? "fa-star-half-o"
              : "fa-star-o"
          }`}
          aria-hidden="true"
        ></i>
      </span>
      <span>
        <i
          className={`fa ${
            rating > 2
              ? "fa-star"
              : rating >= 1.5
              ? "fa-star-half-o"
              : "fa-star-o"
          }`}
          aria-hidden="true"
        ></i>
      </span>
      <span>
        <i
          className={`fa ${
            rating > 3
              ? "fa-star"
              : rating >= 2.5
              ? "fa-star-half-o"
              : "fa-star-o"
          }`}
          aria-hidden="true"
        ></i>
      </span>
      <span>
        <i
          className={`fa ${
            rating > 4
              ? "fa-star"
              : rating >= 3.5
              ? "fa-star-half-o"
              : "fa-star-o"
          }`}
          aria-hidden="true"
        ></i>
      </span>
      <span>
        <i
          className={`fa ${
            rating > 5
              ? "fa-star"
              : rating >= 4.5
              ? "fa-star-half-o"
              : "fa-star-o"
          }`}
          aria-hidden="true"
        ></i>
      </span>
      <span className="text-black">{`${numReviews} ${
        numReviews > 1 ? "reviews" : "review"
      }`}</span>
    </div>
  );
}
