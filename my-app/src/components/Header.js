import React from 'react'
import { Link } from "react-router-dom";
function Header() {
    return (
        <div className='header'>
            <nav className='navbar'>
                <ul className='nav-title'>
                    <li className="title-name">Date and Time</li>
                    <li className="title-tasks">3 tasks incomplete</li>
                </ul>
                <ul className="nav-tasks">
                <Link to="/Incomplete" className='link'>Incomplete Tasks</Link>
                <Link to="/Complete" className='link'>Completed Tasks</Link>
                </ul>
            </nav>
        </div>
    )
}

export default Header
