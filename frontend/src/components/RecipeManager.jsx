import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  StackDivider,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import axios from "../http";
import { Navigate, useNavigate } from "react-router-dom";

const RecipeManager = ({ machineId }) => {
  const [recipes, setRecipes] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [recipeId, setRecipeId] = useState('');
  const [recipeValue, setRecipeValue] = useState("");
  const user = JSON.parse(localStorage.getItem("user"));


  useEffect(() => {
    const fetchRecipes = async () => {
      const response = await axios.get(`/api/recipes/${machineId}`);
      setRecipes(response.data);
    };
    fetchRecipes();
  }, [machineId]);

  const handleDelete = async (id) => {
    if(user?.isAdmin) {
      await axios.delete(`/api/recipes/${id}`);
      setRecipes((prev) => prev.filter((d) => d._id !== id));
    }  else {
      alert("You are not admin")
    }
  };

  const editRecipe = async(e) => {
    e.preventDefault();

    
    try {
      const response = await axios.put(`/api/recipes/${recipeId}`, {name:recipeValue}); 
        if (response.status === 200) {
        }
      } catch (err) {
        console.log(err)
      }
    window.location.reload();
    onClose();
  }

  const handleEdit = async (recipeId) => {
    if(user?.isAdmin) {
      onOpen();
      setRecipeId(recipeId);
    } else {
      alert("You are not admin")
    }
  }

  return (
    <>
      <Text fontSize={"2rem"} textAlign={"center"}>
        Recipe Management
      </Text>
      {isOpen && (
        <Modal isOpen={isOpen} onClose={(e)=>onClose(e)}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Edit the Recipe </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <FormControl>
                <FormLabel>Recipe Name</FormLabel>
                <Input type="text" onChange={(e) => setRecipeValue(e.target.value)}/>
              </FormControl>
            </ModalBody>

            <ModalFooter display={"flex"} justifyContent={"center"}>
              <Button
                width={"100%"}
                colorScheme="blue"
                mr={3}
                onClick={editRecipe}
              >
                Edit
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}
      <Box
        mt={4}
        display={"flex"}
        flexWrap={"wrap"}
        gap={"30px"}
        justifyContent={"space-evenly"}
      >
        {recipes.map((recipe, id) => {
          return (
            <Card
              backgroundColor={"#1B2431"}
              textColor={"white"}
              key={id}
              width={["100%", "30%"]}
            >
              <CardHeader>
                <Heading size="md">{recipe.name}</Heading>
              </CardHeader>

              <CardBody>
                <Stack divider={<StackDivider />} spacing="4">
                  {recipe.ingredients.map((ingredient, idx) => {
                    return (
                      <Box key={idx}>
                        <Heading size="xs" textTransform="uppercase">
                          {ingredient.ingredient}
                        </Heading>
                        <Text pt="2" fontSize="sm">
                          {ingredient.quantity}
                        </Text>
                      </Box>
                    );
                  })}
                </Stack>
              </CardBody>
              <CardFooter>
                <Box display={"flex"} gap={"20px"}>
                  <Button backgroundColor={"yellow"} onClick={() => handleEdit(recipe._id)}>
                    Edit
                  </Button>
                  <Button backgroundColor={"red"} color={"white"} onClick={() => handleDelete(recipe._id)}>
                    Delete
                  </Button>
                </Box>
              </CardFooter>
            </Card>
          );
        })}
      </Box>
    </>
  );
};

export default RecipeManager;
