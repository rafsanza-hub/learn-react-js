import "./HelloWorld.css"

export default function HelloWorld() {
    const props = {
        text: "Learning React",
        text2: "Learning React3",
    }
    return (
        <div>
            <HeaderHelloWorld {...props} color="red" />
            <p className="content">Learning React</p>
        </div>
    );
}

function HeaderHelloWorld({ text = "Hello World", text2 }) {
  
    return (
        <h1 className="title">{text2.toUpperCase()}</h1>
    )
}