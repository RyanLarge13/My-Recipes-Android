import { useState } from "react";
import {
  ScrollView,
  View,
  Text,
  Pressable,
  TextInput,
  Image,
  StyleSheet,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Camera, CameraType } from "expo-camera";
import Toast from "react-native-toast-message";

const AddRecipeForm = ({ onAddRecipe, catagory, closeForm, option }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [temp, setTemp] = useState("");
  const [totalTime, setTotalTime] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [3, 3],
      quality: 1,
    });

    //console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const sendDoc = () => {
    if (title === "") return showToast();
    const newRecipe = {
      _id: title,
      Catagory: catagory,
      Title: title,
      Desc: description,
      Temp: temp,
      TotalTime: totalTime,
      Ingredients: ingredients.split(","),
      Instructions: instructions,
      ImageUri: image,
    };
    onAddRecipe(newRecipe);
  };

  const showToast = () => {
    Toast.show({
      type: "error",
      text1: "You must add a title",
      text2: "It makes a much better experience! 😊",
      position: "bottom",
      bottomOffset: 10,
    });
  };

  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 15,
          textAlign: "center",
          width: "75%",
          alignSelf: "center",
          backgroundColor: "#4cc9f0",
          borderRadius: 50,
          paddingVertical: 5,
          paddingHorizontal: 10,
          elevation: 10,
        }}
      >
        Add Your Recipe!
      </Text>
      <Pressable style={styles.imageContainer} onPress={pickImage}>
        {image ? (
          <Image
            pointerEvents="none"
            source={{ uri: image }}
            style={{ width: 150, height: 150, borderRadius: 50, elevation: 5 }}
          />
        ) : (
          <Text style={{ textAlign: "center" }}>Select An Image</Text>
        )}
      </Pressable>
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
      {option ? (
        <Pressable style={styles.submit} onPress={closeForm}>
          <Text>Close</Text>
        </Pressable>
      ) : (
        ""
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    marginBottom: 50,
    width: "95%"
  },
  imageContainer: {
    marginVertical: 25,
    paddingHorizontal: 10,
    width: 150,
    height: 150,
    borderRadius: 50,
    elevation: 5,
    backgroundColor: "#4cc9f0",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
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
    elevation: 5,
  },
});

export default AddRecipeForm;
