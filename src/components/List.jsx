import React, { useState } from "react";
import { Box, Checkbox, Flex, FormControl, Wrap, WrapItem, Input, Select } from "@chakra-ui/react";
import { CheckCircleIcon, DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, updateTodo } from "../redux/action/todoAction";

function List(props) {
  const { todos } = useSelector((state) => state.todo);

  // const [isSubscribed, setIsSubscribed] = useState(false);
  const [inputProgress, setInputProgress] = useState("");
  const [inputTodo, setInputTodo] = useState("");
  const dispatch = useDispatch();
  const handleUpdate = (id, todo, progress) => {
    dispatch(updateTodo(id, todo, progress));
  };
  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div>
      <Box
        bg="white"
        minW="350px"
        maxW="350px"
        p={4}
        color="gray.600"
        border="1px"
        borderColor="gray.400"
        borderRadius="5"
        my={2}
      >
        <Flex justifyContent="space-between">
          <WrapItem>
            <CheckCircleIcon w={6} h={6} mr={2} color={props.progress ? "green" : "gray"} />
            {props.progress ? (
              <span>
                <s>{props.todo}</s>
              </span>
            ) : (
              <span>{props.todo}</span>
            )}
          </WrapItem>
          <WrapItem>
            <EditIcon
              w={6}
              h={6}
              mx={2}
              className="iconAction"
              data-bs-toggle="modal"
              data-bs-target={"#updateTodo" + props.id}
            />
            <DeleteIcon w={6} h={6} mx={2} onClick={() => handleDelete(props.id)} className="iconAction" />
            <div
              className="modal fade"
              id={"updateTodo" + props.id}
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">
                      Update Todo ({props.todo})
                    </h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="What to do"
                        value={inputTodo}
                        onChange={(e) => setInputTodo(e.target.value)}
                        isRequired
                        my={2}
                      />
                      <Select my={2} value={inputProgress} onChange={(e) => setInputProgress(e.target.value)}>
                        <option value="false">Incomplete</option>
                        <option value="true">Complete</option>
                      </Select>
                    </FormControl>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                      Close
                    </button>
                    <button
                      type="button"
                      className="btn btn-success"
                      onClick={() => {
                        handleUpdate(props.id, inputTodo, inputProgress);
                      }}
                    >
                      Update
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </WrapItem>
        </Flex>
      </Box>
    </div>
  );
}

export default List;
