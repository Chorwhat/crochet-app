import React from 'react';
import Row from './Row';

function Pattern() {
    const rows = [
        ['sc','sc','sc','sc','sc','sc'],
        ['inc', 'inc', 'inc', 'inc', 'inc', 'inc'],
        ['sc', 'inc', 'sc', 'inc', 'sc', 'inc', 'sc', 'inc', 'sc', 'inc', 'sc', 'inc'],
        ['sc', 'inc', 'sc', 'sc', 'inc', 'sc', 'sc', 'inc', 'sc', 'sc', 'inc', 'sc', 'sc', 'inc', 'sc', 'sc', 'inc', 'sc'],
        ['sc', 'sc', 'sc', 'inc', 'sc', 'sc', 'sc', 'inc', 'sc', 'sc', 'sc', 'inc', 'sc', 'sc', 'sc', 'inc', 'sc', 'sc', 'sc', 'inc', 'sc', 'sc', 'sc', 'inc', 'sc', 'sc', 'sc', 'inc']

]



    return (
        <>
        {rows.map((row) => (
            <Row rowInfo={row} />
        ))}
        </>
    );
}

export default Pattern;