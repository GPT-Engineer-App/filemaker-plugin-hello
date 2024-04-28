import React, { useState } from "react";
import { Box, Button, Input, Text, useToast } from "@chakra-ui/react";
import { FaRegSmile } from "react-icons/fa";

const Index = () => {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");
  const toast = useToast();

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSubmit = () => {
    // Simulate processing the input text and returning it
    setOutputText(inputText);
    toast({
      title: "Processed",
      description: "Your input has been processed.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  const handleShowMessage = () => {
    toast({
      title: "Hello",
      description: "This is a message from the system.",
      status: "info",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Box p={5}>
      <Button leftIcon={<FaRegSmile />} colorScheme="blue" onClick={handleShowMessage}>
        Show Message
      </Button>
      <Box mt={4}>
        <Input placeholder="Enter some text" value={inputText} onChange={handleInputChange} />
        <Button mt={2} colorScheme="green" onClick={handleSubmit}>
          Process Input
        </Button>
      </Box>
      {outputText && <Text mt={4}>Output: {outputText}</Text>}
    </Box>
  );
};

export default Index;
