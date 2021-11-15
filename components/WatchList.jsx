import { useContext } from 'react'
import Banner from './Banner'
import MyList from './MyList'
import { GlobalContext } from '../context/GlobalState'

const WatchList = () => {

    const { watchList } = useContext(GlobalContext)

    const showList = watchList.map(movie => {
        return <MyList key={movie.id} movie={movie} />
    })

    return (
        <>
            <Banner />
            <div className="result-card">
                <ul className="ul-list">
                    {showList}
                </ul>
            </div>
        </>
    )
}

export default WatchList;
