import React, { useEffect } from 'react';
import { getClasses } from '../actions/index';
import { connect } from 'react-redux';
import Class from './Class';

const ClassesList = (props) => {
    
    useEffect(() => {
        getClasses();
    }, []);

    if(props.error) {
        return <h2>{props.error}</h2>
    }

    if(props.isLoading) {
        return <h2>Loading Classes...</h2>
    };

    return(
        <div className="classesList">
            {props.classes.map(item => {
                return <Class item={item} key={item.id}/>
            })}
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        classes: state.classes,
        isLoading: state.isLoading,
        error: state.loadingError
    }
};

export default connect(mapStateToProps, { getClasses })(ClassesList);