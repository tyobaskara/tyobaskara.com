import React from 'react';
import ReactDOM from 'react-dom';
import { Helmet } from 'react-helmet';
import { Navigation } from './component/navigation';

import { applyMiddleware, createStore } from 'redux';

//https://www.youtube.com/watch?v=ucd5x3Ka3gw Redux Tutorial

//tutorial basic --
//REDUCER
//--//
const reducer = (initialState=0, action) => {
    if (action.type === "INC") {
        return initialState + 1;
    } else if (action.type === "DEC") {
        return initialState - 1;
    } else if (action.type === "E") {
        throw new Error("AAA!!!")
    }
    return initialState;
};

const logger = (store) => (next) => (action) => {
    console.log("action fired", action);
    next(action);
};

const error = (store) => (next) => (action) => {
    try {
        next(action);
    } catch(e) {
        console.log("AHHHH!!", e);
    }
};

const middleware = applyMiddleware(logger, error);
//STORE 
//Connect to browser dev tool add this > window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = createStore(reducer, 1, middleware, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
//--\\

store.subscribe(() => {
    console.log("store changed", store.getState());
});

store.dispatch({type: "INC"});
store.dispatch({type: "INC"});
store.dispatch({type: "INC"});
store.dispatch({type: "DEC"});
store.dispatch({type: "DEC"});
store.dispatch({type: "DEC"});
store.dispatch({type: "E"});

//--tutorial basic//

class Redux extends React.Component {
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

export default Redux;