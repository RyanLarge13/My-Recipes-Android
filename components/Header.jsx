import { View, StyleSheet, Pressable, Text } from "react-native";

const Header = ({ name, showCatagoryComponent }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <Pressable
        style={styles.catagoryButton}
        onPress={() => showCatagoryComponent(true)}
      >
        <Text style={styles.catagoryText}>Catagories</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    width: "100%",
    top: 0,
    height: 80,
    backgroundColor: "#4cc9f0",
    borderRadius: 25,
    elevation: 225,
    justifyContent: "center",
    alignItems: "center",
  },
  name: {
    marginTop: "2.5%",
  },
  catagoryButton: {
    position: "absolute",
    top: 62,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    height: 35,
    width: 110,
    borderRadius: 50,
    backgroundColor: "#f72585",
    elevation: 75,
  },
  catagoryText: {
    fontSize: 10,
  },
});

export default Header;
