import { View, Text, Pressable, FlatList, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const BigRecipe = ({ onCloseClick, recipe }) => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.close} onPress={() => onCloseClick()}>
        <Icon name="close" />
      </Pressable>
      <Text>{recipe.doc.Title}</Text>
      <Text>{recipe.doc.Desc}</Text>
      <View>
        <FlatList
          data={recipe.doc.Ingredients}
          renderItem={({ item }) => <Text>{item}</Text>}
          style={styles.list}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "66%",
    alignSelf: "center",
    margin: 15,
    borderRadius: 50,
    elevation: 15,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  close: {
    position: "absolute",
    top: "5%",
    left: "7.5%",
    padding: 5,
    borderRadius: 50,
    backgroundColor: "#f77",
  },
  list: {
    maxHeight: 200,
    width: 150,
    borderRadius: 50,
    backgroundColor: "#fff",
    elevation: 5,
  },
});

export default BigRecipe;
