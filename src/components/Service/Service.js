import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = (props) => {
    const {id, category,img } = props.service;
    return (
        <div>
             <div className="col border border-1 border-secondary rounded shadow-lg p-3 mb-5">
                    <div className="card h-100">
                        <img src={img} className="card-img-top" alt="..."/>
                        <div className="card-body">
                        <h5 className="card-title">{category}</h5>
                        <p className="card-text">{}</p>
                        <Link className="text-decoration-none" to='/courses'>
                            <button className="btn btn-success text-white">See Courses</button>
                        </Link>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default Service;