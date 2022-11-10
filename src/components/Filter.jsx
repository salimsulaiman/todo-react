import { WrapItem, Button } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

function Filter() {
  const navigation = useNavigate();

  const handleAll = () => {
    navigation("/");
  };
  const handleActive = () => {
    navigation("/active");
  };
  const handleCompleted = () => {
    navigation("/completed");
  };
  return (
    <WrapItem mb={2}>
      <Button colorScheme="gray" mx={1} onClick={handleAll}>
        ALL
      </Button>
      <Button colorScheme="gray" mx={1} onClick={handleActive}>
        ACTIVE
      </Button>
      <Button colorScheme="gray" mx={1} onClick={handleCompleted}>
        COMPLETED
      </Button>
    </WrapItem>
  );
}

export default Filter;
