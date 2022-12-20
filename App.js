import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";
import { StyleSheet, ScrollView, View, Text, Pressable } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import PouchDB from "pouchdb-react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Toast from "react-native-toast-message";
import Header from "./components/Header";
import CatagoryView from "./components/Catagories/CatagoryView";
import AddRecipeForm from "./components/Recipes/AddRecipeForm";
import Recipe from "./components/Recipes/Recipe";
import BigRecipe from "./components/Recipes/BigRecipe";

export default function App() {
  const [catagoryComponent, setCatagoryComponent] = useState(false);
  const [catagories, setCatagories] = useState([]);
  const [title, setTitle] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [showRecipe, setShowRecipe] = useState(false);
  const [recipeForm, setRecipeForm] = useState(false);

  const localDB = new PouchDB("catagories");
  const remoteDB = new PouchDB("http://localhost:5984/docs");
  const sync = localDB.sync(remoteDB, {
    live: true,
    retry: true,
  });

  useEffect(() => {
    localDB
      .allDocs({
        include_docs: true,
        attachments: true,
      })
      .then((res) => {
        setCatagories(res.rows);
      })
      .catch((err) => console.log(err));
    //localDB.info().then((info) => console.log(info));
    //remoteDB.info().then((info) => console.log(info));
  });

  const findRecipes = (db) => {
    setTitle(db);
    const recipeDB = new PouchDB(db);
    recipeDB
      .allDocs({
        include_docs: true,
        attachments: true,
      })
      .then((res) => {
        setRecipes(res.rows);
      })
      .catch((err) => console.log(err));
  };

  const findRecipesAndAdd = (recipe) => {
    const recipeDB = new PouchDB(recipe.Catagory);
    recipeDB.put(recipe);
    findRecipes(recipe.Catagory);
  };

  return (
    <>
      <StatusBar style={styles.statusBar} />
      <ScrollView style={styles.container}>
        <Text
          style={{
            fontSize: 20,
            textAlign: "center",
            marginBottom: 50,
            marginTop: 50,
          }}
        >
          {title !== "" ? title : "Welcome!"}
        </Text>
        {!title ? (
          <Text style={{ fontSize: 15, textAlign: "center" }}>
            Select a catagory
          </Text>
        ) : (
          <View pointerEvents={catagoryComponent ? "none" : "auto"}>
            {recipes.length < 1 ? (
              <>
                <Text style={{ fontSize: 20, textAlign: "center" }}>
                  You have no recipes under this catagory.
                </Text>
                <AddRecipeForm
                  onAddRecipe={(recipe) => findRecipesAndAdd(recipe)}
                  catagory={title}
                  option={false}
                />
              </>
            ) : (
              <View style={styles.scrollRecipes}>
                {showRecipe ? (
                  <BigRecipe
                    onCloseClick={() => setShowRecipe(false)}
                    recipe={showRecipe}
                    catagory={title}
                  />
                ) : (
                  recipes.map((recipe, index) => (
                    <Recipe
                      key={index}
                      recipe={recipe}
                      onShowRecipeClick={(recipe) => setShowRecipe(recipe)}
                    />
                  ))
                )}
                {recipeForm ? (
                  <AddRecipeForm
                    onAddRecipe={(recipe) => findRecipesAndAdd(recipe)}
                    catagory={title}
                    closeForm={() => setRecipeForm(false)}
                    option={true}
                  />
                ) : (
                  <Pressable
                    style={styles.openRecipeForm}
                    onPress={() => setRecipeForm(true)}
                  >
                    <Icon
                      name="plus"
                      style={{ alignSelf: "center", fontSize: 20 }}
                    />
                  </Pressable>
                )}
              </View>
            )}
          </View>
        )}
      </ScrollView>
      <Header
        name="Ryan"
        showCatagoryComponent={(bool) => setCatagoryComponent(bool)}
      />
      {catagoryComponent ? (
        <CatagoryView
          closeCatagoryView={(bool) => setCatagoryComponent(bool)}
          catagories={catagories}
          onFindRecipes={(db) => findRecipes(db)}
        />
      ) : (
        ""
      )}
      <Toast />
    </>
  );
}

const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: "4cc9f0",
  },
  container: {
    flex: 1,
    paddingVertical: 25,
    marginTop: 80,
    padding: "2%",
  },
  openRecipeForm: {
    marginTop: 100,
    marginBottom: 50,
    paddingVertical: 5,
    width: "100%",
    borderRadius: 50,
    backgroundColor: "#f72585",
    elevation: 5,
  },
});
