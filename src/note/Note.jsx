import { useState } from "react";

export default function Note({note, onChange, onDelete}){
    const [isEditing, setIsEditing] = useState(false);
    let component;

    function handleChangeText(e){
        const newNote = {...note, text: e.target.value}
        onChange(newNote);
    }

    if (isEditing) {
        component = (
            <>
                <input type="text" value={note.text} onChange={handleChangeText} />
                <button onClick={() => setIsEditing(false)}>Save</button>
            </>
        )
    } else{
        component = (
            <>
            <p>{note.text}</p>
            <button onClick={() => setIsEditing(true)}>Edit</button>
            </>
        )
    }

    function handleChangeDone(e){
        const newNote = {...note, done: e.target.checked}
        onChange(newNote);
    }

    return (
        <label style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <input type="checkbox" checked={note.done} onChange={handleChangeDone} />
            {component}
            <button onClick={() => onDelete(note)}>Delete</button>
        </label>
    );
}