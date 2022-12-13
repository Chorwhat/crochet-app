import { useState } from 'react';
import Row from './Row';

function parseInput(input) {
    // Split the input string on the "|" character, if it exists
    const parts = input.split("|");
  
    // Initialize the result array
    const result = [];
  
    // Loop through each part
    for (const part of parts) {
      // Split the part on commas to get a list of patterns
      const patterns = part.split(",");
  
      // Initialize the sub-array for this part
      const subArray = [];
  
      // Loop through each pattern
      for (const pattern of patterns) {
        // Split the pattern on the "" character, if it exists
        const [base, count] = pattern.split("*");
  
        // Convert the count string to a number, or default to 1 if no count is specified
        const repeatCount = count ? parseInt(count, 10) : 1;
  
        // Add the base pattern to the sub-array the specified number of times
        for (let i = 0; i < repeatCount; i++) {
  
            let value = 0
    
            if (base === 'a' || base === 'b'){
              value = 1
            }
            else if(base === "dec"){
              value = -1
            }
          subArray.push({ stitchType: base,
          complete: false,
          value: value });
        }
      }
  
      // Add the sub-array to the result array
      result.push(subArray);
    }
  
    // Return the final result array
    return result;
  }
  
  
let inputString = "scir*6,in*3,(sc,in)*3";
let outputArray = parseInput(inputString);




//sc*6, inc*6, sc*6

const initialPattern = [[
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
]
]

//const initialPattern = outputArray


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