import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getClassByUserId, deleteUserClass } from '../actions/index';

const UserSavedClasses = ({ user_id, saved_classes, getClassByUserId, role, deleteUserClass }) => {

    useEffect(() => {
        getClassByUserId(user_id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    

    return(
        <div>
            <h1>Saved Classes: </h1>
            <div className="classes-list">
                {saved_classes.map(sClass => {
                    const idObject = {
                        user_id: Number(sClass.user_id),
                        class_id: Number(sClass.class_id)
                    }
                    const handleDeleteClick = e => {
                        deleteUserClass(idObject)
                    }
                    return (
                        <div key={sClass.class_id}>
                            <p>{sClass.name}</p>
                            <button onClick={handleDeleteClick} className="delete-button">Delete Class</button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
};

const mapStateToProps = (state) => {
    return{
        user_id: state.user.user.id,
        saved_classes: state.classes.saved_classes,
        role: state.user.user.role
    }
};

export default connect(mapStateToProps, { getClassByUserId, deleteUserClass })(UserSavedClasses);