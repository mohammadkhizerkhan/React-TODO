import React from 'react'

function Header() {
    return (
        <div className='header'>
            <nav className='navbar'>
                <ul className='nav-title'>
                    <li className="title-name">Date and Time</li>
                    <li className="title-tasks">3 tasks incomplete</li>
                </ul>
                <ul className="nav-tasks">
                    <li>Incomplete Tasks</li>
                    <li>Completed Tasks</li>
                </ul>
            </nav>
        </div>
    )
}

export default Header
