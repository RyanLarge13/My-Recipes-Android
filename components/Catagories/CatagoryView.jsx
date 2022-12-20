import { useRef, useState, useEffect, useCallback } from "react";
import {
  ScrollView,
  Animated,
  View,
  Text,
  StyleSheet,
  Pressable,
} from "react-native";
import Catagory from "./Catagory";
import CatagoryForm from "./CatagoryForm";

const CatagoryView = ({ closeCatagoryView, catagories, onFindRecipes }) => {
  const [closing, setClosing] = useState(false);
  const [addCatagoryForm, setAddCatagoryForm] = useState(false);

  const animation = useRef(new Animated.Value(0)).current;
  const closeAnimation = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 250,
      useNativeDriver: true,
    }).start();
  }, [animation]);

  const fadeOut = useCallback(() => {
    setClosing(true);
    Animated.timing(closeAnimation, {
      toValue: 0,
      duration: 250,
      useNativeDriver: true,
    }).start();
    setTimeout(() => {
      closeCatagoryView(false);
    }, 250);
  }, [closeAnimation]);

  const sendRecipes = (db) => {
    onFindRecipes(db);
  };

  return (
    <>
      <Animated.View
        style={
          !closing
            ? [styles.container, { opacity: animation }]
            : [styles.container, { opacity: closeAnimation }]
        }
      >
        <View>
          {!addCatagoryForm ? (
            <>
              <View style={styles.catagoryComponentContainer}>
                {catagories.map((catagory, index) => (
                  <Catagory
                    key={index}
                    catagory={catagory}
                    filterRecipes={(db) => sendRecipes(db)}
                    toggleView={fadeOut}
                  />
                ))}
              </View>
              <Text style={styles.addACatagoryText}>Add A New Catagory</Text>
            </>
          ) : (
            <CatagoryForm closeForm={(bool) => setAddCatagoryForm(bool)} />
          )}
        </View>
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
  scrollContainer: {
    flex: 1,
    marginTop: 100,
    paddingTop: 50,
  },
  catagoryComponentContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
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
    elevation: 100,
    marginTop: "25%",
  },
  closeText: {
    fontSize: 10,
  },
  addACatagoryText: {
    marginTop: 40,
    fontSize: 17,
    fontWeight: "bold",
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
