import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import HelloWorld from "./HelloWorld";
import Container from "./Container";
import Todo from "./todo/Todo";
import TodoList from "./todo/TodoList";


createRoot(document.getElementById("root"))
    .render(
        <StrictMode>
            <Container>
                <HelloWorld />
                <TodoList/>
            </Container>
        </StrictMode>
    );