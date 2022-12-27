import { useState, useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";

const Home = () => {
  return (
    <View>
      <Text style={styles.intro}>
        Hi there! Select a catagory from the header above and start viewing,
        creating, and saving your favorite recipes!
      </Text>
      <Text style={styles.catagoryText}>
        If you are new here, you will first need to create a new catagory! It is
        as simple as selecting a photo and adding a title. THAT'S IT!</Text>
        
        <Text style={styles.catagoryText}>From there
        you can select it and add as many recipes as you would like to your new
        catagory. This way things stay organized. 😊
      </Text>
      <Text style={styles.catagoryText}>
        Do you enjoy My Recipes?? Don't forget to share our app on Google Play!
      </Text>
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
