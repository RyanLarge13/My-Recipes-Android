import { useEffect } from "react";
import { View, Text, Pressable, Image, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import PouchDB from "pouchdb-react-native";

const Catagory = ({ catagory, filterRecipes }) => {
  useEffect(() => {
    // console.log(catagory);
  }, []);

  const deleteCatagory = (id) => {
    const localDB = new PouchDB("catagories");

    localDB
      .get(id)
      .then((doc) => localDB.remove(doc))
      .catch((err) => console.log(err));
  };

  return (
    <Pressable
      style={styles.container}
      onPress={() => filterRecipes(catagory.doc.Title)}
    >
      <Image
        source={{ uri: catagory.doc.ImageUri }}
        style={{
          position: "absolute",
          width: 175,
          height: 175,
          borderRadius: 50,
          elevation: 5,
        }}
      />
      <Pressable
        style={styles.delete}
        onPress={() => deleteCatagory(catagory.id)}
      >
        <Icon name="close"></Icon>
      </Pressable>
      <Pressable style={styles.showRecipes}>
        <Text>{catagory.doc.Title}</Text>
      </Pressable>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    backgroundColor: "#fff",
    width: 175,
    height: 175,
    borderRadius: 50,
    elevation: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  delete: {
    width: 25,
    height: 25,
    borderRadius: 50,
    backgroundColor: "#f77",
    justifyContent: "center",
    alignItems: "center",
    elevation: 10,
    position: "absolute",
    top: -2.5,
    right: -2.5,
  },
  showRecipes: {
    position: "absolute",
    bottom: -15,
    borderRadius: 50,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: "#fff",
    elevation: 10,
  },
});

export default Catagory;
