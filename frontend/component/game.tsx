import { Box, Button, Center, Flex, Square, Text } from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios";
export default function Game() {
  const [word, setWord] = useState("MaStEr");
  const handleClick = async () => {
    setRandomDisabled(true);
    const newWord = await axios.get(`http://localhost:3600/randomword`);
    setRandomDisabled(false);
    console.log(newWord.data.word);
    return setWord(newWord.data.word);
  };

  const [randomDisabled, setRandomDisabled] = useState(false);
  return (
    <Flex
      width="full"
      height="100vh"
      align="center"
      justifyContent="center"
      flexDir="column"
    >
      <Button
        _focus={{
          outline: "none",
        }}
        h="40vh"
        w="40vh"
        shadow="2xl"
        bg="#BBBBBB"
        onClick={handleClick}
        disabled={randomDisabled}
      >
        <Text fontSize="30">{word}</Text>
      </Button>
    </Flex>
  );
}
