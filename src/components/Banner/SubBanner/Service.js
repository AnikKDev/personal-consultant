import React from 'react';
import './SubBanner.css';
import { BiMessageAlt } from 'react-icons/bi';
const Service = ({ service }) => {
    const { name, about } = service;
    return (
        <div class="card lg:w-80 bg-primary p-8 transition-all duration-500 hover:-translate-y-4 text-white rounded-none  shadow-xl ">
            <div class="card-body">
                <h4 className="text-6xl text-secondary"><BiMessageAlt></BiMessageAlt></h4>
                <h2 class="card-title capitalize">{name}</h2>
                <p className="mt-16 text-accent">{about.slice(0, 100)}</p>

            </div>
        </div>
    );
};

export default Service;