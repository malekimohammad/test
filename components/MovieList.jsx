import React, { useContext } from 'react'
import { GlobalContext } from './../context/GlobalState'

const MovieList = ({ movie }) => {

    const { addToWatchList } = useContext(GlobalContext)

    return (
        <>
            <li>
                <div className="image-card">
                    <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt="ImageMovie" />
                </div>
                <div className="content-card">
                    <h3 className="title-card">فیلم : {movie.title}</h3>
                    {/* <h4 className="release-date">سال انتشار : {movie.release_date.substring(0, 4)}</h4> */}
                    <button onClick={() => addToWatchList(movie)}>افزودن به لیست</button>
                    <button>افزودن دیده شده ها</button>
                </div>
            </li>
        </>
    )
}

export default MovieList
