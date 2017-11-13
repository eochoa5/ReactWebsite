import React from 'react';
import Projects from './Projects';
import Skills from './Skills';
import Home from './Home';
import {Switch, Route} from 'react-router-dom';


const Main = () => (
    <main>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/skills" component={Skills} />

        </Switch>
    </main>

)

export default Main;