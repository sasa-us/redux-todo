import types from '../actions/types';

const DEFAULT_STATE = {
    all: []
};

export default (state=DEFAULT_STATE, action) => {
    switch(action.type) {
        case types.GET_LIST_DATA:
            console.log('GET_LIST_DATA',action);
            // return state;  
            //after get data from Promise, return new obj with new item in payload
            return {...state, 
                    all: action.payload.data.todos}; //set all property in state
                    //new array data in Promise
        default: 
            return state;
    }
}
