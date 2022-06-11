import { Heading } from '@chakra-ui/react';
import React from 'react';

const Title = (props) => {

    return (

        <Heading display={'flex'} justifyContent={'center'} fontFamily={'sans-serif'}>{props.name} STREAM</Heading>
    );


}

export default Title