import { View, Text, StyleSheet } from "react-native";

const BigRecipe = ({ onCloseClick, recipe }) => {
  return (
    <View style={styles.container}>
      <Text>{recipe.doc.Title}</Text>
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
});

export default BigRecipe;
