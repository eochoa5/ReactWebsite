import React, { Component } from 'react';
import '../App.css';
import {Link} from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (

            <div className="header">
                <div className="name">
                    <i className="fa fa-code"> </i> Edwin Ochoa <br/>
                    <span>Android developer &middot; Web Developer &middot; Programmer</span>
                </div>
                <div className="menu">
                    <Link to="/skills">Skills</Link>
                    <Link to="/projects">Projects</Link>
                    <a href="https://github.com/eochoa5" target="_blank">Github</a>
                    <a href="https://www.linkedin.com/in/edwin-ochoa-95a598a7" target="_blank">Linkedin</a>
                </div>
                <br/>
                <hr/>

            </div>

        );
    }
}

export default Navbar;
