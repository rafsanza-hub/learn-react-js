import { useState } from "react";

export default function NoteForm({onAddNote}) {
    const [text, setText] = useState("");

    function handleTextChange(e) {
        setText(e.target.value);
    }

    function handleClick(e){
        e.preventDefault();
        onAddNote(text);
        setText("");
    } 
    return (
        <form>
            <input type="text" value={text} onChange={handleTextChange} />
            <button onClick={handleClick}>Submit</button>
        </form>
    )
}