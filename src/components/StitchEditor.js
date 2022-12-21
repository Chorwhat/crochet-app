

export default function StitchEditor(){

    return (
        <>
        <select onChange={handleChange} name="stitchType" id="">
                {Object.keys(stitchTypes).map(stitch => (
                    <option value={stitch}>{stitch}</option>
                ))}
            </select>
            
            <input  onChange={handleChange} type="number" name="count" value={data.count} min={1} />
            </>
    )

}


// Get a reference to the list element
const list = document.querySelector('#my-list');

// Set a flag to track whether the "c" key is being held down
let cKeyDown = false;

// Add an event listener for the "keydown" event on the document
// This will fire whenever a key is pressed on the keyboard
document.addEventListener('keydown', (event) => {
  // If the "c" key is pressed, set the flag to true
  if (event.code === 'KeyC') {
    cKeyDown = true;
  }
});

// Add an event listener for the "keyup" event on the document
// This will fire whenever a key is released on the keyboard
document.addEventListener('keyup', (event) => {
  // If the "c" key is released, set the flag to false
  if (event.code === 'KeyC') {
    cKeyDown = false;
  }
});

// Add an event listener for the "mouseover" event on the list element
// This will fire whenever the mouse cursor moves over the list element
list.addEventListener('mouseover', (event) => {
  // If the "c" key is being held down and the target element is not checked, toggle its "checked" state
  if (cKeyDown && !event.target.checked) {
    event.target.checked = true;
  }

  // Otherwise, if the "c" key is being held down and the target element is checked,
  // find the next unchecked element in the list and toggle its "checked" state
  else if (cKeyDown && event.target.checked) {
    // Get a list of all unchecked elements in the list
    const uncheckedElements = list.querySelectorAll(':not(:checked)');

    // If there are any unchecked elements, toggle the "checked" state of the first one
    if (uncheckedElements.length > 0) {
      uncheckedElements[0].checked = true;
    }
  }
});