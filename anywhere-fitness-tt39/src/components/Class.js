import React from 'react';
import { useHistory } from 'react-router-dom';

const Class = ({ item }) => {
    const history = useHistory();

    // Need ability to select class to add to signed up list

    const handleSelectClass = (e) => {
        history.push('/user_classes')
        
    };

    return(
        <div className="class-card">
            <div className="seperate">
                <h3>Course Name:</h3>
                <p>{item.name}</p>
            </div>

            <hr/>

            <div className="seperate">
                <h3>Type:</h3>
                <p>{item.type}</p>
            </div>
            
            <hr/>

            <div className="seperate">
                <h3>Date:</h3>
                <p>{item.date}</p>
            </div>

            <hr/>

            <div className="seperate">
                <h3>Start Time:</h3>
                <p>{item.start_time}</p>
            </div>

            <hr/>

            <div className="seperate">
                <h3>Duration:</h3>
                <p>{item.duration}</p>
            </div>

            <hr/>

            <div className="seperate">
                <h3>Intensity Level:</h3>
                <p>{item.intensity_level}</p>
            </div>

            <hr/>

            <div className="seperate">
                <h3>Location:</h3>
                <p>{item.location}</p>
            </div>

            <hr/>

            <div className="seperate">
                <h3>Attendees:</h3>
                <p>{item.attendees}</p>
            </div>

            <hr/>

            <div className="seperate">
                <h3>Max Class Size:</h3>
                <p>{item.max_size}</p>
            </div>

            <button onClick={handleSelectClass}>Select Class</button>
        </div>
    )
};

export default Class;