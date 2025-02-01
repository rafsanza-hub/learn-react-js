export default function SayHello(){
    function handleClick(e){
        e.preventDefault()
        const name = document.getElementById("input_name").value;
        document.getElementById("greeting").innerText = `Hello ${name}`
    }

    return(
        <>
        <form>
            <input id="input_name" type="text" />
            <button onClick={handleClick} >Click me</button>
        </form>
        <h2 id="greeting">Hello dunia</h2>
        </>
    )
}