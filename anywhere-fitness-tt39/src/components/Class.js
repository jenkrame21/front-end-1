import React from 'react';
import { connect } from 'react-redux';
import { addUserToClass } from '../actions'

const Class = ({ item, addUserToClass, id }) => {

    // console.log('this is the item: ', item)
    const idObject = {
        user_id: id,
        class_id: item.class_id
    }
    const handleSave = (e) => {
        e.preventDefault();
        console.log(idObject)
        addUserToClass(idObject)
    }
    return(
        <div className="class-card">
            <div className="seperate">
                <h3>Course Name:</h3>
                <p>{item.name}</p>
            </div>

            <hr/>
            <div className="seperate">
                <h3>Instructor Name:</h3>
                <p>{item.instructor_username}</p>
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

            <button onClick={handleSave}>Save Class</button>
        </div>
    )
};

const mapStateToProps = state => {
    return {
        id: state.user.user.id
    }
}

export default connect(mapStateToProps, { addUserToClass }) (Class);