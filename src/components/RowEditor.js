// import React,{useRef, useState} from "react";
// import { stitchTypes } from "../Constants"

// export default function RowEditor(props) {
//     const {onAddToRows, onAddToTemp} = props
    
//     const formRef = useRef()
//     const [data, setData] = useState({stitchType: 'sc', count: 1, value: 0})
    

//     const handleChange = (event) => {
//         setData({...data, [event.target.name]: event.target.value})
//     }

//     const handleAddRows = () => {
//         onAddToRows(data)
//     }

//     const handleAddTemp = () => {
//         onAddToTemp(data)
//     }

//     return (
//         <form ref={formRef}> 

            
//             <select onChange={handleChange} name="stitchType" id="">
//                 {Object.keys(stitchTypes).map(stitch => (
//                     <option value={stitch}>{stitch}</option>
//                 ))}
//             </select>
            
//             <input  onChange={handleChange} type="number" name="count" value={data.count} min={1} />
//             <button type="button" onClick={handleAddTemp}>Add to Temp</button>
//             <button type="button" onClick={handleAddRows}>Add Temp to Row</button>
//         </form>
//     )
// }









import React,{useRef, useState} from "react";
import { stitchTypes } from "../Constants"

export default function RowEditor(props) {
    const {onAddToRows, onAddToTemp} = props
    
    const formRef = useRef()
    const [data, setData] = useState([{stitchType: 'sc', count: 1, value: 0}])
    const [repeatCount, setRepeatCount] = useState(1)
    

    const handleChange = (event, index) => {
        const newData = [...data]
        newData[index] = {...newData[index], [event.target.name]: event.target.value}
        setData(newData)
    }

    const handleRepeatCountChange = (event) => {
        setRepeatCount(event.target.value)
    }

    const handleAddRows = () => {
        for (let i = 0; i < repeatCount; i++) {
            onAddToRows(data)
        }
    }

    const handleAddTemp = () => {
        let tempRow = []
        let result = ""
        
        data.forEach(item => {
            console.log(item)
            result += item.stitchType + " * " + item.count
            for (let i = 0; i < item.count; i++) {
                tempRow.push({stitchType: item.stitchType})
                
            }
           
        })
        
        let items = [];
        data.forEach(item => {
          items.push(item.stitchType + " * " + item.count);
        });

        if(repeatCount !== 1 ? result = "(" + items.join(", ") + ")" + "x " + repeatCount : result = "(" + items.join(", ") + ")" )
        

        if (repeatCount > 1) {
            let repeatedTempRow = [];
            for (let i = 0; i < repeatCount; i++) {
              repeatedTempRow = repeatedTempRow.concat(tempRow);
            }
            onAddToTemp(repeatedTempRow, result);
          } else {
            onAddToTemp(tempRow, result);
          }
    }

    const handleAddStitchType = () => {
        setData([...data, {stitchType: 'sc', count: 0}])
        setRepeatCount(data.length + 1)
    }

    const handleRemoveStitchType = () => {
        if (data.length > 1) {
            setData(data.slice(0, -1))
            setRepeatCount(data.length - 1)
        }
    }

    return (
        <form ref={formRef}> 
            {data.map((item, index) => (
                <div key={index}>
                    <select onChange={(e) => handleChange(e, index)} name="stitchType" value={item.stitchType}>
                        {Object.keys(stitchTypes).map(stitch => (
                            <option value={stitch}>{stitch}</option>
                        ))}
                    </select>
                    <input  onChange={(e) => handleChange(e, index)} type="number" name="count" value={item.count} min={0} />
                </div>
            ))}
            <button type="button" onClick={handleAddStitchType}>Add Stitch Type</button>
            <button type="button" onClick={handleRemoveStitchType}>Remove Stitch Type</button>
            {data.length >= 2 && (
                <div>
                    <label htmlFor="repeat-count">Repeat</label>
                    <input onChange={handleRepeatCountChange} type="number" name="repeat-count" value={repeatCount} min={1} />
                </div>
            )}
            <button type="button" onClick={handleAddTemp}>Add to Temp</button>
            <button type="button" onClick={handleAddRows}>Add Temp to Row</button>
        </form>
    )
}
