import { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  Pressable,
  StyleSheet,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Camera, CameraType } from "expo-camera";
import Toast from "react-native-toast-message";
import PouchDB from "pouchdb-react-native";

const ContactForm = ({ closeForm }) => {
  const [title, setTitle] = useState("");
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

  const showToast = () => {
    Toast.show({
      type: "error",
      text1: "You must add a title",
      text2: "It makes a much better experience! 😊",
      position: "bottom",
      bottomOffset: 10,
    });
  };

  const addCatagory = async () => {
    if (title === "") return showToast();
    const recipeDB = new PouchDB(`${title}`);
    const localDB = new PouchDB("catagories");
    const newCatagory = {
      _id: title,
      Title: title,
      ImageUri: image,
    };
    await localDB.put(newCatagory);
    closeForm(false);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.title}
        autoCompleteType="text"
        onChangeText={(text) => setTitle(text)}
        placeholder="Title"
      />
      <Pressable style={styles.openGalleryBtn} onPress={pickImage}>
        <Text>Open Gallery</Text>
      </Pressable>
      {image ? (
        <View style={styles.image}>
          <Image
            source={{ uri: image }}
            style={{ width: 200, height: 200, borderRadius: 50, elevation: 5 }}
          />
          <Pressable style={styles.addCatagoryBtn} onPress={addCatagory}>
            <Text>Add</Text>
          </Pressable>
        </View>
      ) : (
        <View style={styles.image}></View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 110,
    justifyContent: "center",
    alignItems: "center",
    height: "40%",
    width: "100%",
  },
  title: {
    textAlign: "center",
    minWidth: "90%",
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 20,
    elevation: 10,
  },
  openGalleryBtn: {
    marginVertical: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
    elevation: 10,
    backgroundColor: "#f111f5",
    borderRadius: 50,
  },
  image: {
    minWidth: 200,
    minHeight: 200,
    maxHeight: 200,
    maxWidth: 200,
    borderRadius: 50,
    backgroundColor: "#fff",
    elevation: 10,
  },
  addCatagoryBtn: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    width: 75,
    marginVertical: 25,
    paddingVertical: 5,
    borderRadius: 50,
    backgroundColor: "#f111f5",
    elevation: 10,
  },
});

export default ContactForm;
