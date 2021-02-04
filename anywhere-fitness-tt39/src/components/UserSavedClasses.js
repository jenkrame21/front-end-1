import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getClassById } from '../actions/index';

const UserSavedClasses = () => {

    useEffect(() => {
        getClassById()
    }, []);

    return(
        <div>
            <h1>Saved Classes: </h1>
            <div className="classes-list">
                {/* Would like to map through list and select id of what user chooses to show up here */}
            </div>
        </div>
    )
};

export default connect(null, { getClassById })(UserSavedClasses);