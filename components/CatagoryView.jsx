import { useRef, useState, useEffect, useCallback } from "react";
import { Animated, View, Text, StyleSheet, Pressable } from "react-native";
import Catagory from "./Catagory";
import CatagoryForm from "./CatagoryForm";

const CatagoryView = ({ closeCatagoryView, catagories }) => {
  const [closing, setClosing] = useState(false);
  const [addCatagoryForm, setAddCatagoryForm] = useState(false);

  const animation = useRef(new Animated.Value(0)).current;
  const closeAnimation = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    fadeIn();
  }, [animation]);

  const fadeIn = () => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = useCallback(() => {
    Animated.timing(closeAnimation, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    });
    closeCatagoryView(false);
  }, [closeAnimation]);

  return (
    <>
      <Animated.View
        style={
          !closing
            ? [styles.container, { opacity: animation }]
            : [styles.container, { opacity: closeAnimation }]
        }
      >
        {catagories.length < 1 ? (
          <View>
            {!addCatagoryForm ? (
              <Text>Add a new catagory with recipes!!</Text>
            ) : (
              <CatagoryForm />
            )}
          </View>
        ) : (
          catagories.map((catagory) => <Catagory catagory={catagory} />)
        )}
        <Pressable
          style={styles.addCatagory}
          onPress={() => setAddCatagoryForm(true)}
        >
          <Text style={styles.addCatagoryText}>+</Text>
        </Pressable>
        <Pressable style={styles.close} onPress={fadeOut}>
          <Text style={styles.closeText}>Close</Text>
        </Pressable>
      </Animated.View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    height: "75%",
    width: "100%",
    backgroundColor: "#4cc9f0",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    elevation: 10,
  },
  close: {
    position: "absolute",
    top: "75%",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    height: 5,
    width: "75%",
    borderRadius: 50,
    backgroundColor: "#f72585",
    elevation: 75,
    marginTop: "25%",
  },
  closeText: {
    fontSize: 10,
  },
  addCatagory: {
    marginTop: "5%",
    paddingVertical: 2,
    paddingHorizontal: 10,
    borderRadius: 50,
    backgroundColor: "#fff",
  },
  addCatagoryText: {
    fontSize: 20,
    fontWeight: "600",
  },
});

export default CatagoryView;
