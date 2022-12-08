import React, {useState, useEffect} from 'react';

function Stitch(props) {

    const {
        //the stitchType is single, double, inc, dec etc
        //the stitchStyle handles css for the object
        //the stitchNumber serves as the key and represents the stitch history
        //the stitchStatus is a boolean for if its complete or not
        //i.e the first stitch made is stitchNumber = 1, second is 2, and so on
        stitch: stitchType, stitchNumber, stitchStatus
    } = props

    const [status, setStatus] = useState(false)


    useEffect(() => {
        
    })

    const changeStatus = () => {
        if (status == false){
            setStatus(true)
        }
        if (status == true){
            setStatus(false)
        }
    }
    return (
        <div>

            {status
            ? <button onClick={changeStatus} style={{backgroundColor: "green"}}>{stitchNumber} {stitchType} {status}</button>
            : <button onClick={changeStatus} style={{backgroundColor: "red"}}>{stitchNumber} {stitchType} {status}</button>}
           
        
           
         {/* <button className='stitch' style={stitchStyle}> {stitchType} </button> */}

        </div>
      
    );
}

export default Stitch;