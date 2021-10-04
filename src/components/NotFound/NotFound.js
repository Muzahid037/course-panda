import React from 'react';
import { Link } from 'react-router-dom';
import e404 from './../../image/404.jpg'
const NotFound = () => {
    return (
        <div className="my-3 d-flex justify-content-around align-items-center">
            <img src={e404} alt="" />
            <Link to='./home'>
                <button className="btn btn-success p-5 fs-2">Wanna go to Homepage?</button>
            </Link>
        </div>
    );
};

export default NotFound;