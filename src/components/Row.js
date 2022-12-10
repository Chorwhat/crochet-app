function Row(props) {

    const {stitches, onToggle } = props

    return (
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
              {stitch.stitchType}
            </label>
          </li>
        ))}
      </ul>
    );
}

export default Row