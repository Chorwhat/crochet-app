import React,{useRef, useState} from "react";
import { stitchTypes } from "../Constants"

export default function RowEditor(props) {
    const {onAddToRows, onAddToTemp} = props
    
    const formRef = useRef()
    const [data, setData] = useState({stitchType: 'sc', count: 1, value: 0})
    

    const handleChange = (event) => {
        setData({...data, [event.target.name]: event.target.value})
    }

    const handleAddRows = () => {
        onAddToRows(data)
    }

    const handleAddTemp = () => {
        onAddToTemp(data)
    }

    return (
        <form ref={formRef}> 

            
            <select onChange={handleChange} name="stitchType" id="">
                {Object.keys(stitchTypes).map(stitch => (
                    <option value={stitch}>{stitch}</option>
                ))}
            </select>
            
            <input  onChange={handleChange} type="number" name="count" value={data.count} min={1} />
            <button type="button" onClick={handleAddTemp}>Add to Temp</button>
            <button type="button" onClick={handleAddRows}>Add Temp to Row</button>
        </form>
    )
}

//Bootstrap and specifically Bootstrap Grid
// look into javascript events 
// look into javscript Object