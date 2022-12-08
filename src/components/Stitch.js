import React, {useState} from 'react';

function Stitch(props) {

    const {
        stitch: {stitchType, stitchStyle}
    } = props

    return (
       <button
       className='stitch'
       style={stitchStyle}>
        {stitchType}
       </button>
    );
}

export default Stitch;