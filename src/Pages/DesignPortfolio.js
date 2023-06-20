import { useState } from "react"

export default function DesignPortfolio() {
    const [entries, setEntries] = useState([
        {title: 'Design 1', body: 'I designed this...', id: 1},
        {title: 'Design 2', body: 'I designed this...', id: 2},
        {title: 'Design 3', body: 'I designed this...', id: 3},
        {title: 'filler', body: 'I designed this...', id: 4},
        {title: 'filler', body: 'I designed this...', id: 5},
        {title: 'filler', body: 'I designed this...', id: 6},
        {title: 'filler', body: 'I designed this...', id: 7},
        {title: 'filler', body: 'I designed this...', id: 8},
        {title: 'filler', body: 'I designed this...', id: 9},
        {title: 'filler', body: 'I designed this...', id: 10},
        {title: 'filler', body: 'I designed this...', id: 11},
        {title: 'filler', body: 'I designed this...', id: 12},
        {title: 'filler', body: 'I designed this...', id: 13},
        {title: 'filler', body: 'I designed this...', id: 14},
        {title: 'filler', body: 'I designed this...', id: 15},
        {title: 'filler', body: 'I designed this...', id: 16},
        {title: 'filler', body: 'I designed this...', id: 17},
        {title: 'filler', body: 'I designed this...', id: 18},
        {title: 'filler', body: 'I designed this...', id: 19},
        {title: 'filler', body: 'I designed this...', id: 20},
        {title: 'filler', body: 'I designed this...', id: 21},
        // in the future, probably add a date + an imlink & also maybe contain this in a json
    ])
    return(
        <div>
            <h1>Design Portfolio</h1>
            {entries.map((entry) => (
                <div className="entry-title" key={entry.id}>
                    <h2>{entry.title}</h2>
                </div>
            ))}
        </div>
    )
}