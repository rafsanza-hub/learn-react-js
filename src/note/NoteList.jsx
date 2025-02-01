import { useMemo, useRef, useState } from "react";
import Note from "./Note";

export default function NoteList({notes, onChange, onDelete}){

    const [search, setSearch] = useState("");
    const inputRef = useRef(null);

    var filteredNotes = useMemo(()=>{
        return notes.filter((note) => note.text.includes(search));
    }, [notes, search]);

    function handleSearch(e){
        e.preventDefault();
        setSearch(inputRef.current.value);
    }
    
    return (
      <div>
        <input type="text" ref={inputRef} />
        <button onClick={handleSearch}>Search</button>
          <ul>
            {filteredNotes.map((note) => 
            <li key={note.id}>
                <Note onChange={onChange} onDelete={onDelete} key={note.id} note={note} />

            </li>
            )}
        </ul>
      </div>
    )
}