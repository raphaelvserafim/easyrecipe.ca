import * as React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';

import SEO from '../SEO';
import SearchInput from '../components/SearchInput';


import CardSkeleton from '../components/CardSkeleton';

function Home() {
    console.log("Page Home")

    SEO({ title: 'Home' });

    //const dataCard = { title: "Is Test", dateTime: "Today", coverImage: "", avatar: "", author: "Raphael Serafim" }

    return (
        <>
            <SearchInput />
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={0} >
                    {[...Array(6)].map((_, index) => (
                        <Grid key={index} xs={12} sm={6} md={4}>
                            <CardSkeleton loading={true} />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </>

    );

}

export default Home;
