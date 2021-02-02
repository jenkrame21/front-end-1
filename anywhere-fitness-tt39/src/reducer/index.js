import React from 'react';

const initialState = {
    data: {

    }
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case("START_CALL"):
            return {

            }
        default:
            return state
    };
};

export default reducer;