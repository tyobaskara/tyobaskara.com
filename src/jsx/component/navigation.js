import React from 'react';
import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom';

export class Navigation extends React.Component{
    state = {
        NavList: ['Home', 'About', 'Blog', 'News', 'Travel'],
        burgerToggle: 'off'
    }

    componentDidMount() {
        document.getElementsByClassName("nav")[0].setAttribute('class', 'nav');
        document.addEventListener('scroll', this.scroll);
        window.scrollTo(0,0);
    }

    componentWillUnmount() {
        document.removeEventListener('scroll', this.scroll);
    }

    scroll = (event) => {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            document.getElementsByClassName("nav")[0].classList.add("nav--active");
        } else {
            document.getElementsByClassName("nav")[0].classList.remove("nav--active");
        }
    };

    burgerToggle = () => {
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

    offBurgerToggle = () => {
        document.getElementsByTagName('html')[0].classList.remove("ovHidden");
        document.getElementsByClassName('nav')[0].classList.remove("isActive");
        this.setState({burgerToggle: 'off'});   
    }

    render(){
        let NavList = this.state.NavList;
        let that = this;
        NavList = NavList.map( (item,index) => {
            return (
                <li 
                    key={index} 
                    onClick={that.offBurgerToggle}>
                        <NavLink
                            activeClassName= 'active'
                            exact={true}
                            id={item}
                            to={index == 0 ? '/' : '/'+item.toLowerCase() }
                        >{item}</NavLink>
                </li>
            );
        });

        return (
            <nav className="nav nav--fixed">
                <div className="nav__wrapper">
                    <div className="container posRelative">
                        <div className="overlay" onClick={this.burgerToggle}></div>
                        <div className="nav__logo" onClick={this.offBurgerToggle}>
                            <NavLink to="/"><img src="/assets/images/logo.png" alt="tyobaskara"/></NavLink>
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