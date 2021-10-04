import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
const Home = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('./fakeDataForCategory.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className="my-5">
          <h3 className="mb-5 border border-5 border-success d-inline p-4  rounded-pill fst-italic">Services We Provide</h3>
            <div className="row row-cols-1 row-cols-md-2 g-5 mt-4">
            {
                services.map(service => <Service key={service.id} service={service} />)
            }
            </div>
        </div>
    );
};

export default Home;