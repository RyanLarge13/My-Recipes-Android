import {
  View,
  Text,
  Pressable,
  FlatList,
  Image,
  StyleSheet,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import PouchDB from "pouchdb-react-native";

const BigRecipe = ({ onCloseClick, recipe, catagory }) => {
  const deleteRecipeFunc = () => {
    const recipeDB = new PouchDB(catagory);

    recipeDB
      .get(recipe.id)
      .then((doc) => recipeDB.remove(doc))
      .catch((err) => console.log(err));
  };

  return (
    <View style={styles.container}>
      <Pressable style={styles.close} onPress={() => onCloseClick()}>
        <Icon name="close" />
      </Pressable>
      <Image
        source={{ uri: recipe.doc.ImageUri }}
        style={{
          width: 200,
          height: 200,
          borderRadius: 50,
          position: "absolute",
          top: -30,
          alignSelf: "center",
          elevation: 10
        }}
      />
      <Text style={styles.title}>{recipe.doc.Title}</Text>
      <Text style={styles.desc}>{recipe.doc.Desc}</Text>
      <View style={styles.list}>
        {recipe.doc.Ingredients.map((ing, index) => (
          <Text key={index}>{`${index + 1}- ${ing}`}</Text>
        ))}
      </View>
      <Text
        style={styles.temp}
      >{`Start your preheating @ ${recipe.doc.Temp}`}</Text>
      <Text style={styles.time}>{recipe.doc.TotalTime}</Text>
      <Text style={styles.instructionsIndicator}>Instructions:</Text>
      <View style={styles.instructionsContainer}>
        <Text style={styles.instructions}>{recipe.doc.Instructions}</Text>
      </View>
      <Pressable
        style={styles.deleteRecipe}
        onPress={() => {
          deleteRecipeFunc();
          onCloseClick();
        }}
      >
        <Text>Delete Recipe</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignSelf: "center",
    paddingVertical: 50,
    paddingHorizontal: 25,
    margin: 15,
    borderRadius: 50,
    elevation: 15,
    backgroundColor: "#fff",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  close: {
    position: "absolute",
    top: "2.5%",
    left: "7.5%",
    width: 25,
    height: 25,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    backgroundColor: "#f77",
  },
  title: {
    marginTop: 150,
    fontSize: 25,
    textAlign: "center",
    marginBottom: 5,
  },
  desc: {
    fontSize: 15,
    color: "#555",
    textAlign: "center",
    marginBottom: 10,
  },
  list: {
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderRadius: 10,
    backgroundColor: "#fff",
    elevation: 5,
  },
  temp: {
    marginVertical: 25,
  },
  time: {},
  instructionsIndicator: {
    marginTop: 25,
    marginBottom: 5,
    fontSize: 20,
  },
  instructionsContainer: {
    marginBottom: 25,
    alignSelf: "center",
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#fff",
    elevation: 10,
  },
  instructions: {},
  deleteRecipe: {
    position: "absolute",
    bottom: 15,
    paddingVertical: 5,
    backgroundColor: "#f55",
    borderRadius: 50,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default BigRecipe;
