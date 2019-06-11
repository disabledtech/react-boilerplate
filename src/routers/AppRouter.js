import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import DashboardPage from '../components/DashboardPage';
import NotFound from "../components/NotFound";
import Login from '../components/Login';
import PrivateRoute from './PrivateRoute';
import PublicRoute from "./PublicRoute";

export const history = createHistory()

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <PublicRoute path="/" component={Login} exact={true} />
                <PrivateRoute path="/dashboard" component={DashboardPage} />
                <Route component={NotFound} />
            </Switch>    
        </div>         
    </Router>
)

export default AppRouter;