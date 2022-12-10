import '../App.css';

function Row(props) {

    const {stitches, onToggle} = props


    let rowValue = 0
    let rowLength = stitches.length
    let rowComplete = false

    for(let i = 0; i < stitches.length; i++){

        rowValue += stitches[i].rowCount
    }

    if(rowValue == rowLength){
        rowComplete = true
    }

    console.log(rowComplete)
    return (
        <>
      <ul>
        {stitches.map(stitch => (
          <li key={stitch.id}>
            <label>
              <input type="checkbox" checked={stitch.complete} onChange={e => {
                  onToggle(
                    stitch.id,
                    e.target.checked
                  );

                  
                }}
              />
              {stitch.stitchType} {" "}
              {stitch.rowCount} {" "}
              {stitch.value}
              
            </label>
          </li>
        )
        )}
      </ul>
   
       <div className={`Row ${rowComplete ? "complete" : "incomplete"}`}>  {rowValue} / {rowLength} </div>
     </>
    );
}

export default Row