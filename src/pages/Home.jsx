import * as React from 'react';



import SEO from '../SEO';

import SearchInput from '../components/SearchInput';

function Home() {
    console.log("Page Home")
    SEO({ title: 'Home' });
    return (<>

        <SearchInput />
    </>

    );

}

export default Home;
