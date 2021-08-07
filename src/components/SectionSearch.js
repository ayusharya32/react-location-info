import { useState } from "react"

function SectionSearch({ submitQuery }) {

    const [text, setText] = useState('')

    function onSubmit(e) {
        e.preventDefault()
        submitQuery(text)
        setText('')
    }

    return (
        <section className="section-search">
            <form onSubmit={onSubmit}>
                <input onChange={(e) => setText(e.target.value)} value={text} type="text" placeholder="Search Location..." />
                <button type="submit" className="btn-search">Search</button>
            </form>
        </section>
    )
}

export default SectionSearch
