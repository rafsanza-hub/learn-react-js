import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import HelloWorld from "./HelloWorld";
import Container from "./Container";
import Todo from "./todo/Todo";
import TodoList from "./todo/TodoList";
import AlertButton from "../assets/button/AlertButton";
import SearchForm from "../assets/form/SearchForm";
import SayHello from "../assets/form/SayHello";
import Increment from "../assets/form/Increment";


createRoot(document.getElementById("root"))
    .render(
        <StrictMode>
            <Container>
                <HelloWorld />
                <TodoList/>
                <AlertButton text="click me" />
                <SearchForm  />
                <SayHello/>
                <Increment/>
            </Container>
        </StrictMode>
    );