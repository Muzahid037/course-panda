import Course from '../Course/Course';
import { useEffect, useState } from 'react';

const Courses = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('./fakeData.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div className="mt-5">
            <h2 className="mb-5 border border-5 border-success d-inline p-4  rounded-pill fst-italic">Our Popular Courses</h2>
            <div className="row row-cols-1 row-cols-md-3 g-4 mt-4">
                {
                    courses.map(course => 
                    <Course 
                    key={course.id} 
                    course={course}
                     />
                     )
                }
            </div>
        </div>
    );
};

export default Courses;