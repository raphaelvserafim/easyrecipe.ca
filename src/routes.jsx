import * as React from 'react';
import { Router  } from '@reach/router';
 
const NotFound = React.lazy(() => import("./pages/404"));
const Home = React.lazy(() => import("./pages/Home"));



export default function Routes() {
    
    return (
        <Router>
            <Home path="/" />
            <NotFound default />
        </Router>
    );
}