import { useState } from "react"

export default function DesignPortfolio() {
    const [entries, setEntries] = useState([
        {title: 'Design 1', body: 'I designed this...', id: 1},
        {title: 'Design 2', body: 'I designed this...', id: 2},
        {title: 'Design 3', body: 'I designed this...', id: 3}
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