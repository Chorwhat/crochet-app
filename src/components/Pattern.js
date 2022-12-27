import { useState } from 'react';
import Row from './Row';
import RowEditor from './RowEditor';

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
    { id: 24, stitchType: 'Increase', rowCount: 0, value: 1, complete: false },
    { id: 25, stitchType: 'Single Crochet', rowCount: 0, value: 0, complete: false },
    { id: 26, stitchType: 'Increase', rowCount: 0, value: 1, complete: false },
    { id: 27, stitchType: 'Single Crochet', rowCount: 0, value: 0, complete: false },
    { id: 28, stitchType: 'Increase', rowCount: 0, value: 1, complete: false },
    { id: 29, stitchType: 'Single Crochet', rowCount: 0, value: 0, complete: false },
    { id: 30, stitchType: 'Increase', rowCount: 0, value: 1, complete: false },
    { id: 31, stitchType: 'Single Crochet', rowCount: 0, value: 0, complete: false },
    { id: 32, stitchType: 'Increase', rowCount: 0, value: 1, complete: false },
    { id: 33, stitchType: 'Single Crochet', rowCount: 0, value: 0, complete: false },
    { id: 34, stitchType: 'Increase', rowCount: 0, value: 1, complete: false },
    { id: 35, stitchType: 'Single Crochet', rowCount: 0, value: 0, complete: false },

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
 return function(stitchId) {
  const indexOfStitchId = row.findIndex(stitch => stitch.id === stitchId);
  const newRow = row.map((stitch,index) => {
        if (index <= indexOfStitchId && !stitch.complete) {
            // Create a *new* object with changes
            return { ...stitch, complete: true, rowCount: 1 };
        } else if (stitch.id === stitchId){
          return {...stitch, complete: !stitch.complete, rowCount: stitch.complete ? 0 : 1}
        }
        else if(index > indexOfStitchId){
          return {...stitch,complete: false, rowCount: 0}
        }
         else {
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
//I think i need to make this into a state in the object that I can add to, that way I can have values when I add new rows
//from row Editor
const values = initialPattern.reduce((acc, row) => {
    
    const sum = row.reduce((sum, obj) => sum + obj.value, 0);
    return [...acc, sum + (acc[acc.length - 1] || 0)];
  }, []);

  const createRow = (data, isFirst) => {

    const row = [];
  
    for (let i = 0; i < data.length; i++) {
      const obj = data[i];
      let stitchValue = 0;
      if (obj.stitchType === "inc") {
        stitchValue = 1;
      } else if (obj.stitchType === "dec") {
        stitchValue = -1;
      } else if (obj.stitchType === "sc" && isFirst) {
        stitchValue = 1;
      }
  
      row.push({
        complete: false,
        id: obj.id,
        rowCount: 0,
        stitchType: obj.stitchType,
        value: stitchValue,
      });
    }
  
    return row;
  };
  

  

  

export default function Pattern() {
    const [pattern, setPattern] = useState([]);
    const [valueArray, setValueArray] = useState([])
    const [tempRow, setTempRow] = useState([])
    const [tempDisplay, setTempDisplay] = useState("")
    const [isFirst, setIsFirst] = useState(true)

    // const onRowAdd = (data) => {
      
    //   const row = createRow(data)
    //   const sum = row.reduce((sum, obj) => sum + obj.value, 0)
    //   setValueArray([...valueArray, sum + (valueArray[valueArray.length-1] || 0)])
    //   setPattern([...pattern, row])
    // }

    const onRowAdd = () => {
      setIsFirst(false)
      let flat = [...tempRow].flat()

      //go through the array and reassign unique id's
      let counter = 0
      for (const item of flat){
        item.id = counter
        counter += 1
      }
      const sum = flat.reduce((sum, obj) => sum + obj.value, 0)
      setValueArray([...valueArray, sum + (valueArray[valueArray.length-1] || 0)])
      setPattern([...pattern, flat])
      setTempRow([])
      setTempDisplay("")
    }

    const onTempAdd = (data, result) => {
  
      const row = createRow(data, isFirst)
      
      const tempString =  row.map(object => object.stitchType).join(', ');
     

      let values = tempString.split(",");
      // Count the number of items in the array
      let numValues = values.length;
      // Append the number of values to the first value in the array
      //let result = `${values[0]} * ${numValues}`;

      setTempRow([...tempRow, row])
      setTempDisplay([...tempDisplay, result + " , "])
  
    }


    return (
        <>
            <h1>Crochet Pattern</h1>

            <RowEditor key="rowEditor" onAddToRows={onRowAdd} onAddToTemp={onTempAdd}/>
            <p>Temp Row: {tempDisplay}</p>
            
            {pattern.map((row, index) => {

              const toggleRow = createToggleRow(pattern, setPattern, row);
              // toggleRow = function(stitchId, nextComplete);
              
              return <div className='row'><h2>Row{index + 1}({valueArray[index]})</h2><Row 
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