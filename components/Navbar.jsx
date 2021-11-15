import React from 'react'
import {Link} from 'react-router-dom'

function Navbar({bg}) {
    return (
        <>
            <div className={`navbar ${bg}`} >
                <div className="logo">
                    <h1><Link to="/">فیلم بین</Link></h1>
                </div>
                <nav>
                    <ul>
                        <li><Link to="/" href="">خانه / پلی لیست ها</Link></li>
                        <li><Link to="/watched">دیده شده ها</Link></li>
                        <li><Link to="/add" className="add">اضافه کردن +</Link></li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Navbar
