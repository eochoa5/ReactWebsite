import React, {Component} from 'react';
import '../App.css';
import 'animate.css';

class Projects extends Component {

    componentWillMount(){
        let animateHTML = function () {
            let elems,
                windowHeight;

            let init = function () {
                elems = document.getElementsByClassName('project');
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
        return (

            <div className="projects">
                <br/><br/>

                <div className="project android">
                    <span>PhoneFindr Android App</span>

                    <i className="fa fa-android fa-5x img-circle"> </i>

                </div>

                <div className="project android">
                    <span>PhotoArchive Android App</span>

                    <i className="fa fa-android fa-5x img-circle"> </i>

                </div>
                <div className="project android">
                    <span>YouTube Remote Android App</span>
                    <i className="fa fa-android fa-5x img-circle"> </i>

                </div>

                <div className="project pi">
                    <span>Machine Learning: Cuisine Prediction </span>
                    <i className="fa fa-table fa-5x img-circle"> </i>

                </div>
                <div className="project pi">
                    <span>Machine Learning: NY Times Article Popularity Prediction</span>
                    <i className="fa fa-table fa-5x img-circle"> </i>

                </div>
                <div className="project webdev">
                    <span>WebRTCVideoChat Web App</span>
                    <i className="fa fa-stack-overflow fa-5x nobg"> </i>

                </div>
                <div className="project hybrid">
                    <span>TrendingTech Ionic 3 Hybrid App</span>
                    <i className="fa fa-html5 fa-5x"> </i>

                </div>
                <div className="project hybrid">
                    <span>Music Controller Messenger Bot</span>
                    <i className="fa fa-html5 fa-5x"> </i>

                </div>
                <div className="project webdev">
                    <span>SmartShippingService LAMP Stack Website</span>
                    <i className="fa fa-stack-overflow fa-5x nobg"> </i>

                </div>
                <div className="project webdev">
                    <span>PHP YouTube Music Downloader</span>
                    <i className="fa fa-stack-overflow fa-5x nobg"> </i>

                </div>
                <div className="project android">
                    <span>Google FooBar Coding Challenge</span>
                    <i className="fa fa-code fa-5x"> </i>

                </div>

                <div className="project webdev">
                    <span>React Blog Website</span>
                    <i className="fa fa-stack-overflow fa-5x nobg"> </i>

                </div>
                <div className="project android">
                    <span>ideaTree Android Challenge</span>
                    <i className="fa fa-android fa-5x img-circle"> </i>

                </div>
                <div className="project android">
                    <span>Android Chat App</span>
                    <i className="fa fa-android fa-5x img-circle"> </i>

                </div>
                <div className="project">
                    <span>Dragon Ball Z Python Game</span>
                    <i className="fa fa-code fa-5x"> </i>

                </div>

            </div>
        );
    }
}

export default Projects;