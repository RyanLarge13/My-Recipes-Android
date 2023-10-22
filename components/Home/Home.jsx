import { View, StyleSheet, Text } from "react-native";

const Home = () => {
  return (
    <View>
      <Text>My Recipes</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  intro: {
    marginHorizontal: 25,
    textAlign: "center",
  },
  catagoryText: {
    textAlign: "center",
    marginHorizontal: 10,
    marginTop: 25,
  },
});

export default Home;
