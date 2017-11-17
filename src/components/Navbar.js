import React, { Component } from 'react';
import '../App.css';
import {Link} from 'react-router-dom';
import $ from 'jquery';

const closeNav = () => {
    document.getElementsByClassName('sidenav')[0].style.width = "0px";

}

const openNav = () => {
    let s = document.getElementsByClassName('sidenav')[0];
    let w = s.clientWidth;

    w == 0 ? s.style.width = "250px" : closeNav();

}

class Navbar extends Component {

    render() {
        return (

            <div className="header">
                <div className="name">
                    <i className="fa fa-code"> </i> Edwin Ochoa
                    <span>Android developer &middot; Web Developer &middot; Programmer</span>
                </div>
                <div className="menu">
                    <Link to="/">Skills</Link>
                    <Link to="/projects">Projects</Link>
                    <a href="https://github.com/eochoa5" target="_blank">Github</a>
                    <a href="https://www.linkedin.com/in/edwin-ochoa-95a598a7" target="_blank">Linkedin</a>
                </div>

                <i className="fa fa-bars drawer" onClick={openNav}> </i>

                <div className="sidenav">
                    <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>
                    <Link to="/" onClick={closeNav}>Skills</Link>
                    <Link to="/projects" onClick={closeNav}>Projects</Link>
                    <a href="https://github.com/eochoa5" target="_blank" onClick={closeNav}>Github</a>
                    <a href="https://www.linkedin.com/in/edwin-ochoa-95a598a7" target="_blank" onClick={closeNav}>Linkedin</a>

                </div>

            </div>

        );
    }
}

export default Navbar;
