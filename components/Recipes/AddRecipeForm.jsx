import { useState } from "react";
import {
  ScrollView,
  View,
  Text,
  Pressable,
  TextInput,
  StyleSheet,
} from "react-native";

const AddRecipeForm = ({ onAddRecipe, catagory }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [temp, setTemp] = useState("");
  const [totalTime, setTotalTime] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");

  const sendDoc = () => {
    const newRecipe = {
      _id: title,
      Catagory: catagory, 
      Title: title,
      Desc: description,
      Temp: temp,
      TotalTime: totalTime,
      Ingredients: ingredients.split(","),
      Instructions: instructions,
    };
    onAddRecipe(newRecipe);
  };

  return (
    <ScrollView style={styles.container}>
      <Text>What is your new recipe today?</Text>
      <TextInput
        style={styles.input}
        autoCompleteType="text"
        onChangeText={(text) => setTitle(text)}
        placeholder="Title"
      />
      <TextInput
        style={styles.input}
        autoCompleteType="text"
        onChangeText={(text) => setDescription(text)}
        placeholder="Short Description"
      />
      <TextInput
        style={styles.input}
        autoCompleteType="text"
        onChangeText={(text) => setTemp(text)}
        placeholder="Temperature?"
      />
      <TextInput
        style={styles.input}
        autoCompleteType="text"
        onChangeText={(text) => setTotalTime(text)}
        placeholder="Total time?"
      />
      <TextInput
        style={styles.input}
        autoCompleteType="text"
        onChangeText={(text) => setIngredients(text)}
        placeholder="Separate ingredients with commas"
      />
      <TextInput
        style={styles.instructions}
        autoCompleteType="text"
        onChangeText={(text) => setInstructions(text)}
        placeholder="Write your instructions!!"
        multiline={true}
        numberOfLine={400}
      />
      <Pressable style={styles.submit} onPress={sendDoc}>
        <Text>Submit</Text>
      </Pressable>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
  },
  input: {
    paddingHorizontal: 5,
    paddingVertical: 10,
    borderRadius: 10,
    backgroundColor: "#fff",
    elevation: 5,
    marginVertical: 5,
  },
  instructions: {
    textAlignVertical: "top",
    paddingHorizontal: 5,
    paddingVertical: 10,
    borderRadius: 10,
    backgroundColor: "#fff",
    elevation: 5,
    marginVertical: 5,
  },
  submit: {
    marginTop: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 50,
    backgroundColor: "#f72585",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default AddRecipeForm;
