import React, { Component } from 'react';

class Navbar extends Component{
    render(){
        console.log('nav hello');

        return(
            <nav className ="navbar">
            <span className="navbar-logo"><i className="fas fa-leaf"></i> 
            </span>
            <span className ="title">Habit Tracker</span>
            <span className="navbar-count">{this.props.totalCount}</span>
            </nav>
        );
    }
}

export default Navbar;
