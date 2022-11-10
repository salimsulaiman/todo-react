import { Container, Heading, FormControl, Input, Flex, Button, WrapItem } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Filter from "../components/Filter";
import List from "../components/List";
import { addTodo, getTodo } from "../redux/action/todoAction";

function TodoListActive() {
  const dispatch = useDispatch();
  const { todos } = useSelector((state) => state.todo);

  useEffect(() => {
    dispatch(getTodo());
  }, []);

  const [inputTodo, setInputTodo] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault(e);
    dispatch(addTodo(inputTodo));
    setInputTodo("");
  };

  return (
    <Container maxW="md" centerContent my={20} py={3}>
      <Heading as="h1" size="lg" mb={10}>
        What's the plan for today
      </Heading>
      <form onSubmit={handleSubmit}>
        <FormControl my={5}>
          <Flex>
            <Input
              type="text"
              placeholder="What to do"
              value={inputTodo}
              onChange={(e) => setInputTodo(e.target.value)}
              isRequired
            />
            <Button colorScheme="purple" ms={3} type="submit">
              Add
            </Button>
          </Flex>
        </FormControl>
      </form>
      <Filter />
      {todos
        .filter((el) => el.isDone === false)
        .map((item, index) => {
          return (
            <div key={index}>
              <List id={item.id} todo={item.todo} progress={item.isDone} />
            </div>
          );
        })}
    </Container>
  );
}

export default TodoListActive;
