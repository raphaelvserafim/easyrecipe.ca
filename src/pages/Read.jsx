import * as React from 'react';
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";


import SEO from '../SEO';


function Read() {
  const { id } = useParams();
  console.log(id)
  SEO({ title: 'Read - Test' });
  return (
    <>
      Hello Word !
    </>

  );

}

export default Read;
