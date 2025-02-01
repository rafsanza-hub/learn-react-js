import { useState } from "react";
import { useImmer } from "use-immer";

var initialData = {
    name: "",
    message: "",
}

export default function ContactForm() {
    const [contact, setContact] = useImmer(initialData);
    function handleNameChange(e) {
        setContact((draft) =>{
            draft.name = e.target.value
        })
    }

    function handleMessageChange(e) {
        setContact((draft) =>{
            draft.message = e.target.value
        })
    }

    return (
        <>
        <h1>Contact Form</h1>
        <form>
            <label htmlFor="name">Name : </label>
            <input type="text" value={contact.name} onChange={handleNameChange} /><br />
            <label htmlFor="message">Message : </label>
            <input type="text" value={contact.message} onChange={handleMessageChange} />
        </form>
        <br />
        <h2>Contak Detail</h2>
        <p>Name: {contact.name}</p>
        <p>Message: {contact.message}</p>
        </>
    )
}