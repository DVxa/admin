import React, {Component} from 'react';
import {Route, Switch} from 'react-router';
import {BrowserRouter} from 'react-router-dom';
import BodyWrapper from './containers/BodyWrapper';

export default class AppRouter extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route component={BodyWrapper} path="/">
                    </Route>
                </Switch>
            </BrowserRouter>
        );
    }
}
