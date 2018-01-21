import React from 'react';

export default class ButtonToTop extends React.Component {
    constructor(props){
        super(props);
    }
    
    componentDidMount() {
        document.addEventListener('scroll', this.buttonToTopEvent);
        this.topFunction;
    }

    componentWillUnmount() {
        document.removeEventListener('scroll', this.buttonToTopEvent);
    }
    
    topFunction() {
        window.scrollTo(0,0);
    }

    buttonToTopEvent(event) {
        if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
            document.getElementById("btnToTop").style.display = "block";
        } else {
            document.getElementById("btnToTop").style.display = "none";
        }
    };

    render(){
        return (
            <button onClick={this.topFunction} id="btnToTop" title="Go to top">Top</button>
        )
    }
}