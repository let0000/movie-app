import React from "react";
import Movie from "../components/Movie";
import { dummy } from "../movieDummy";

export default function Movies() {
  return (
    <div className="App">
      <div className="movies-container">
        {dummy.results.map((item) => {
          return <Movie props={item} />;
        })}
      </div>
    </div>
  );
}
