import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    const activeStyle = {
        fontWeight: "bold",
        padding: 5,
        borderStyle: "solid",
        borderColor: "goldenrod",
        borderRadius:5
    };
    return (
        <div className="my-2">

            <nav className="bg-primary text-white p-3  fs-4">
                {/* <!-- Navbar content --> */}
                <NavLink activeStyle={activeStyle} className="mx-4 text-decoration-none text-white" to='/home'>Home</NavLink>
                <NavLink activeStyle={activeStyle} className="mx-4 text-decoration-none text-white" to='/courses'>Courses</NavLink>
                <NavLink activeStyle={activeStyle} className="mx-4 text-decoration-none text-white" to='/instructors'>Instructors</NavLink>
                <NavLink activeStyle={activeStyle} className="mx-4 text-decoration-none text-white" to='/about'>About</NavLink>
            </nav>

            <div className="top-banner">
                <h1 className="text-white fst-italic">Welcome to <span className="text-warning">CoursePanda</span></h1>
            </div>
        </div>
    );
};

export default Header;