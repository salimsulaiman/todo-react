import { ChakraProvider } from "@chakra-ui/react";
import { useState } from "react";
import TodoList from "./page/TodoList";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import TodoListActive from "./page/TodoListActive";
import TodoListCompleted from "./page/TodoListCompleted";

function App() {
  return (
    <ChakraProvider>
      <Routes>
        <Route path="/" element={<TodoList />} />
        <Route path="/active" element={<TodoListActive />} />
        <Route path="/completed" element={<TodoListCompleted />} />
      </Routes>
    </ChakraProvider>
  );
}

export default App;
