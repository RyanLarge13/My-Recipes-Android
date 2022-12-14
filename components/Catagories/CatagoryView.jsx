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
    Animated.timing(animation, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [animation]);

  const fadeOut = useCallback(() => {
    setClosing(true);
    Animated.timing(closeAnimation, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
    setTimeout(() => {
      closeCatagoryView(false);
    }, 500);
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
              <Text style={styles.addACatagoryText}>
                Add A New Catagory And Start Building Recipes!!
              </Text>
            ) : (
              <CatagoryForm />
            )}
          </View>
        ) : (
          catagories.map((catagory) => <Catagory catagory={catagory} />)
        )}
        <Pressable
          style={!addCatagoryForm ? styles.addCatagory : styles.hidden}
          onPress={() => setAddCatagoryForm(true)}
        >
          <Text
            style={!addCatagoryForm ? styles.addCatagoryText : styles.hidden}
          >
            +
          </Text>
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
    minHeight: 700,
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
  addACatagoryText: {
    fontSize: 17,
    fontWeight: "bold",
    maxWidth: "60%",
    textAlign: "center",
  },
  addCatagory: {
    marginTop: 25,
    paddingVertical: 2,
    paddingHorizontal: 10,
    borderRadius: 50,
    backgroundColor: "#fff",
  },
  addCatagoryText: {
    fontSize: 20,
    fontWeight: "600",
  },
  hidden: {
    display: "none",
  },
  toast: {
    elevation: 100,
  },
});

export default CatagoryView;
