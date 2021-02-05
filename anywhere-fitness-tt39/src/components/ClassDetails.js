import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { addUserToClass } from '../actions'
import { useParams, useHistory } from 'react-router-dom';
import axiosWithAuth from '../utils/axiosWithAuth';
import { deleteClass, getUsersByClassById } from '../actions';

const Class = ({ addUserToClass, userId, role, deleteClass, getUsersByClassById, classAttendees }) => {
    // Pulling classid from URL
    const { classid } = useParams();
    const [item, setItem] = useState({})
    const { push } = useHistory()
    
    //retrieves individual class info
    useEffect(() =>{
        axiosWithAuth()
            .get(`/classes/${classid}`)
            .then(res => {
                setItem(res.data);
                console.log('in ue: ', res);
            })
            .catch(err => console.log('error getting class info: ', err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    useEffect(()=> {
        if (role === 'instructor') {
            getUsersByClassById(classid)
        }
    },[])

    const idObject = {
        user_id: userId,
        class_id: item.class_id
    }
    const handleSave = (e) => {
        e.preventDefault();
        console.log(idObject)
        addUserToClass(idObject)
        push('/user');
    }

    const handleDeleteClick = e => {
        deleteClass(classid);
        push('/instructor')
    }
    const handleUpdateClick = e =>{
        push(`/instructor/update/${classid}`)
    }

    if (item === {}) {
        return <h1>Loading...</h1>
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
                <h3>Who's Attending:</h3>
                {classAttendees.map(user => {
                    return(
                        <p key={user.user_id}>{user.first_name} {user.last_name}, </p>
                    )
                })}
            </div>

            <hr/>

            <div className="seperate">
                <h3>Max Class Size:</h3>
                <p>{item.max_size}</p>
            </div>

            <div className="buttons">
                {
                    (role === 'client') &&
                    <button onClick={handleSave} className='save-button'>Save Class</button>
                }
                {
                    (role === 'instructor') &&
                    <button onClick={handleUpdateClick} className='update-button'>Update Class</button>
                }
                {   (role === 'instructor') &&
                    <button  onClick={handleDeleteClick} className="delete-button">Delete Class</button>
                }
            </div>
        </div>
    )
};

const mapStateToProps = state => {
    return {
        userId: state.user.user.id,
        allClasses: state.classes.classes,
        role: state.user.user.role,
        classAttendees: state.classes.class_attendees
    }
}

export default connect(mapStateToProps, { addUserToClass, deleteClass, getUsersByClassById }) (Class);