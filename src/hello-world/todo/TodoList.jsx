import Todo from "./Todo";

export default function TodoList() {
    var data = [
        {
            text: "Learning React",
            isCompleted: true
        },
        {
            text: "Learning React2",
            isCompleted: true
        },
        {
            text: "Learning React3",
            isCompleted: true
        },
        {
            text: "Learning React4",
            isCompleted: false
        }
    ];
    return(
        data.map((todo) => <Todo {...todo} />)

    )
}