import * as React from 'react';

import SEO from '../SEO';
import SearchInput from '../components/SearchInput';


import CardSkeleton from '../components/CardSkeleton';

function Home() {
    console.log("Page Home")
    SEO({ title: 'Home' });
    return (<>
        <SearchInput />
        <CardSkeleton loading={true} />
        <CardSkeleton loading={true} />
    </>

    );

}

export default Home;
