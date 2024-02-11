"use client";
import { useState, useEffect, useRef } from "react";
import {
  Box,
  Stack,
  Card,
  CardBody,
  Heading,
  Text,
  CardFooter,
  Button,
  Center,
} from "@chakra-ui/react";
import { useDropzone } from "react-dropzone";

const MyCard = ({ onDrop, onTextChange, onSubmit, imageUrl, text }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isImageClicked, setIsImageClicked] = useState(false);
  const [placeholderImageUrl, setPlaceholderImageUrl] =
    useState("/placeholder.png");

  useEffect(() => {
    // Simulate a delay to represent fetching data or some client-side operation
    const delay = setTimeout(() => {
      setIsLoaded(true);
      clearTimeout(delay);
    }, 1000); // You can adjust the delay time as needed

    // Clear the timeout on component unmount to avoid memory leaks
    return () => clearTimeout(delay);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*",
    multiple: false,
  });

  const fileInputRef = useRef(null);

  const handleImageClick = () => {
    setIsImageClicked(true);
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <Center bg="000000">
      <Box maxW="750px" w="100%" bg="#000000" p="4" borderRadius="md" mt="4">
        <Card
          direction={{ base: "column", sm: "row" }}
          overflow="hidden"
          variant="outline"
          bg="white"
          borderRadius="md"
        >
          <Box
            {...getRootProps({
              onClick: (event) => event.stopPropagation(),
            })}
            onClick={handleImageClick}
          >
            <input
              {...getInputProps()}
              ref={fileInputRef}
              style={{ display: "none" }}
            />
            {isImageClicked ? (
              isLoaded && imageUrl ? (
                <img
                  style={{
                    objectFit: "cover",
                    maxWidth: "100%",
                    maxHeight: "200px",
                  }}
                  src={imageUrl}
                  alt="Caffe Latte"
                />
              ) : (
                <img
                  style={{
                    objectFit: "cover",
                    maxWidth: "100%",
                    maxHeight: "200px",
                  }}
                  src={placeholderImageUrl}
                  alt="Placeholder"
                />
              )
            ) : (
              <img
                style={{
                  objectFit: "cover",
                  maxWidth: "100%",
                  maxHeight: "200px",
                }}
                src={placeholderImageUrl}
                alt="Placeholder"
              />
            )}
          </Box>

          <Stack>
            <CardBody>
              <Heading size="md">Enter the narrative for this panel:</Heading>

              <textarea
                value={text}
                onChange={onTextChange}
                placeholder="Enter sentences..."
                rows="5"
                cols="30"
              />
            </CardBody>

            <CardFooter>
              <Button variant="solid" colorScheme="blue" onClick={onSubmit}>
                Submit
              </Button>
            </CardFooter>
          </Stack>
        </Card>
      </Box>
    </Center>
  );
};

const CardContainer = () => {
  const [cardCount, setCardCount] = useState(1);
  const [images, setImages] = useState([]);
  const [texts, setTexts] = useState([]);

  const onDrop = (acceptedFiles, index) => {
    if (acceptedFiles[0] instanceof Blob) {
      setImages((prevImages) => {
        const updatedImages = [...prevImages];
        updatedImages[index] = URL.createObjectURL(acceptedFiles[0]);
        return updatedImages;
      });
    } else {
      console.error("Invalid file object:", acceptedFiles[0]);
    }
  };

  const onTextChange = (e, index) => {
    const updatedTexts = [...texts];
    updatedTexts[index] = e.target.value;
    // console.log(updatedTexts[index])
    setTexts(updatedTexts);
  };

  const onSubmit = () => {
    console.log("Submitted Images:", images);
    console.log("Submitted Sentences:", texts);
    // You can perform additional actions with the submitted data
  };

  const addAnotherCard = () => {
    setCardCount((prevCount) => prevCount + 1);
  };

  return (
    <Box bg="#0e0e0e">
      {[...Array(cardCount)].map((_, index) => (
        <MyCard
          key={index}
          imageUrl={images[index] || ""}
          text={texts[index] || ""}
          onDrop={(acceptedFiles) => onDrop(acceptedFiles, index)}
          onTextChange={(e) => onTextChange(e, index)}
          onSubmit={onSubmit} // Pass onSubmit to MyCard component
        />
      ))}
      <Button
        variant="solid"
        colorScheme="green"
        onClick={addAnotherCard}
        mt="4"
      >
        Add Another
      </Button>
    </Box>
  );
};

export default CardContainer;
