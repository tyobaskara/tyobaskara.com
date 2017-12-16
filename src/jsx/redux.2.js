import React from 'react';
import ReactDOM from 'react-dom';
import { Helmet } from 'react-helmet';
import { Navigation } from './component/navigation';

import { combineReducers, createStore } from 'redux';

//https://www.youtube.com/watch?v=ucd5x3Ka3gw Redux Tutorial

//tutorial basic --
//REDUCER
//--//
const userReducer = (state={}, action) => {
    switch(action.type) {
        case "CHANGE_NAME": {
            state.name = action.payload;
            break;
        }
        case "CHANGE_AGE": {
            state.age = action.payload;
            break;
        }
    }
    return state;
};
//--\\

//--//
const tweetsReducer = (state=[], action) => {
    return state;
};
//--\\

//--//
const reducers = combineReducers({
    user: userReducer,
    tweets: tweetsReducer
})
//STORE 
//Connect to browser dev tool add this > window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store2 = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
//--\\

store2.subscribe(() => {
    //console.log("store changed", store.getState());
});

store2.dispatch({type: "CHANGE_NAME", payload: "Tyo"});
store2.dispatch({type: "CHANGE_AGE", payload: 17});
store2.dispatch({type: "CHANGE_AGE", payload: 27});

//console.log(store.getState());
//--tutorial basic//

class Redux2 extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Helmet>
                    <meta name="description" content="Prasetya Aji Baskara who accidently in love with front end technology and decided to explore more with it" />
                    <title>Redux - Prasetya Aji Baskara</title>
                </Helmet>

                <Navigation active="Redux"/>
                

            </div>
        )
    }
};

export default Redux2;