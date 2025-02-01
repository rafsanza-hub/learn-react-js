
export default function ProfileForm({name, setName}){
    function handleChangeName(e){
        e.preventDefault();
        setName(e.target.value);
    }
    
    return(
        <form >
            <input type="text" value={name} onChange={handleChangeName} />
            <button type="button">Submit</button>
        </form>
    )
}