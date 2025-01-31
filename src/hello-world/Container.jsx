import HelloWorld from "./HelloWorld";

export default function Container({ children }) {
    return (
        <div>
            <h1>Container</h1>
            {children}
            <footer>
                <p>Footer</p>
            </footer>
        </div>
    )
}