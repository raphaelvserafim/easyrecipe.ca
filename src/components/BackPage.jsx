import * as React from 'react';
import { useNavigate } from '@reach/router';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Button from '@mui/material/Button';

function BackPage() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  };

  return (
    <Button onClick={handleClick}>
      <ArrowBackIosIcon />
    </Button>
  );
}

export default BackPage;
