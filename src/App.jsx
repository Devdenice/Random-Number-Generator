import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  HStack,
  VStack,
  Container,
  Box,
  Flex,
  Spacer,
  Input,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";
import "./App.css";

function App() {
  const [minValue, setMinValue] = useState();
  const [maxValue, setMaxValue] = useState();

  const [randomNumber, setRandomNumber] = useState(0);

  const handleRandomNumber = () => {
    setRandomNumber(
      Math.floor(Math.random() * (maxValue - minValue + 1) + minValue)
    );
  };

  return (
    <Box
      w="100%"
      p={4}
      color="white"
      h="605px"
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      {/* <Container maxW={"lg"} bg="blue.600" color="white" maxH={""}> */}

      <VStack width={"100%"}>
        <Card
          width={{ base: "50%", sm: "40%", md: "45%", lg: "44%" }}
          display={"flex"}
          alignItems={"center"}
          boxShadow={"dark-lg"}
        >
          <CardHeader
            bg={"teal.200"}
            w={"100%"}
            borderTopLeftRadius={"9"}
            borderTopRightRadius={"9"}
          >
            <Text
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              m={"auto"}
              fontSize={{ base: "35", sm: "25", md: "28", lg: "40" }}
              fontWeight={600}
              color={"black"}
            >
              Number Generator
            </Text>
          </CardHeader>
          <CardBody mb={5}>
            <VStack display={"flex"} textAlign={"left"}>
              <Text
                w={{ base: "90" }}
                fontSize={{ base: "20", sm: "60", md: "70", lg: "80" }}
                color={"teal.200"}
              >
                {randomNumber}
              </Text>
            </VStack>
            <HStack
              w={{ base: "400px", sm: "300px", md: "350px", lg: "450px" }}
              display={"flex"}
              justifyContent={"space-between"}
            >
              <VStack>
                <Text
                  fontSize={{
                    base: "16px",
                    sm: "12px",
                    md: "18px",
                    lg: "23px",
                  }}
                >
                  Min:
                </Text>
                <Input
                  focusBorderColor={"teal.200"}
                  w={"40%"}
                  type="number"
                  value={minValue}
                  onChange={(event) => setMinValue(+event.target.value)}
                />
              </VStack>
              <VStack>
                <Text
                  fontSize={{
                    base: "16px",
                    sm: "12px",
                    md: "18px",
                    lg: "23px",
                  }}
                >
                  Max:
                </Text>
                <Input
                  focusBorderColor={"teal.200"}
                  w={"40%"}
                  type="number"
                  value={maxValue}
                  onChange={(event) => setMaxValue(+event.target.value)}
                />
              </VStack>
            </HStack>
          </CardBody>
          <CardFooter>
            <Button
              colorScheme="teal"
              onClick={handleRandomNumber}
              size={{ base: "md", sm: "md", md: "lg", lg: "lg" }}
            >
              Generate Number
            </Button>
          </CardFooter>
        </Card>
      </VStack>
      {/* </Container> */}
    </Box>
  );
}

export default App;
