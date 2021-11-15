import React from 'react'

const MyList = ({movie:{poster_path}}) => {
    return (
        <>
            <li>
                <div className="image-card">
                    <img src={`https://image.tmdb.org/t/p/w200${poster_path}`} alt="Image Movie" />
                </div>
                <div className="content-card">
                    <h3 className="title-card">فیلم : {movie.title}</h3>
                    {/* <h4 className="release-date">سال انتشار : {movie.release_date.substring(0, 4)}</h4> */}
                </div>
            </li>
        </>
    )
}

export default MyList
