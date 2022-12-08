import React, {useState} from 'react';

function Stitch(props) {

    const {
        //the stitchType is single, double, inc, dec etc
        //the stitchStyle handles css for the object
        //the stitchNumber serves as the key and represents the stitch history
        //i.e the first stitch made is stitchNumber = 1, second is 2, and so on
        stitch: stitchType, stitchNumber
    } = props

    return (
        <div>
            <h1>{stitchNumber} {stitchType}</h1>
           
         {/* <button className='stitch' style={stitchStyle}> {stitchType} </button> */}

        </div>
      
    );
}

export default Stitch;