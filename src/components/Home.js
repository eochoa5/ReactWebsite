import React, {Component} from 'react';
import '../App.css';
import $ from 'jquery';
import 'animate.css';
import request from 'superagent';

const getRepoCount = ()=>{
    request
        .get('https://api.github.com/users/eochoa5')
        .set('Content-Type', 'application/json')
        .end(function(err, res){
            $('.repos'). html(res.body.public_repos);
            $('code').show();
        });
}

class Home extends Component {

    componentWillMount(){

        getRepoCount();

        let animateHTML = function () {
            let elems,
                windowHeight;

            let init = function () {
                elems = document.getElementsByClassName('fancy');
                windowHeight = window.innerHeight;
                _addEventHandlers();
            };

            let _addEventHandlers = function () {
                window.addEventListener('scroll', _checkPosition);
                window.addEventListener('resize', init);
            };

            let _checkPosition = function () {
                for (let i = 0; i < elems.length; i++) {
                    let posFromTop = elems[i].getBoundingClientRect().top;
                    if (posFromTop - windowHeight <= 0) {
                        elems[i].classList.add('animated');
                        elems[i].classList.add('swing');
                    }else{
                        elems[i].classList.remove('animated');
                        elems[i].classList.remove('swing');
                    }
                }
            };

            return {
                init: init
            }
        };

        animateHTML().init()

    }


    render() {
        return(
            <div className="home">
                <code><i className="fa fa-github animated slideInLeft"> <span className='repos'> </span> repositories</i>

                </code>

                <br/><br/>

                <div className="rect animated slideInUp">
                    <i className="fa fa-android fa-5x img-circle"> </i>

                    <h2 className="fancy">Full-Stack Android development</h2>
                    <span className="label label-default fancy">Java</span>

                </div>

                <div className="rect animated slideInUp">
                    <i className="fa fa-stack-overflow fa-5x img-circle"> </i>

                    <h2 className="fancy">Multi-Stack Web development</h2>

                    <span className="label label-default fancy">PHP</span>
                    <span className="label label-default fancy">NodeJS</span>
                    <span className="label label-default fancy">React</span>
                    <span className="label label-default fancy">AngularJS</span>


                </div>

                <div className="rect animated slideInUp">
                    <i className="fa fa-database fa-5x img-circle"> </i>

                    <h2 className="fancy">Databases</h2>

                    <span className="label label-default fancy">MySQL</span>
                    <span className="label label-default fancy">Firebase</span>
                    <span className="label label-default fancy">MongoDB</span>
                    <span className="label label-default fancy">DynamoDB</span>

                </div>

                <div className="rect animated slideInUp">
                    <i className="fa fa-code fa-5x img-circle pi"> </i>

                    <h2 className="fancy">Python</h2>

                    <span className="label label-default fancy">Machine Learning</span>
                    <span className="label label-default fancy">Django</span>

                </div>

                <div className="rect animated slideInUp">
                    <i className="fa fa-clock-o fa-5x img-circle"> </i>

                    <h2 className="fancy">Real-time Applications</h2>
                    <span className="label label-default fancy">Socket.io</span>
                    <span className="label label-default fancy">WebRTC</span>
                    <span className="label label-default fancy">WebSockets</span>
                    <span className="label label-default fancy">Google Maps</span>

                </div>

                <div className="rect animated slideInUp">
                    <i className="fa fa-code fa-5x img-circle cpp"> </i>

                    <h2 className="fancy">C/C++</h2>

                </div>

                <div className="rect animated slideInUp">
                    <i className="fa fa-html5 fa-5x img-circle"> </i>

                    <h2 className="fancy">Hybrid App Development (Ionic 3)</h2>

                </div>

                <div className="rect animated slideInUp">
                    <i className="fa fa-desktop fa-5x img-circle"> </i>

                    <h2 className="fancy">Desktop App development</h2>

                </div>

                <div className="rect animated slideInUp">
                    <i className="fa fa-code fa-5x img-circle js"> </i>

                    <h2 className="fancy">JS, ES6, TypeScript</h2>

                </div>

            </div>
        );
    }
}

export default Home;