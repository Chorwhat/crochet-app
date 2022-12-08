import React, {useState, useEffect} from 'react'
import Stitch from './Stitch'


function Row(props) {

    const {rowInfo} = props

    //I need row information to be passed in here somehow from above
    //then I can have the row get passed in and let the array below just be that
    //that way when it gets passed into the state it should work
    //['sc','sc','inc','sc','sc','sc']
    let testRow = rowInfo

    const [stitches, setNewStitches] = useState(testRow)


    useEffect (() => {
        const newStitches= [...stitches];
        setNewStitches(newStitches);
    }, [])


    const stitchesArray = []

    for (let i = 0; i <= testRow.length -1; i++) {
        stitchesArray.push([i + 1, testRow[i]]);
      }

    console.log(stitchesArray)
    
    
    return (
        <div className='Row'>
            {stitchesArray.map((stitch) => (
                <Stitch stitch={stitch[1]} stitchNumber={stitch[0]}/>
            ))}
    
        </div>
    );
}

export default Row;