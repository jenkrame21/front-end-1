import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getClassByUserId } from '../actions/index';

const UserSavedClasses = ({ user_id, saved_classes, getClassByUserId, role }) => {

    useEffect(() => {
        getClassByUserId(user_id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return(
        <div>
            <h1>Saved Classes: </h1>
            <div className="classes-list">
                {saved_classes.map(sClass => {
                    return sClass.name
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

export default connect(mapStateToProps, { getClassByUserId })(UserSavedClasses);