import React from 'react';
import './About.css'
import aboutImg from './../../image/about-us.jpg'

const About = () => {
    return (
        <div className="d-flex justify-content-around align-items-center">
            <img src={aboutImg} alt="" />
            <h4 className="fst-italic border border-2 border-success rounder p-3">Course-Panda is an Meherpurian tiny open online course provider founded in 2021 by computer science under-graduate student <span className="text-danger"> Md. Muzahidul Islam</span> . Course-Panda will work with universities and other organizations to offer online courses, certifications, and degrees in a variety of subjects.</h4>
        </div>
    );
};

export default About;