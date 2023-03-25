import * as React from 'react';
import { Router } from '@reach/router';

const NotFound = React.lazy(() => import("./pages/404"));
const Home = React.lazy(() => import("./pages/Home"));
const Category = React.lazy(() => import("./pages/Category"));
const Read = React.lazy(() => import("./pages/Read"));


export default function Routes() {

    return (
        <Router>
            <Home path="/" />
            <Category path="/category/:name" />
            <Read path="/read/:id" />
            <NotFound default />
        </Router>
    );
}