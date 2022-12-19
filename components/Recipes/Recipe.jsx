import { View, Text, Pressable, StyleSheet } from "react-native";
const Recipe = ({ recipe, onShowRecipeClick }) => {
  return (
    <View style={styles.container}>
      <Text>{recipe.doc.Title}</Text>
      <Pressable onPress={() => onShowRecipeClick(recipe)}>
        <Text>View Recipe</Text>
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
  },
});

export default Recipe;
