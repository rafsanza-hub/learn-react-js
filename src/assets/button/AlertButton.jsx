export default function AlertButton({text}){
    function clickHendler(){
        alert("Hello World");
    }

    return(
        <button onDoubleClick={clickHendler}>{text}</button>
    )
}