import React,{useRef, useState} from "react";
import { stitchTypes, stitchValues } from "../Constants"

export default function RowEditor(props) {
    const {onSubmit} = props
    
    const formRef = useRef()
    const [data, setData] = useState({stitchType: 'sc', count: 0, value: 0})

    const handleChange = (event) => {
        setData({...data, [event.target.name]: event.target.value})
    }

    const handleSubmit = () => {
        onSubmit(data)
    }

    return (
        <form ref={formRef}> 
            <select onChange={handleChange} name="stitchType" id="">
                {Object.keys(stitchTypes).map(stitch => (
                    <option value={stitch}>{stitch}</option>
                ))}
            </select>
            
            <input  onChange={handleChange} type="number" name="count" value={data.count} />
            <button type="button" onClick={handleSubmit}>Add Row</button>
        </form>
    )
}

//Bootstrap and specifically Bootstrap Grid
// look into javascript events 
// look into javscript Object