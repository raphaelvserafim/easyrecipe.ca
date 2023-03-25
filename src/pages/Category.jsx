import * as React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import { useParams } from '@reach/router';

import SEO from '../SEO';

import CardSkeleton from '../components/CardSkeleton';

function Category() {
    const { name } = useParams();
    console.log(name)
    SEO({ title: 'Category - Test' });
    //const dataCard = { title: "Is Test", dateTime: "Today", coverImage: "", avatar: "", author: "Raphael Serafim" }
    return (
        <>
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

export default Category;
