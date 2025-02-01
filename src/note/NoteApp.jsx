import { useImmer, useImmerReducer } from "use-immer";
import NoteForm from "./NoteForm";
import Note from "./Note";
import NoteList from "./NoteList";

var initialData = [
    { id: 1, text: "John", done: true },
    { id: 2, text: "Jane", done: true },
    { id: 3, text: "Bob", done: false },
];

function notesReducer(draft, action) {
    if (action.type === "add") {
        draft.push(action.payload);
    } else if (action.type === "delete") {
        const index = draft.findIndex((item) => item.id === action.payload.id);
        draft.splice(index, 1);
    } else if (action.type === "update") {
        const index = draft.findIndex((item) => item.id === action.payload.id);
        draft[index] = action.payload;
    }
}



export default function NoteApp() {
    const [notes, dispatch] = useImmerReducer(notesReducer, initialData)

    function handleAddNote(text) {
        dispatch({ type: "add", payload: { id: Date.now(), text, done: false } });
    }
    

    function handleDeleteNote(note) {
        dispatch({ type: "delete", payload: note });
    }

    function handleChangeNote(note){
        dispatch({ type: "update", payload: note });
    }

    return (
        <>
        <NoteForm onAddNote={handleAddNote}  />
       <NoteList notes={notes} onChange={handleChangeNote} onDelete={handleDeleteNote}/>
        </>
    )
}

