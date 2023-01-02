import { View, Text, Pressable, Image, StyleSheet } from "react-native";
const Recipe = ({ recipe, onShowRecipeClick }) => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: recipe.doc.ImageUri }}
        style={{
          position: "absolute",
          width: 175,
          height: 175,
          borderRadius: 50,
        }}
      />
      <Text style={styles.title}>{recipe.doc.Title}</Text>
      <Pressable
        style={styles.viewRecipe}
        onPress={() => onShowRecipeClick(recipe)}
      >
        <Text style={{ fontSize: 10 }}>View Recipe</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 175,
    height: 175,
    borderRadius: 50,
    backgroundColor: "#fff",
    elevation: 5,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 25,
  },
  title: {
    textAlign: "center",
    marginBottom: 10,
    backgroundColor: "#fff",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
    elevation: 5,
  },
  viewRecipe: {
    position: "absolute",
    bottom: -15,
    paddingVertical: 7.5,
    paddingHorizontal: 15,
    borderRadius: 50,
    backgroundColor: "#f72585",
    elevation: 5,
  },
});

export default Recipe;
