import * as React from 'react';
import { useParams } from '@reach/router';


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
