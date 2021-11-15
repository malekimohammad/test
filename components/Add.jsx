import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import MovieList from "./MovieList";

const Add = () => {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState([]);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const getApi = async () => {
    const key = "13307e0d511b6890ab3d1c65f926df3a";
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&page=1&include_adult=false&query=${search}`
    );
    const data = await response.json();
    !data.errors ? setResult(data.results) : setResult([]);
  };

  const showResult = result.map((movie) => {
    return <MovieList key={movie.id} movie={movie} />;
  });

  useEffect(() => {
    getApi();
  }, [search]);

  return (
    <>
      <Navbar bg='bg-black' />

      <div className='add-input'>
        <div className='add-container'>
          <input
            type='text'
            placeholder='اسم فیلم مد نظر را وارد نمایید'
            value={search}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className='result-card'>
        <ul className='ul-list'>{showResult}</ul>
      </div>
    </>
  );
};

export default Add;
