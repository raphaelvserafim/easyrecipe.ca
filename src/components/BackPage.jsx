import * as React from 'react';
import { useNavigate } from '@reach/router';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Button from '@mui/material/Button';


function BackPage() {

  return (<Button onClick={useNavigate(-1)}><ArrowBackIosIcon /></Button>);

}

export default BackPage;
