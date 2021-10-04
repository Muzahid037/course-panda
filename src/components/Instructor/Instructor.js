import React from 'react';
import { Link } from 'react-router-dom';

const Instructor = (props) => {
    console.log(props);
    const { instructor } = props.course;
    return (
        <div>
            <div className="col border border-1 border-secondary rounded shadow-lg p-3 mb-5">
                    <div className="card h-100">
                        <img src={instructor.photo} className="card-img-top" alt="..."/>
                        <div className="card-body d-flex justify-content-evenly align-items-center">
                        <h4 className="card-title fst-italic">{instructor.name}</h4>

                        <Link className="text-decoration-none" to='/instructors'>
                            <button className="btn btn-success text-white">Hire Me</button>
                        </Link>
                        </div>
                        
                    </div>
                </div>
        </div>
    );
};

export default Instructor;