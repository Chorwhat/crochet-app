import { useState } from 'react';
import Row from './Row';




function createPatternFromString(inputString) {
    // Split the input string into an array of substrings at each comma
    let subarrays = inputString.split(",");
  
    // Loop through the subarrays and split each one by the | character
    for (let i = 0; i < subarrays.length; i++) {
      subarrays[i] = subarrays[i].split("|");
  
      // Use the map() method to transform each element in the subarray
      // into an array of objects with the property "stitchType"
      subarrays[i] = subarrays[i].map(str => {
        let parts = str.split("x");
        let stitchType = parts[0];
        let number = parts[1];
  
        // Create an array of objects with the properties of stitches
        let objects = [];
        for (let j = 0; j < number; j++) {
          let value = 0
  
          if (stitchType === 'inc' || stitchType === 'scir'){
            value = 1
          }
          else if(stitchType === "dec"){
            value = -1
          }
          
          objects.push({
            id: j,
            stitchType: stitchType,
            rowCount: 0,
            value: value,
            complete: false
          });
        }
        return objects;
        
      });
    }
  
    let spreadOut = [].concat(...subarrays);
    return spreadOut;
  }
  
let inputString = "scirx6,incx3,decx5,scx20,incx6";
let outputArray = createPatternFromString(inputString);




//sc*6, inc*6, sc*6

// const initialPattern = [[
//     { id: 0, stitchType: 'Single Crochet (in first)', rowCount: 0, value:1, complete: false },
//     { id: 1, stitchType: 'Single Crochet (in first)', rowCount: 0, value: 1, complete: false },
//     { id: 2, stitchType: 'Single Crochet (in first)', rowCount: 0, value: 1, complete: false },
//     { id: 3, stitchType: 'Single Crochet (in first)', rowCount: 0, value: 1, complete: false },
//     { id: 4, stitchType: 'Single Crochet (in first)', rowCount: 0, value: 1, complete: false },
//     { id: 5, stitchType: 'Single Crochet (in first)', rowCount: 0, value: 1, complete: false },
// ],
// [
//     { id: 0, stitchType: 'Increase', rowCount: 0, value: 1, complete: false },
//     { id: 1, stitchType: 'Increase', rowCount: 0, value: 1, complete: false },
//     { id: 2, stitchType: 'Increase', rowCount: 0, value: 1, complete: false },
//     { id: 3, stitchType: 'Increase', rowCount: 0, value: 1, complete: false },
//     { id: 4, stitchType: 'Increase', rowCount: 0, value: 1, complete: false },
//     { id: 5, stitchType: 'Increase', rowCount: 0, value: 1, complete: false },
// ],
// [
//     { id: 0, stitchType: 'Increase', rowCount: 0, value: 1, complete: false },
//     { id: 1, stitchType: 'Single Crochet', rowCount: 0, value: 0, complete: false },
//     { id: 2, stitchType: 'Increase', rowCount: 0, value: 1, complete: false },
//     { id: 3, stitchType: 'Single Crochet', rowCount: 0, value: 0, complete: false },
//     { id: 4, stitchType: 'Increase', rowCount: 0, value: 1, complete: false },
//     { id: 5, stitchType: 'Single Crochet', rowCount: 0, value: 0, complete: false },
//     { id: 6, stitchType: 'Increase', rowCount: 0, value: 1, complete: false },
//     { id: 7, stitchType: 'Single Crochet', rowCount: 0, value: 0, complete: false },
//     { id: 8, stitchType: 'Increase', rowCount: 0, value: 1, complete: false },
//     { id: 9, stitchType: 'Single Crochet', rowCount: 0, value: 0, complete: false },
//     { id: 10, stitchType: 'Increase', rowCount: 0, value: 1, complete: false },
//     { id: 11, stitchType: 'Single Crochet', rowCount: 0, value: 0, complete: false },
//     { id: 12, stitchType: 'Increase', rowCount: 0, value: 1, complete: false },
//     { id: 13, stitchType: 'Single Crochet', rowCount: 0, value: 0, complete: false },
//     { id: 14, stitchType: 'Increase', rowCount: 0, value: 1, complete: false },
//     { id: 15, stitchType: 'Single Crochet', rowCount: 0, value: 0, complete: false },
//     { id: 16, stitchType: 'Increase', rowCount: 0, value: 1, complete: false },
//     { id: 17, stitchType: 'Single Crochet', rowCount: 0, value: 0, complete: false },
//     { id: 18, stitchType: 'Increase', rowCount: 0, value: 1, complete: false },
//     { id: 19, stitchType: 'Single Crochet', rowCount: 0, value: 0, complete: false },
//     { id: 20, stitchType: 'Increase', rowCount: 0, value: 1, complete: false },
//     { id: 21, stitchType: 'Single Crochet', rowCount: 0, value: 0, complete: false },
//     { id: 22, stitchType: 'Increase', rowCount: 0, value: 1, complete: false },
//     { id: 23, stitchType: 'Single Crochet', rowCount: 0, value: 0, complete: false },

// ],
// [
//     { id: 0, stitchType: 'Decrease', rowCount: 0, value: -1, complete: false },
//     { id: 1, stitchType: 'Single Crochet', rowCount: 0, value: 0, complete: false },
//     { id: 2, stitchType: 'Decrease', rowCount: 0, value: -1, complete: false },
//     { id: 3, stitchType: 'Single Crochet', rowCount: 0, value: 0, complete: false },
//     { id: 4, stitchType: 'Decrease', rowCount: 0, value: -1, complete: false },
//     { id: 5, stitchType: 'Single Crochet', rowCount: 0, value: 0, complete: false },
// ]
// ]

const initialPattern = outputArray


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
















/**[
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
        { id: 12, stitchType: 'Increase', rowCount: 0, value: 1, complete: false },
        { id: 13, stitchType: 'Single Crochet', rowCount: 0, value: 0, complete: false },
        { id: 14, stitchType: 'Increase', rowCount: 0, value: 1, complete: false },
        { id: 15, stitchType: 'Single Crochet', rowCount: 0, value: 0, complete: false },
        { id: 16, stitchType: 'Increase', rowCount: 0, value: 1, complete: false },
        { id: 17, stitchType: 'Single Crochet', rowCount: 0, value: 0, complete: false },
        { id: 18, stitchType: 'Increase', rowCount: 0, value: 1, complete: false },
        { id: 19, stitchType: 'Single Crochet', rowCount: 0, value: 0, complete: false },
        { id: 20, stitchType: 'Increase', rowCount: 0, value: 1, complete: false },
        { id: 21, stitchType: 'Single Crochet', rowCount: 0, value: 0, complete: false },
        { id: 22, stitchType: 'Increase', rowCount: 0, value: 1, complete: false },
        { id: 23, stitchType: 'Single Crochet', rowCount: 0, value: 0, complete: false },

    ],
    [
        { id: 0, stitchType: 'Decrease', rowCount: 0, value: -1, complete: false },
        { id: 1, stitchType: 'Single Crochet', rowCount: 0, value: 0, complete: false },
        { id: 2, stitchType: 'Decrease', rowCount: 0, value: -1, complete: false },
        { id: 3, stitchType: 'Single Crochet', rowCount: 0, value: 0, complete: false },
        { id: 4, stitchType: 'Decrease', rowCount: 0, value: -1, complete: false },
        { id: 5, stitchType: 'Single Crochet', rowCount: 0, value: 0, complete: false },
    ],


 */