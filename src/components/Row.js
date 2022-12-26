import '../App.css';

function Row(props) {

    const {stitches, onToggle} = props


    let rowValue = 0
    let rowLength = stitches.length
    let rowComplete = false

    for(let i = 0; i < stitches.length; i++){

        rowValue += stitches[i].rowCount
    }

    if(rowValue === rowLength){
        rowComplete = true
    }


    return (
        <>
      <ul className='stitchlist'>
        {stitches.map(stitch => (
          <label>
          <li key={stitch.id}>
            
              <input type="checkbox" checked={stitch.complete} onChange={e => {
                  onToggle(
                    stitch.id,
                  );
                  
                }}
              />
              {stitch.stitchType} {" "}
           
              
            
          </li>
          </label>
        )
        )}
      </ul>
   
       <div className={`${rowComplete ? "complete" : "incomplete"}`}>  {rowValue} / {rowLength} </div>
     </>
    );
}



export default Row




