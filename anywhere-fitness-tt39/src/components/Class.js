import React from 'react';

const Class = ({ item }) => {
    return(
        <div className="class-card">
            <h3>{item.name}</h3>
            <h3>{item.type}</h3>
            <h3>{item.start_time}</h3>
            <h3>{item.duration}</h3>
            <h3>{item.intensity_level}</h3>
            <h3>{item.location}</h3>
            <h3>{item.attendees}</h3>
            <h3>{item.max_size}</h3>
        </div>
    )
};

export default Class;