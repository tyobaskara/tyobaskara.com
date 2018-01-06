import React from 'react';
import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom';

export class Navigation extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            NavList: ['Home', 'About', 'Blog'],
            burgerToggle: 'off'
        }
    }

    burgerToggle = (e) => {
        if(this.state.burgerToggle === 'off') {
            document.getElementsByTagName('html')[0].classList.add("ovHidden");
            document.getElementsByClassName('nav')[0].classList.add("isActive");
            this.setState({burgerToggle: 'on'});
        }
        else {
            document.getElementsByTagName('html')[0].classList.remove("ovHidden");
            document.getElementsByClassName('nav')[0].classList.remove("isActive");
            this.setState({burgerToggle: 'off'});
        }
    }

    componentDidMount() {
        document.getElementsByTagName('html')[0].classList.remove("ovHidden");
        if(this.props.active) {
            document.getElementById(this.props.active).setAttribute('class', 'active');
        }
    }

    render(){
        let NavList = this.state.NavList;
        NavList = NavList.map( (item,index) => {
            return (
                <li key={index}>
                    <NavLink
                        to={index == 0 ? '/' : '/'+item }
                        id={item}
                        activeClassName= ''
                    >{item}</NavLink>
                </li>
            );
        });

        return (
            <nav className="nav nav--fixed">
                <div className="nav__wrapper">
                    <div className="container posRelative">
                        <div className="overlay" onClick={this.burgerToggle}></div>
                        <div className="nav__logo">
                            <NavLink href="/"><img src="/assets/images/logo.png" alt="tyobaskara"/></NavLink>
                        </div>
                        <ul className="nav__menu">
                            {NavList}
                        </ul>
                        <div className="hamburgerSlim" onClick={this.burgerToggle}>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }

};