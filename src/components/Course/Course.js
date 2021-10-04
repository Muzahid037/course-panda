import React from 'react';
import { Link } from 'react-router-dom';
import './Course.css';

const Course = (props) => {
    const {id, title, instructor,img,description,charges } = props.course;
    function getFirstNWordsFromString(str, n) {
        return str.split(/\s+/).slice(0, n).join(" ");
    }
    return (
        <div>
                <div className="col border border-1 border-secondary rounded shadow-lg p-3 mb-5">
                    <div className="card h-100">
                        <img src={img} className="card-img-top" alt="..."/>
                        <div className="card-body">
                        <h4 className="card-title">{title}</h4>
                        <p className="card-text">{getFirstNWordsFromString(description,10)}...</p>
                        <h5>Course Price: {charges}$</h5>
                        <Link className="text-decoration-none" to='/courses'>
                            <button className="btn btn-success text-white">See Details</button>
                        </Link>
                        </div>
                        <div className="card-footer">
                            <p> By <span className="text-danger fw-bold">{instructor.name}</span> </p>
                        </div>
                    </div>
                </div>

        </div>
    );
};

export default Course;