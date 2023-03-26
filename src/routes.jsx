import * as React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const NotFound = React.lazy(() => import("./pages/404"));
const Home = React.lazy(() => import("./pages/Home"));
const Category = React.lazy(() => import("./pages/Category"));
const Read = React.lazy(() => import("./pages/Read"));
const ResultSearch = React.lazy(() => import("./pages/ResultSearch"));

const Register = React.lazy(() => import("./pages/Register"));


export default function AppRoutes() {

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/category/:name" element={<Category />} />
        <Route path="/read/:id" element={<Read />} />
        <Route path="/search/:name" element={<ResultSearch />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>

    // <Router>
    //   <Home path="/" />
    //   <Category path="/category/:name" />
    //   <Read path="/read/:id" />
    //   <ResultSearch path="/search/:name" />
    //   <Register path="/register" />
    //   <NotFound default />
    // </Router>
  );
}