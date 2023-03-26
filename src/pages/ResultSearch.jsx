import * as React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import { useParams } from "react-router-dom";

import SEO from '../SEO';
import SearchInput from '../components/SearchInput';
//import CardSkeleton from '../components/CardSkeleton';

import BackPage from '../components/BackPage';

function ResultSearch() {
  const { name } = useParams();
  SEO({ title: 'Result Search' });
  console.log("name", name)

  return (
    <>
      <BackPage />
      <SearchInput value={name} />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={0} >
          Hello Word !
        </Grid>
      </Box>
    </>

  );

}

export default ResultSearch;
