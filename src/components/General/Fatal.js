import React from 'react';
import { SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS } from 'constants';

const Fatal = (props) => (
    <h2 className='center rojo'>
        {props.mensaje}
    </h2>
);

export default Fatal;