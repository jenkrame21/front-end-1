import React, { useEffect } from 'react';
import { getClasses } from '../actions/index';
import { connect } from 'react-redux';
import Class from './Class';

const ClassesList = (props) => {
    const { getClasses } = props;
    
    useEffect(() => {
        getClasses();
    }, [getClasses]);

    if(props.error) {
        return <h2>{props.error}</h2>
    }

    if(props.isLoading) {
        return <h2>Loading Classes...</h2>
    };

    return(
        <div>
            <h1>Classes Available:</h1>
            <div className="classes-list">
                {props.classes.map(item => {
                    return <Class item={item} key={item.class_id}/>
                })}
            </div>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        classes: state.classes.classes,
        isLoading: state.classes.isLoading,
        error: state.classes.loadingError
    }
};

export default connect(mapStateToProps, { getClasses })(ClassesList);