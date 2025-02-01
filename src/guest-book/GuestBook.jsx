import { useRef, useState } from "react";

export default function GuestBook() {
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const nameInput = useRef(null);

    function handleSubmit(e) {
        e.preventDefault();
        setName("");
        setMessage("");

        nameInput.current.focus();
    }

    return(
        <form >
            <label htmlFor="name">Name :</label><br />
            <input ref={nameInput} type="text" value={name} onChange={(e) => setName(e.target.value)} /> <br />
            <label htmlFor="message">Message : </label> <br />
            <textarea name="message" value={message} onChange={(e) => setMessage(e.target.value)} id="message"/> <br />
                <button onClick={ handleSubmit}>Submit</button>
        </form>
    )
}