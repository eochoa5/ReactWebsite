import React from 'react';
import Projects from './Projects';
import Home from './Home';
import {Switch, Route} from 'react-router-dom';


const Main = () => (
    <main>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/projects" component={Projects} />

        </Switch>
    </main>

)

export default Main;