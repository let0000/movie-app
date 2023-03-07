import React from "react";
import { useLocation, useParams } from "react-router-dom";

const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280/";

export default function MovieDetail() {
  const { title } = useParams();
  const { state } = useLocation();
  console.log(title);
  console.log(state);
  return (
    <div className="page-container">
      <div
        style={{
          display: "flex",
        }}
      >
        <img
          style={{
            width: "300px",
            height: "450px",
          }}
          src={IMG_BASE_URL + state.poster_path}
          alt="영화 포스터 이미지"
        />
        <div
          style={{
            marginLeft: "16px",
          }}
        >
          <div
            style={{
              fontSize: "32px",
              marginBottom: "16px",
            }}
          >
            {title}
          </div>
          <div
            style={{
              color: "red",
              fontSize: "25px",
              marginBottom: "40px",
            }}
          >
            평점 : {state.vote_average}
          </div>
          <div
            style={{
              fontSize: "25px",
              marginBottom: "16px",
            }}
          >
            {state.overview}
          </div>
        </div>
      </div>
    </div>
  );
}
