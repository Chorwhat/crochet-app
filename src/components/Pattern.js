import { useState } from 'react';
import Row from './Row';

//sc*6, inc*6, sc*6
const initialPattern = [
    [
        { id: 0, stitchType: 'Single Crochet (in first)', rowCount: 0, value:1, complete: false },
        { id: 1, stitchType: 'Single Crochet (in first)', rowCount: 0, value: 1, complete: false },
        { id: 2, stitchType: 'Single Crochet (in first)', rowCount: 0, value: 1, complete: false },
        { id: 3, stitchType: 'Single Crochet (in first)', rowCount: 0, value: 1, complete: false },
        { id: 4, stitchType: 'Single Crochet (in first)', rowCount: 0, value: 1, complete: false },
        { id: 5, stitchType: 'Single Crochet (in first)', rowCount: 0, value: 1, complete: false },
    ],
    [
        { id: 0, stitchType: 'Increase', rowCount: 0, value: 1, complete: false },
        { id: 1, stitchType: 'Increase', rowCount: 0, value: 1, complete: false },
        { id: 2, stitchType: 'Increase', rowCount: 0, value: 1, complete: false },
        { id: 3, stitchType: 'Increase', rowCount: 0, value: 1, complete: false },
        { id: 4, stitchType: 'Increase', rowCount: 0, value: 1, complete: false },
        { id: 5, stitchType: 'Increase', rowCount: 0, value: 1, complete: false },
    ],
    [
        { id: 0, stitchType: 'Increase', rowCount: 0, value: 1, complete: false },
        { id: 1, stitchType: 'Single Crochet', rowCount: 0, value: 0, complete: false },
        { id: 2, stitchType: 'Increase', rowCount: 0, value: 1, complete: false },
        { id: 3, stitchType: 'Single Crochet', rowCount: 0, value: 0, complete: false },
        { id: 4, stitchType: 'Increase', rowCount: 0, value: 1, complete: false },
        { id: 5, stitchType: 'Single Crochet', rowCount: 0, value: 0, complete: false },
        { id: 6, stitchType: 'Increase', rowCount: 0, value: 1, complete: false },
        { id: 7, stitchType: 'Single Crochet', rowCount: 0, value: 0, complete: false },
        { id: 8, stitchType: 'Increase', rowCount: 0, value: 1, complete: false },
        { id: 9, stitchType: 'Single Crochet', rowCount: 0, value: 0, complete: false },
        { id: 10, stitchType: 'Increase', rowCount: 0, value: 1, complete: false },
        { id: 11, stitchType: 'Single Crochet', rowCount: 0, value: 0, complete: false },

    ],
    [
        { id: 0, stitchType: 'Decrease', rowCount: 0, value: -1, complete: false },
        { id: 1, stitchType: 'Single Crochet', rowCount: 0, value: 0, complete: false },
        { id: 2, stitchType: 'Decrease', rowCount: 0, value: -1, complete: false },
        { id: 3, stitchType: 'Single Crochet', rowCount: 0, value: 0, complete: false },
        { id: 4, stitchType: 'Decrease', rowCount: 0, value: -1, complete: false },
        { id: 5, stitchType: 'Single Crochet', rowCount: 0, value: 0, complete: false },
    ],



];



function createToggleRow(pattern, setPattern, row) {
 return function(stitchId, nextComplete) {
  const newRow = row.map(stitch => {
        if (stitch.id === stitchId) {
            // Create a *new* object with changes
            return { ...stitch, complete: nextComplete, rowCount: nextComplete ? 1 : 0 };
        } else {
            // No changes
            return stitch;
        }
    });

    const newPattern = pattern.map((prevRow) => {
        if (prevRow === row) {
          return newRow;
        } else return prevRow;
    });

    setPattern(newPattern)
 }
} 


//Need to understand whats going on here better
//specifically what is acc
const values = initialPattern.reduce((acc, row) => {
    
    const sum = row.reduce((sum, obj) => sum + obj.value, 0);
    return [...acc, sum + (acc[acc.length - 1] || 0)];
  }, []);
  
  

export default function Pattern() {
    const [pattern, setPattern] = useState(initialPattern);

    return (
        <>
            <h1>Crochet Pattern</h1>

            
            
        
            {pattern.map((row, index) => {

              console.log(row)
              const toggleRow = createToggleRow(pattern, setPattern, row);
              // toggleRow = function(stitchId, nextComplete);
              
              return <div className='row'><h2>Row {index + 1} ({values[index]})</h2><Row 
              key={index}
              stitches={row}
              onToggle={toggleRow}
              />
              </div>
            })}
        </>
    );
}

